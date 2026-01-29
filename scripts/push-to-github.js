#!/usr/bin/env node
/**
 * Push local files to a GitHub repo by creating a commit and updating a branch ref.
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/push-to-github.js --repo owner/repo --branch main --message "Update" path/to/file1 path/to/file2
 *
 * The script will read the files, create blobs, create a tree from the current branch, create a commit, and update the branch ref.
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

function usage() {
  console.error("Usage: GITHUB_TOKEN=... node scripts/push-to-github.js --repo owner/repo --branch main --message \"msg\" file1 [file2 ...]");
  process.exit(1);
}

const argv = process.argv.slice(2);
if (argv.length < 4) usage();

let repoArg, branch = "main", message = "Update from script", files = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--repo") repoArg = argv[++i];
  else if (a === "--branch") branch = argv[++i];
  else if (a === "--message") message = argv[++i];
  else files.push(a);
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error("Error: GITHUB_TOKEN environment variable is required.");
  usage();
}
if (!repoArg) {
  console.error("Error: --repo owner/repo is required");
  usage();
}

const [owner, repo] = repoArg.split("/");
if (!owner || !repo) {
  console.error("Error: --repo must be in owner/repo format");
  usage();
}

function ghFetch(pathname, method = "GET", body) {
  const opts = {
    hostname: "api.github.com",
    path: pathname,
    method,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "repo-push-script",
      Accept: "application/vnd.github+json",
    },
  };
  return new Promise((resolve, reject) => {
    const req = https.request(opts, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = data ? JSON.parse(data) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) resolve(parsed);
          else reject({ status: res.statusCode, body: parsed });
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function run() {
  try {
    // Get ref for branch
    const ref = await ghFetch(`/repos/${owner}/${repo}/git/ref/heads/${branch}`);
    const baseSha = ref.object.sha;

    // Get the tree of the base commit
    const commit = await ghFetch(`/repos/${owner}/${repo}/git/commits/${baseSha}`);
    const baseTree = commit.tree.sha;

    // Create blobs for changed files
    const blobs = [];
    for (const f of files) {
      const content = fs.readFileSync(path.resolve(f), "utf8");
      const blob = await ghFetch(`/repos/${owner}/${repo}/git/blobs`, "POST", {
        content,
        encoding: "utf-8",
      });
      blobs.push({ path: f.replace(/\\/g, "/"), sha: blob.sha });
    }

    // Create a new tree based on baseTree and our blobs
    const treeItems = blobs.map((b) => ({ path: b.path, mode: "100644", type: "blob", sha: b.sha }));
    const newTree = await ghFetch(`/repos/${owner}/${repo}/git/trees`, "POST", {
      base_tree: baseTree,
      tree: treeItems,
    });

    // Create commit
    const newCommit = await ghFetch(`/repos/${owner}/${repo}/git/commits`, "POST", {
      message,
      tree: newTree.sha,
      parents: [baseSha],
    });

    // Update ref
    await ghFetch(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, "PATCH", {
      sha: newCommit.sha,
    });

    console.log("Pushed files and updated branch", branch);
  } catch (err) {
    console.error("Failed to push:", err);
    process.exit(1);
  }
}

run();
