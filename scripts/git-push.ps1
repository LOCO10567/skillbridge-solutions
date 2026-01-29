# PowerShell helper to commit & push changes using local git (requires git installed)
# Usage:
#   .\scripts\git-push.ps1 -Message "Update footer" -Branch "main"

param(
  [string]$Message = "Update from script",
  [string]$Branch = "main",
  [string[]]$Paths = @()
)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "git is not installed or not available in PATH. Install git or use the Node GitHub API script instead."
  exit 1
}

if ($Paths.Count -eq 0) {
  # default to all changes
  git add -A
} else {
  git add -- $Paths
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) {
  Write-Error "git commit failed. Possibly no changes to commit."
  exit $LASTEXITCODE
}

git push origin $Branch
if ($LASTEXITCODE -ne 0) {
  Write-Error "git push failed. Check repo remote and credentials."
  exit $LASTEXITCODE
}

Write-Output "Pushed commit to origin/$Branch";
