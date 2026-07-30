#!/usr/bin/env node
// Delete all Ruby/Rails repos from GitHub
import { ReplitConnectors } from "@replit/connectors-sdk";

const connectors = new ReplitConnectors();
const OWNER = "reinaldobarreto31";

const REPOS_TO_DELETE = [
  "rails-tasks-api",
  "rails-auth-api",
  "rails-link-shortener",
  "ruby-expense-tracker",
  "expense-tracker-web",
];

async function gh(method, path, body) {
  const res = await connectors.proxy("github", path, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: body ? { "Content-Type": "application/json" } : {},
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  return { status: res.status, data };
}

console.log("\n🗑️  Deletando repositórios Ruby/Rails do GitHub...\n");

for (const repo of REPOS_TO_DELETE) {
  const r = await gh("DELETE", `/repos/${OWNER}/${repo}`);
  if (r.status === 204) {
    console.log(`  ✓ ${repo} — deletado`);
  } else if (r.status === 404) {
    console.log(`  ~ ${repo} — não encontrado (já deletado?)`);
  } else {
    console.log(`  ✗ ${repo} — erro ${r.status}: ${r.data?.message ?? ""}`);
  }
}

console.log("\n✅  Concluído!");
