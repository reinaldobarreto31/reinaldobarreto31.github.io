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

// ── rails-tasks-api ───────────────────────────────────────────────
await ensureRepo("rails-tasks-api", "API RESTful CRUD de tarefas com Ruby on Rails 7 e PostgreSQL");
for (const [fp, lp] of [
  ["README.md",                                             "projects/rails-tasks-api/README.md"],
  ["Gemfile",                                               "projects/rails-tasks-api/Gemfile"],
  ["config/routes.rb",                                      "projects/rails-tasks-api/config/routes.rb"],
  ["app/controllers/api/v1/tasks_controller.rb",            "projects/rails-tasks-api/app/controllers/api/v1/tasks_controller.rb"],
  ["app/models/task.rb",                                    "projects/rails-tasks-api/app/models/task.rb"],
  ["db/migrate/20240601000000_create_tasks.rb",             "projects/rails-tasks-api/db/migrate/20240601000000_create_tasks.rb"],
  ["db/seeds.rb",                                           "projects/rails-tasks-api/db/seeds.rb"],
]) await pushFile("rails-tasks-api", fp, lp);

// ── ruby-expense-tracker ──────────────────────────────────────────
await ensureRepo("ruby-expense-tracker", "Controle de gastos pessoais via CLI em Ruby puro");
for (const [fp, lp] of [
  ["README.md",          "projects/ruby-expense-tracker/README.md"],
  ["expense_tracker.rb", "projects/ruby-expense-tracker/expense_tracker.rb"],
]) await pushFile("ruby-expense-tracker", fp, lp);

// ── rails-link-shortener ──────────────────────────────────────────
await ensureRepo("rails-link-shortener", "Encurtador de URLs com Rails 7, Tailwind CSS e Stimulus JS");
for (const [fp, lp] of [
  ["README.md",                                      "projects/rails-link-shortener/README.md"],
  ["Gemfile",                                        "projects/rails-link-shortener/Gemfile"],
  ["app/models/short_link.rb",                       "projects/rails-link-shortener/app/models/short_link.rb"],
  ["app/controllers/short_links_controller.rb",      "projects/rails-link-shortener/app/controllers/short_links_controller.rb"],
  ["app/views/short_links/index.html.erb",           "projects/rails-link-shortener/app/views/short_links/index.html.erb"],
]) await pushFile("rails-link-shortener", fp, lp);

// ── GitHub Profile README ──────────────────────────────────────────
await ensureRepo(OWNER, "✨ Reinaldo Barreto — GitHub Profile README");
await pushFile(OWNER, "README.md", "github-profile/README.md");

console.log("\nDone.");
