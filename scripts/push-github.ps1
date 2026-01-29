param(
  [Parameter(Mandatory=$true)][string]$Repo,
  [Parameter(Mandatory=$true)][string]$GitHubToken,
  [string]$Branch = "main",
  [string]$Message = "Update from script",
  [string[]]$FilePaths = @()
)

if ($FilePaths.Count -eq 0) {
  Write-Error "No file paths provided. Usage: -FilePaths 'src/file1.ts','src/file2.ts'"
  exit 1
}

$owner, $repoName = $Repo.Split("/")
if (-not $repoName) {
  Write-Error "Repo must be in 'owner/repo' format"
  exit 1
}

$baseUrl = "https://api.github.com/repos/$Repo"
$headers = @{
  Authorization = "Bearer $GitHubToken"
  Accept = "application/vnd.github+json"
  "User-Agent" = "PowerShell-Push-Script"
}

Write-Host "Getting current branch ref..."
$refUrl = "$baseUrl/git/refs/heads/$Branch"
$refResp = Invoke-WebRequest -Uri $refUrl -Headers $headers -Method Get -UseBasicParsing
$ref = $refResp.Content | ConvertFrom-Json
$baseSha = $ref.object.sha
Write-Host "Current commit: $baseSha"

Write-Host "Getting base tree..."
$commitUrl = "$baseUrl/git/commits/$baseSha"
$commitResp = Invoke-WebRequest -Uri $commitUrl -Headers $headers -Method Get -UseBasicParsing
$commit = $commitResp.Content | ConvertFrom-Json
$baseTree = $commit.tree.sha
Write-Host "Base tree: $baseTree"

$treeItems = @()
foreach ($filePath in $FilePaths) {
  Write-Host "Reading file: $filePath"
  $content = Get-Content -Path $filePath -Raw -Encoding UTF8
  
  # Create blob
  $blobUrl = "$baseUrl/git/blobs"
  $escapedContent = $content -replace '\\', '\\\\' -replace '"', '\"' -replace "`n", '\n' -replace "`r", ''
  $blobBody = @{
    content = $content
    encoding = "utf-8"
  } | ConvertTo-Json -Depth 10
  
  Write-Host "  Posting blob..."
  $blobResp = Invoke-WebRequest -Uri $blobUrl -Headers $headers -Method Post -Body $blobBody -ContentType "application/json" -UseBasicParsing -ErrorAction Stop
  $blob = $blobResp.Content | ConvertFrom-Json
  $blobSha = $blob.sha
  Write-Host "  Created blob: $blobSha"
  
  # Normalize path for GitHub (use forward slashes)
  $gitPath = $filePath -replace '\\', '/'
  $treeItems += @{
    path = $gitPath
    mode = "100644"
    type = "blob"
    sha = $blobSha
  }
}

Write-Host "Creating tree..."
$treeUrl = "$baseUrl/git/trees"
$treeBody = @{
  base_tree = $baseTree
  tree = $treeItems
} | ConvertTo-Json -Depth 5

$treeResp = Invoke-WebRequest -Uri $treeUrl -Headers $headers -Method Post -Body $treeBody -ContentType "application/json" -UseBasicParsing
$newTree = $treeResp.Content | ConvertFrom-Json
$newTreeSha = $newTree.sha
Write-Host "Created tree: $newTreeSha"

Write-Host "Creating commit..."
$commitBody = @{
  message = $Message
  tree = $newTreeSha
  parents = @($baseSha)
} | ConvertTo-Json

$newCommitResp = Invoke-WebRequest -Uri "$baseUrl/git/commits" -Headers $headers -Method Post -Body $commitBody -ContentType "application/json" -UseBasicParsing
$newCommit = $newCommitResp.Content | ConvertFrom-Json
$newCommitSha = $newCommit.sha
Write-Host "Created commit: $newCommitSha"

Write-Host "Updating branch ref..."
$updateBody = @{
  sha = $newCommitSha
} | ConvertTo-Json

$updateResp = Invoke-WebRequest -Uri $refUrl -Headers $headers -Method Patch -Body $updateBody -ContentType "application/json" -UseBasicParsing
Write-Host "[SUCCESS] Pushed to $Repo / $Branch"
Write-Host "Commit: $newCommitSha"
