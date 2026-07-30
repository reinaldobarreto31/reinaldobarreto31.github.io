#!/usr/bin/env node
// Push .github/workflows/ci.yml to reinaldobarreto31/clientehub via Git Data API
// The Contents API requires the 'workflow' OAuth scope, but the Git Data API does not.
import { ReplitConnectors } from "@replit/connectors-sdk";

const connectors = new ReplitConnectors();
const OWNER = "reinaldobarreto31";
const REPO  = "clientehub";
const BRANCH = "main";

const proxyBase = connectors.getProxyUrl();
const proxyHeaders = await connectors.getProxyHeaders("github");

async function gh(method, path, body) {
  const url = `${proxyBase}/repos/${OWNER}/${REPO}${path}`;
  const res = await fetch(url, {
    method,
    headers: { ...proxyHeaders, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { _raw: text.slice(0, 300) }; }
  if (res.status >= 400) {
    console.error(`❌  ${method} ${path} → ${res.status}`, JSON.stringify(data).slice(0, 300));
    process.exit(1);
  }
  return data;
}

async function ghRaw(method, path, body) {
  const url = `${proxyBase}${path}`;
  const res = await fetch(url, {
    method,
    headers: { ...proxyHeaders, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { _raw: text.slice(0, 300) }; }
  if (res.status >= 400) {
    console.error(`❌  ${method} ${path} → ${res.status}`, JSON.stringify(data).slice(0, 300));
    process.exit(1);
  }
  return data;
}

const ciYml = `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  backend:
    name: Backend — Maven build
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: backend

    steps:
      - uses: actions/checkout@v4

      - name: Set up JDK 21
        uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: temurin
          cache: maven

      - name: Build & test
        run: mvn -B verify --no-transfer-progress

  frontend:
    name: Frontend — TypeScript build
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: frontend

    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: npm
          cache-dependency-path: frontend/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Type-check
        run: npx tsc --noEmit

      - name: Build
        run: npm run build
`;

console.log(`\n🔧  Pushing .github/workflows/ci.yml to ${OWNER}/${REPO} via Git Data API\n`);

// 1. Create blob
console.log("1️⃣  Creating blob...");
const blob = await ghRaw("POST", `/repos/${OWNER}/${REPO}/git/blobs`, {
  content: ciYml,
  encoding: "utf-8",
});
console.log(`   blob sha: ${blob.sha}`);

// 2. Get current HEAD commit SHA
console.log("2️⃣  Getting HEAD commit SHA...");
const ref = await ghRaw("GET", `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
const headCommitSha = ref.object.sha;
console.log(`   HEAD commit: ${headCommitSha}`);

// 3. Get the current tree SHA from the commit
console.log("3️⃣  Getting current tree SHA...");
const commit = await ghRaw("GET", `/repos/${OWNER}/${REPO}/git/commits/${headCommitSha}`);
const baseTreeSha = commit.tree.sha;
console.log(`   base tree: ${baseTreeSha}`);

// 4. Create new tree with the workflow file
console.log("4️⃣  Creating new tree...");
const newTree = await ghRaw("POST", `/repos/${OWNER}/${REPO}/git/trees`, {
  base_tree: baseTreeSha,
  tree: [
    {
      path: ".github/workflows/ci.yml",
      mode: "100644",
      type: "blob",
      sha: blob.sha,
    },
  ],
});
console.log(`   new tree: ${newTree.sha}`);

// 5. Create a commit
console.log("5️⃣  Creating commit...");
const newCommit = await ghRaw("POST", `/repos/${OWNER}/${REPO}/git/commits`, {
  message: "ci: add GitHub Actions workflow (Maven + TypeScript build)",
  tree: newTree.sha,
  parents: [headCommitSha],
});
console.log(`   new commit: ${newCommit.sha}`);

// 6. Update the branch ref
console.log("6️⃣  Updating branch ref...");
await ghRaw("PATCH", `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
  sha: newCommit.sha,
});

console.log(`\n✅  Done! CI workflow is live:\n    https://github.com/${OWNER}/${REPO}/actions\n`);
