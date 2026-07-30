#!/usr/bin/env node
// Push all clientehub files to GitHub via Contents API (same as push-portfolio.mjs)
import { ReplitConnectors } from "@replit/connectors-sdk";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

const connectors = new ReplitConnectors();
const OWNER = "reinaldobarreto31";
const REPO  = "clientehub";
const SRC   = "/tmp/clientehub";

async function gh(method, path, body) {
  const res = await connectors.proxy("github", path, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: body ? { "Content-Type": "application/json" } : {},
  });
  let data;
  try { data = await res.json(); } catch { data = {}; }
  return { status: res.status, data };
}

function walk(dir, base = "") {
  const out = [];
  for (const e of readdirSync(dir)) {
    const full = resolve(dir, e);
    const rel  = base ? `${base}/${e}` : e;
    statSync(full).isDirectory() ? out.push(...walk(full, rel)) : out.push({ rel, full });
  }
  return out;
}

// ── 1. Ensure repo exists ────────────────────────────────────────────────────
console.log(`\n📦 repo ${OWNER}/${REPO}`);
const repoCheck = await gh("GET", `/repos/${OWNER}/${REPO}`);
if (repoCheck.status === 404) {
  const r = await gh("POST", `/user/repos`, {
    name: REPO,
    description: "CRUD completo de clientes — Spring Boot 3 + React 18 + JWT + PostgreSQL + Docker",
    private: false, auto_init: false, has_issues: true,
  });
  if (![200,201].includes(r.status)) { console.error("repo create failed", r.data); process.exit(1); }
  console.log("  ✓ created");
  await new Promise(r => setTimeout(r, 2000));
} else {
  console.log("  ✓ exists");
}

// ── 2. Push every file via Contents API ───────────────────────────────────────
const files = walk(SRC);
console.log(`\n📁 Pushing ${files.length} files...\n`);
let ok = 0, skip = 0, fail = 0;

for (let i = 0; i < files.length; i++) {
  const { rel, full } = files[i];
  const content = readFileSync(full).toString("base64");

  // Check if file already exists (to get SHA for update)
  const existing = await gh("GET", `/repos/${OWNER}/${REPO}/contents/${rel}`);
  const sha = existing.status === 200 ? existing.data.sha : undefined;

  // Skip if content is identical
  if (sha && existing.data.content) {
    const remote = existing.data.content.replace(/\n/g, "");
    if (remote === content) {
      process.stdout.write(`  [${i+1}/${files.length}] = ${rel}\n`);
      skip++;
      continue;
    }
  }

  const r = await gh("PUT", `/repos/${OWNER}/${REPO}/contents/${rel}`, {
    message: `feat: add ${rel}`,
    content,
    ...(sha ? { sha } : {}),
  });

  const success = [200, 201].includes(r.status);
  process.stdout.write(`  [${i+1}/${files.length}] ${success ? "✓" : "✗"} ${rel}${!success ? "  — " + (r.data?.message ?? r.status) : ""}\n`);
  success ? ok++ : fail++;
}

console.log(`\n📊 ${ok} created/updated · ${skip} unchanged · ${fail} failed`);
if (fail > 0) { console.error("Some files failed."); process.exit(1); }
console.log(`\n✅  https://github.com/${OWNER}/${REPO}\n`);
