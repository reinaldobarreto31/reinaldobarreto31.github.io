#!/usr/bin/env node
// One-off script — push project repos & GitHub profile README
import { ReplitConnectors } from "@replit/connectors-sdk";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = resolve(__dirname, "../.."); // workspace root

const OWNER = "reinaldobarreto31";
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

async function ensureRepo(name, description) {
  const check = await gh("GET", `/repos/${OWNER}/${name}`);
  if (check.status === 200) { console.log(`  repo ${name} — already exists`); return; }
  const r = await gh("POST", "/user/repos", {
    name, description, private: false, auto_init: false,
    has_issues: true, has_projects: false, has_wiki: false,
  });
  if (r.status === 201) console.log(`  ✓ created ${name}`);
  else console.log(`  ✗ failed to create ${name}: ${r.status} ${r.data?.message}`);
}

async function pushFile(repo, filePath, localPath) {
  const full = resolve(BASE, localPath);
  if (!existsSync(full)) { console.log(`    skip (not found): ${localPath}`); return; }
  const content = Buffer.from(readFileSync(full, "utf8")).toString("base64");
  const existing = await gh("GET", `/repos/${OWNER}/${repo}/contents/${filePath}`);
  const sha = existing.status === 200 ? existing.data.sha : undefined;
  const r = await gh("PUT", `/repos/${OWNER}/${repo}/contents/${filePath}`, {
    message: `feat: add ${filePath}`,
    content,
    ...(sha ? { sha } : {}),
  });
  const ok = [200, 201].includes(r.status);
  console.log(`    ${ok ? "✓" : "✗"} ${filePath}  (${r.status}${!ok && r.data?.message ? " — " + r.data.message : ""})`);
}

// ── 1. rails-tasks-api ──────────────────────────────────────────────────
console.log("\n── rails-tasks-api");
await ensureRepo("rails-tasks-api", "✅ RESTful CRUD API for task management — Ruby on Rails 7 + PostgreSQL");
for (const [fp, lp] of [
  ["README.md",                                          "projects/rails-tasks-api/README.md"],
  ["Gemfile",                                            "projects/rails-tasks-api/Gemfile"],
  ["config/routes.rb",                                   "projects/rails-tasks-api/config/routes.rb"],
  ["app/controllers/api/v1/tasks_controller.rb",         "projects/rails-tasks-api/app/controllers/api/v1/tasks_controller.rb"],
  ["app/models/task.rb",                                 "projects/rails-tasks-api/app/models/task.rb"],
  ["db/migrate/20240601000000_create_tasks.rb",          "projects/rails-tasks-api/db/migrate/20240601000000_create_tasks.rb"],
  ["db/seeds.rb",                                        "projects/rails-tasks-api/db/seeds.rb"],
]) await pushFile("rails-tasks-api", fp, lp);

// ── 2. ruby-expense-tracker ─────────────────────────────────────────────
console.log("\n── ruby-expense-tracker");
await ensureRepo("ruby-expense-tracker", "💎 Personal expense tracker CLI — pure Ruby, zero gem dependencies");
for (const [fp, lp] of [
  ["README.md",          "projects/ruby-expense-tracker/README.md"],
  ["expense_tracker.rb", "projects/ruby-expense-tracker/expense_tracker.rb"],
]) await pushFile("ruby-expense-tracker", fp, lp);

// ── 3. rails-link-shortener ─────────────────────────────────────────────
console.log("\n── rails-link-shortener");
await ensureRepo("rails-link-shortener", "🔗 URL shortener web app — Rails 7 + Tailwind CSS + Hotwire + Stimulus");
for (const [fp, lp] of [
  ["README.md",                                     "projects/rails-link-shortener/README.md"],
  ["Gemfile",                                       "projects/rails-link-shortener/Gemfile"],
  ["app/models/short_link.rb",                      "projects/rails-link-shortener/app/models/short_link.rb"],
  ["app/controllers/short_links_controller.rb",     "projects/rails-link-shortener/app/controllers/short_links_controller.rb"],
  ["app/views/short_links/index.html.erb",          "projects/rails-link-shortener/app/views/short_links/index.html.erb"],
]) await pushFile("rails-link-shortener", fp, lp);

// ── 4. GitHub Profile README ─────────────────────────────────────────────
console.log("\n── GitHub Profile README (reinaldobarreto31/reinaldobarreto31)");
await ensureRepo(OWNER, "✨ Reinaldo Barreto — Ruby on Rails Engineer | DevOps | SRE");
await pushFile(OWNER, "README.md", "github-profile/README.md");

// ── 5. Snake animation workflow ──────────────────────────────────────────
console.log("\n── GitHub Actions snake workflow");
await pushFile(OWNER, ".github/workflows/snake.yml", "github-profile/.github/workflows/snake.yml");

console.log("\n✅  All done!");
