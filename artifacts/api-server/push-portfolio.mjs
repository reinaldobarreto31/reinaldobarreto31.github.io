#!/usr/bin/env node
// Push portfolio dist to GitHub Pages repo
import { ReplitConnectors } from "@replit/connectors-sdk";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../portfolio/dist/public");
const OWNER = "reinaldobarreto31";
const REPO  = "reinaldobarreto31.github.io";

const connectors = new ReplitConnectors();

async function gh(method, path, body) {
  const res = await connectors.proxy("github", path, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: body ? { "Content-Type": "application/json" } : {},
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

async function pushFile(filePath, fullPath) {
  const isBinary = /\.(png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot|svg|pdf)$/i.test(filePath);
  const raw = readFileSync(fullPath);
  const content = raw.toString("base64");

  const existing = await gh("GET", `/repos/${OWNER}/${REPO}/contents/${filePath}`);
  const sha = existing.status === 200 ? existing.data.sha : undefined;

  // Skip if identical
  if (sha && existing.data.content) {
    const remote = existing.data.content.replace(/\n/g, "");
    if (remote === content) { process.stdout.write(`  = ${filePath}\n`); return; }
  }

  const r = await gh("PUT", `/repos/${OWNER}/${REPO}/contents/${filePath}`, {
    message: `chore: update ${filePath}`,
    content,
    ...(sha ? { sha } : {}),
  });
  const ok = [200, 201].includes(r.status);
  console.log(`  ${ok ? "✓" : "✗"} ${filePath}  (${r.status}${!ok && r.data?.message ? " — " + r.data.message : ""})`);
}

function walk(dir, base) {
  const entries = readdirSync(dir);
  const files = [];
  for (const e of entries) {
    const full = resolve(dir, e);
    const rel  = base ? `${base}/${e}` : e;
    if (statSync(full).isDirectory()) files.push(...walk(full, rel));
    else files.push({ rel, full });
  }
  return files;
}

console.log(`\nPushing ${DIST} → ${OWNER}/${REPO}\n`);
const files = walk(DIST, "");
console.log(`  ${files.length} files found\n`);

for (const { rel, full } of files) {
  await pushFile(rel, full);
}

console.log("\n✅  Portfolio pushed to GitHub Pages!");
