#!/usr/bin/env node
// Script temporário — push dos projetos para o GitHub via Replit Connectors SDK
import { ReplitConnectors } from "@replit/connectors-sdk";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const OWNER = "reinaldobarreto31";
const BASE  = resolve(process.cwd(), "..");   // workspace root

const connectors = new ReplitConnectors();

async function gh(method, path, body) {
  const res = await connectors.proxy("conn_github_01KYP6659Q7DK3Z972W72M0MN9", path, {
    method,
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: res.status, data: await res.json().catch(() => ({})) };
}

async function ensureRepo(name, description) {
  const check = await gh("GET", `/repos/${OWNER}/${name}`);
  if (check.status === 200) { console.log(`  repo ${name} already exists`); return; }
  const r = await gh("POST", "/user/repos", { name, description, private: false, auto_init: false });
  console.log(`  create ${name}: ${r.status} ${r.data?.message ?? "ok"}`);
}

async function pushFile(repo, filePath, localPath) {
  const full = resolve(BASE, localPath);
  if (!existsSync(full)) { console.log(`  skip (missing): ${localPath}`); return; }
  const content = Buffer.from(readFileSync(full, "utf8")).toString("base64");
  const existing = await gh("GET", `/repos/${OWNER}/${repo}/contents/${filePath}`);
  const sha = existing.status === 200 ? existing.data.sha : undefined;
  const r = await gh("PUT", `/repos/${OWNER}/${repo}/contents/${filePath}`, {
    message: `feat: add ${filePath}`,
    content,
    ...(sha ? { sha } : {}),
  });
  const ok = r.status === 200 || r.status === 201;
  console.log(`  ${ok ? "✓" : "✗"} ${repo}/${filePath}  (${r.status}${r.data?.message ? " " + r.data.message : ""})`);
}

// ── GitHub Profile README ──────────────────────────────────────────
await ensureRepo(OWNER, "✨ Reinaldo Barreto — GitHub Profile README");
await pushFile(OWNER, "README.md", "github-profile/README.md");

console.log("\nDone.");
