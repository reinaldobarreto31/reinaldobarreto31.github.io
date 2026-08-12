import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPostgresql, SiRedis, SiDocker, SiGithubactions,
} from "react-icons/si";
import { ExternalLink } from "lucide-react";
import type { AdminStackItem, ProjectTone } from "@/lib/default-data";
import {
  SiRubyonrails, SiRuby, SiSwagger, SiJavascript, SiMysql, SiLinux, SiGnubash, SiGit,
  SiAngular, SiVuedotjs, SiTailwindcss, SiVite,
  SiMongodb, SiNodedotjs, SiReact, SiTypescript
} from "react-icons/si";

const ADMIN_ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  rails: SiRubyonrails, ruby: SiRuby,
  node: SiNodedotjs, next: SiNodedotjs, js: SiJavascript, ts: SiTypescript,
  vue: SiVuedotjs, angular: SiAngular, react: SiReact,
  postgres: SiPostgresql, mysql: SiMysql, redis: SiRedis, mongo: SiMongodb,
  docker: SiDocker, actions: SiGithubactions,
  swagger: SiSwagger, git: SiGit, linux: SiLinux, bash: SiGnubash,
  tailwind: SiTailwindcss, vite: SiVite,
};

const GEMS_BY_KEY: Record<string, string[]> = {
  rails: ["Ruby on Rails 7.x/8.x", "ActiveRecord", "ActionCable", "Sidekiq Jobs", "Devise Auth"],
  ruby: ["Ruby 3.x", "RSpec", "FactoryBot", "RuboCop", "Puma Server"],
  node: ["Node.js 20 LTS", "Express", "Prisma", "Jest", "npm"],
  next: ["Next.js 14 App Router", "RSC · Server Actions", "tRPC", "NextAuth", "Vercel"],
  js: ["ES2024", "ESLint + Prettier", "npm / pnpm", "Husky hooks", "ESM Modules"],
  ts: ["TypeScript 5", "Zod", "tsc strict", "esbuild", "Vite"],
  vue: ["Vue 3 · Composition API", "Pinia", "Nuxt 3", "Vue Router", "Axios"],
  angular: ["Angular 18", "RxJS", "Standalone", "Angular CLI"],
  react: ["React 18", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion"],
  postgres: ["PostgreSQL 16", "ActiveRecord Queries", "PgSearch", "JSONB", "Transactions ACID"],
  mysql: ["MySQL 8", "InnoDB", "Replication", "Flyway"],
  redis: ["Redis 7", "Sidekiq Queues", "Caching", "Pub/Sub", "Rate Limit"],
  mongo: ["MongoDB", "Mongoose", "Aggregation Pipeline"],
  docker: ["docker-compose.yml", "alpine", "Dockerfile multi-stage", "Docker BuildKit"],
  actions: ["checkout", "setup-ruby", "bundle exec rspec", "deploy gh-pages"],
  swagger: ["rswag", "Swagger UI", "OpenAPI 3", "Security Schemes JWT", "Redoc"],
  git: ["Git Flow", "Conventional Commits", "Rebase · Cherry-pick", "Husky"],
  linux: ["Ubuntu 24.04", "systemd units", "ufw + fail2ban", "cron · journalctl", "SSH hardening"],
  bash: ["Bash 5", "funções · getopts", "awk · sed · jq", "cronjobs"],
  tailwind: ["Tailwind CSS 3/4", "JIT compiler", "@apply + variants", "Typography Prose"],
  vite: ["Vite 5", "Rollup plugins", "HMR", "esbuild"],
};

const PATTERNS_BY_KEY: Record<string, string[]> = {
  rails: ["Convention over Configuration", "MVC / REST API", "ActiveRecord Patterns", "Service Objects", "Background Jobs"],
  ruby: ["OOP Limpo", "Metaprogramação", "TDD com RSpec", "SOLID", "DRY"],
  node: ["Middleware pipeline", "Error handlers", "Factory + DI", "BullMQ queues"],
  next: ["RSC · SSR", "Server Actions", "Edge Runtime", "tRPC routers"],
  js: ["ESM modules", "Event Loop", "Promises / async-await", "Web APIs"],
  ts: ["strict mode", "Generics", "Utility Types", "Discriminated Unions"],
  vue: ["Composition API", "Script Setup", "Pinia stores", "Router guards"],
  angular: ["Standalone", "Dependency Injection", "RxJS pipes"],
  react: ["Components", "Custom Hooks", "Context + Reducer", "Error Boundary"],
  postgres: ["CTE e Window Fns", "Índices GIN/GiST", "Advisory Locks", "JSONB"],
  mysql: ["Stored Procedures", "Triggers", "Explain Analyze"],
  redis: ["Fragment cache", "Rate Limiting", "Sidekiq Queues", "Counter cache"],
  mongo: ["Aggregation", "Indexes TTL / Text", "Replica Set"],
  docker: ["Camadas otimizadas", "Multi-stage", "Volumes nomeados", "Networks"],
  actions: ["Workflows reusable", "Matrix strategy", "Cache @cache", "Artifacts"],
  swagger: ["OpenAPI 3", "rswag", "Swagger UI", "Security Schemes JWT"],
  git: ["Feature branches", "Squash / Rebase", "Stash", "Husky pre-commit"],
  linux: ["SSH hardening", "systemd units", "fail2ban", "logrotate"],
  bash: ["funções + trap", "getopts", "xargs", "IFS / arrays"],
  tailwind: ["Arbitrary values", "@apply", "variants", "design tokens"],
  vite: ["Config define", "plugins", "build.target", "optimizeDeps"],
};

const TAGLINE_BY_KEY: Record<string, string> = {
  rails: "Framework Web Produtivo",
  ruby: "Linguagem Elegante",
  node: "Runtime JS server-side",
  next: "SSR · App Router React",
  js: "Fundamentos Web modernos",
  ts: "Código seguro por padrão",
  vue: "SPA leve · Composition API",
  angular: "App escalável",
  react: "Interfaces reativas 18",
  postgres: "Dados consistentes ACID",
  mysql: "Banco SQL popular",
  redis: "Cache & Jobs com Sidekiq",
  mongo: "NoSQL orientado a docs",
  docker: "Ambientes reproduzíveis",
  actions: "CI / CD automatizado",
  swagger: "Documentação OpenAPI 3",
  git: "Controle de versão",
  linux: "Servidores Unix",
  bash: "Automação Shell",
  tailwind: "Utility-first CSS",
  vite: "Build & dev server rápido",
};

const FRONTICON_BY_KEY: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  rails: SiRubyonrails, ruby: SiRuby,
  node: SiNodedotjs, next: SiNodedotjs, js: SiJavascript, ts: SiTypescript,
  vue: SiVuedotjs, angular: SiAngular, react: SiReact,
  postgres: SiPostgresql, mysql: SiMysql, redis: SiRedis, mongo: SiMongodb,
  docker: SiDocker, actions: SiGithubactions,
  swagger: SiSwagger, git: SiGit, linux: SiLinux, bash: SiGnubash,
  tailwind: SiTailwindcss, vite: SiVite,
};

