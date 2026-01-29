This folder contains helper scripts to push local changes to GitHub and trigger Vercel auto-deploys.

1) Node GitHub-API pusher (works without git locally)

Usage:

```powershell
# set a GitHub token (needs repo:contents or repo scope)
$env:GITHUB_TOKEN = "ghp_..."
node scripts/push-to-github.js --repo owner/repo --branch main --message "Update footer" src/components/layout/Footer.tsx
```

Notes:
- The script creates blobs and a commit via the GitHub REST API. It replaces the specified file paths on the target branch.
- You must provide `GITHUB_TOKEN` env var. Use a personal access token with appropriate scopes.

2) PowerShell git helper (requires git installed and configured)

Usage:

```powershell
# commit all changes with a message and push to branch
.
\scripts\git-push.ps1 -Message "Update Werkgebied" -Branch "main"

# or commit only specific files
.
\scripts\git-push.ps1 -Message "Update footer" -Branch "main" -Paths src/components/layout/Footer.tsx
```

After pushing, Vercel (if linked to the repository) will auto-deploy the commit.