type StackCard = {
  id: string;
  name: string;
  tagline: string;
  tone: ProjectTone;
  frontDetail: string;
  backTitle: string;
  backSubtitle: string;
  gems: string[];
  patterns: string[];
  FrontIcon: React.ComponentType<{ className?: string; size?: number }>;
  customIconUrl?: string;
  level: number;
};

type Props = { stack: AdminStackItem[] };

export function StackShowcaseSection({ stack }: Props) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  const cards: StackCard[] = stack.length > 0
    ? stack.map((item) => {
        const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "rails";
        const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? SiRubyonrails;
        const gems = GEMS_BY_KEY[iconKey] ?? ["Gems", "Config", "Padrões", "Setup", "Deploy"];
        const patterns = PATTERNS_BY_KEY[iconKey] ?? ["Boas práticas", "Padrões", "Qualidade", "Documentação", "Testes"];
        const tagline = TAGLINE_BY_KEY[iconKey] ?? item.name;
        return {
          id: item.id,
          name: item.name,
          tagline,
          tone: (item.tone || "tech-rails") as ProjectTone,
          frontDetail: `Experiência com ${item.name}. Nível de domínio ~${item.level}%. Aplicado em projetos e processos do dia a dia.`,
          backTitle: `${item.name} — Aplicação prática`,
          backSubtitle: `Recursos e padrões em ${item.name}`,
          gems,
          patterns,
          FrontIcon,
          customIconUrl: item.customIconUrl,
          level: item.level,
        };
      })
    : DEFAULT_CARDS;

  return (
    <section id="stack" className="py-24 relative bg-card/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none neo-grid opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-[.24em] mb-3">Stack completo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Tecnologias que uso todo dia.</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Passe o mouse <em className="text-primary">ou clique</em> no card e ele <strong>vira</strong> — revelando gems, padrões e técnicas aplicadas em produção.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => {
            const isFlipped = !!flipped[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className="neo-flip-card-scope"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-pressed={isFlipped}
                  className={`neo-flip-card ${item.tone} ${isFlipped ? "is-flipped" : ""}`}
                >
                  <div className="neo-flip-inner">
                    <div className="neo-flip-face neo-flip-front">
                      <div className="flex items-start justify-between mb-1">
                        <div className="neo-icon p-3 rounded-xl flex items-center justify-center min-w-[52px] min-h-[52px]">
                          {item.customIconUrl ? (
                            <img src={item.customIconUrl} alt={item.name} className="w-8 h-8 object-contain" />
                          ) : (
                            <item.FrontIcon className="tech-icon text-3xl" />
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">virar ↻</span>
                      </div>
                      <p className="tech-label text-xs font-mono mt-4">{item.tagline}</p>
                      <h3 className="text-xl font-bold mt-1 tracking-tight">{item.name}</h3>
                      <div className="mt-2">
                        <div className="h-1.5 rounded-full bg-[#e0e5ec] shadow-[inset_1px_1px_3px_#b8c1ec,inset_-1px_-1px_3px_#ffffff] overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${item.level}%`, background: "var(--tech-color,#cc0000)", boxShadow: "0 0 8px color-mix(in srgb, var(--tech-color,#cc0000) 55%, transparent)" }}
                          />
                        </div>
                        <span className="text-[10.5px] font-mono text-muted-foreground mt-1 inline-block">domínio ~{item.level}%</span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground mt-3">{item.frontDetail}</p>
                      <div className="mt-auto pt-5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-muted-foreground">passe / clique →</span>
                        <span className="text-[10px] font-mono px-2 py-1 rounded-md border border-primary/40 text-primary/90">flip</span>
                      </div>
                    </div>
                    <div className="neo-flip-face neo-flip-back">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="neo-icon p-2 rounded-lg flex items-center justify-center min-w-[40px] min-h-[40px]">
                          {item.customIconUrl ? (
                            <img src={item.customIconUrl} alt={item.name} className="w-6 h-6 object-contain" />
                          ) : (
                            <item.FrontIcon className="tech-icon text-2xl" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="tech-label text-[10px] font-mono uppercase tracking-wider opacity-90">{item.backSubtitle}</p>
                          <h3 className="text-[15px] font-bold leading-tight">{item.backTitle}</h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/70 mb-1.5">Gems / ferramentas</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.gems.map(g => (
                              <span key={g} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-md border leading-tight">{g}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/70 mb-1.5">Padrões</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.patterns.map(p => (
                              <span key={p} className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-foreground/15 bg-foreground/5 text-foreground/80 leading-tight">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-muted-foreground">clique para ↺ voltar</span>
                        <span className="text-[10px] font-mono px-2 py-1 rounded-md border border-foreground/25 text-foreground/80">verso</span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <a href="#projects" className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          Explorar projetos em Ruby on Rails, React & PostgreSQL <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}

const DEFAULT_CARDS: StackCard[] = (() => {
  const FALLBACK_STACK: AdminStackItem[] = [
    { id: "s-rails", name: "Ruby on Rails", icon: "rails", tone: "tech-rails", level: 96 },
    { id: "s-ruby", name: "Ruby 3", icon: "ruby", tone: "tech-ruby", level: 95 },
    { id: "s-rspec", name: "RSpec · TDD", icon: "ruby", tone: "tech-ruby", level: 92 },
    { id: "s-sidekiq", name: "Sidekiq · Redis", icon: "redis", tone: "tech-redis", level: 90 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 90 },
    { id: "s-docker", name: "Docker · Compose", icon: "docker", tone: "tech-docker", level: 86 },
    { id: "s-react", name: "React 18", icon: "react", tone: "tech-react", level: 88 },
    { id: "s-next", name: "Next.js 14", icon: "next", tone: "tech-next", level: 85 },
  ];
  return FALLBACK_STACK.map((item) => {
    const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "rails";
    const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? SiRubyonrails;
    const gems = GEMS_BY_KEY[iconKey] ?? ["Gems", "Config", "Padrões", "Setup", "Deploy"];
    const patterns = PATTERNS_BY_KEY[iconKey] ?? ["Boas práticas", "Padrões", "Qualidade", "Documentação", "Testes"];
    const tagline = TAGLINE_BY_KEY[iconKey] ?? item.name;
    return {
      id: item.id, name: item.name, tagline,
      tone: item.tone as ProjectTone,
      frontDetail: `Experiência com ${item.name}. Aplicado em projetos e processos do dia a dia.`,
      backTitle: `${item.name} — Aplicação prática`,
      backSubtitle: `Recursos e padrões em ${item.name}`,
      gems, patterns, FrontIcon, level: item.level,
    };
  });
})();
