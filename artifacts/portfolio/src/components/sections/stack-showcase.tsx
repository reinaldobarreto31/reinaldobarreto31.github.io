import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiRuby, SiRubyonrails, SiPostgresql, SiRedis, SiDocker, SiGithubactions,
} from "react-icons/si";
import { TestTube, Clock, Shield, Layers, Zap, Satellite, Cpu, Activity, ExternalLink } from "lucide-react";
import type { AdminStackItem, ProjectTone } from "@/lib/default-data";
import {
  SiGo, SiSwagger, SiJavascript, SiMysql, SiLinux, SiGnubash, SiGit,
  SiAngular, SiVuedotjs, SiSpringboot, SiKubernetes, SiTailwindcss, SiVite,
  SiMongodb, SiNodedotjs, SiReact, SiTypescript, SiJava,
} from "react-icons/si";

const ADMIN_ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  ruby: SiRuby, rails: SiRubyonrails, postgres: SiPostgresql, redis: SiRedis,
  docker: SiDocker, actions: SiGithubactions, react: SiReact, ts: SiTypescript,
  java: SiJava, spring: SiSpringboot, vue: SiVuedotjs, angular: SiAngular,
  go: SiGo, swagger: SiSwagger, js: SiJavascript, mysql: SiMysql,
  linux: SiLinux, bash: SiGnubash, git: SiGit, k8s: SiKubernetes,
  tailwind: SiTailwindcss, vite: SiVite, mongo: SiMongodb, node: SiNodedotjs,
};

const GEMS_BY_KEY: Record<string, string[]> = {
  ruby: ["Bundler", "Rake", "IRB", "RubyGems", "Dry-rb"],
  rails: ["Active Record", "Active Job", "Action Cable", "Active Storage", "Action Mailer"],
  postgres: ["Active Record", "Scenic", "PgSearch", "Foreigner", "Strong Migrations"],
  redis: ["Redis", "Rails Cache", "Dalli", "Rack::Attack", "Bullet"],
  docker: ["docker-compose.yml", "alpine", "Dockerfile multi-stage", "assets:precompile", "entrypoint.sh"],
  actions: ["checkout", "ruby/setup-ruby", "bundle install", "rspec", "deploy gh-pages"],
  react: ["React 18", "Vite", "Tailwind", "Radix UI", "shadcn/ui"],
  ts: ["TypeScript", "zod", "tsc", "esbuild", "Vite"],
  java: ["Spring Boot Starter", "Spring Security", "JPA Hibernate", "Maven", "JUnit"],
  spring: ["Spring Boot Starter", "Spring Data JPA", "Spring Security", "Maven", "JUnit 5"],
  vue: ["Vue 3", "Pinia", "Vite", "Vue Router", "Axios"],
  angular: ["Angular 17", "RxJS", "NgRx", "HttpClient", "Standalone Components"],
  go: ["net/http", "gin-gonic", "gorm", "jwt-go", "viper"],
  swagger: ["Rswag", "OpenAPI 3", "rswag-ui", "rswag-specs", "rswag-api"],
  js: ["ES2023+", "ESLint", "Prettier", "npm / pnpm", "Husky hooks"],
  mysql: ["Active Record MySQL", "mysql2", "índices FULLTEXT", "Replication", "Views"],
  linux: ["Ubuntu Server", "systemd", "ufw / iptables", "cron", "journalctl"],
  bash: ["Shell Script", "awk / sed", "xargs", "cronjobs", "expect"],
  git: ["Git Flow", "rebase -i", "cherry-pick", "bisect", "pre-commit hooks"],
  k8s: ["kubectl", "Helm", "ConfigMap / Secret", "Liveness Probe", "Ingress"],
  tailwind: ["@tailwindcss", "Tailwind CLI", "@apply", "JIT compiler", "variants"],
  vite: ["vite build", "plugins", "rollup", "HMR", "esbuild"],
  mongo: ["Mongoid", "Aggregation Pipeline", "Atlas Search", "Replica Set", "Mongosh"],
  node: ["Express", "Koa", "Nest.js", "Nodemon", "dotenv-safe"],
};

const PATTERNS_BY_KEY: Record<string, string[]> = {
  ruby: ["POO", "Duck Typing", "Blocks", "Metaprogramação", "Modules"],
  rails: ["MVC", "Convenção sobre Config", "Filters", "Concerns", "Engines"],
  postgres: ["JSONB / Hstore", "Índices GIN/GiST", "CTE e Window Fns", "Advisory Locks", "Materialized Views"],
  redis: ["Fragment cache", "Russian doll", "Low-level cache", "Etags", "Counter cache"],
  docker: ["Camadas otimizadas", "Multi-stage", "Volumes", "Network", ".dockerignore"],
  actions: ["Workflow files", "Matrix strategy", "Cache @actions/cache", "Artifacts", "Environments"],
  react: ["Components", "Hooks", "Context", "Error Boundary", "Lazy / Suspense"],
  ts: ["strict mode", "Generics", "Utility Types", "Discriminated Unions", "as const"],
  java: ["Spring Boot", "JPA Repository", "DTOs", "Beans Validation", "Swagger OpenAPI"],
  spring: ["Spring Boot auto config", "Spring Security", "Transactional", "DTO Projections", "Profiles"],
  vue: ["Composition API", "Script Setup", "Pinia stores", "Router guards", "Teleport"],
  angular: ["Signals", "Standalone", "Dependency Injection", "RxJS pipes", "Async pipe"],
  go: ["goroutines / channels", "interfaces implícitas", "context.Context", "struct tags", "go mod"],
  swagger: ["OpenAPI 3", "rswag specs", "Swagger UI /api-docs", "Security Schemes JWT", "Examples"],
  js: ["ESM modules", "Event Loop", "Promises / async-await", "Web APIs", "Event Delegation"],
  mysql: ["Stored Procedures", "Triggers", "Replication", "Explain analyze", "Partitioning"],
  linux: ["SSH hardening", "systemd units", "fail2ban", "logrotate", "bashrc aliases"],
  bash: ["funções", "getopts", "trap EXIT", "IFS / arrays", "pipefail"],
  git: ["Feature branches", "Squash / Rebase", "Stash", "Bisect", "Husky pre-commit"],
  k8s: ["Deployments", "Services ClusterIP / NodePort / LB", "PV / PVC", "Ingress Controller", "HPA"],
  tailwind: ["Arbitrary values", "@apply", "variants", "plugins", "design tokens"],
  vite: ["Config define", "plugins", "build.target", "optimizeDeps", "server proxy"],
  mongo: ["Aggregation", "Indexes", "Replica Set", "Change Streams", "Atlas Search"],
  node: ["Middlewares", "Error handlers", "Routing", "ORM (Prisma / Mongoose)", "Env validation"],
};

const TAGLINE_BY_KEY: Record<string, string> = {
  ruby: "Linguagem expressiva",
  rails: "Framework principal",
  postgres: "Dados consistentes",
  redis: "Cache & performance",
  docker: "Ambientes reproduzíveis",
  actions: "CI / CD automatizado",
  react: "Interfaces reativas",
  ts: "Código seguro por padrão",
  java: "Enterprise & Spring",
  spring: "Produtividade Java",
  vue: "SPA leve e rápido",
  angular: "App estruturada",
  go: "Performático e simples",
  swagger: "Documentação OpenAPI",
  js: "Fundamentos Web modernos",
  mysql: "Banco SQL popular",
  linux: "Servidores Unix",
  bash: "Automação Shell",
  git: "Controle de versão",
  k8s: "Orquestração de containers",
  tailwind: "Utility-first CSS",
  vite: "Build & dev server rápido",
  mongo: "NoSQL orientado a docs",
  node: "Runtime JS server-side",
};

const FRONTICON_BY_KEY: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  ruby: SiRuby, rails: SiRubyonrails, postgres: SiPostgresql, redis: SiRedis,
  docker: SiDocker, actions: SiGithubactions, react: SiReact, ts: SiTypescript,
  java: SiJava, spring: SiSpringboot, vue: SiVuedotjs, angular: SiAngular,
  go: SiGo, swagger: SiSwagger, js: SiJavascript, mysql: SiMysql,
  linux: SiLinux, bash: SiGnubash, git: SiGit, k8s: SiKubernetes,
  tailwind: SiTailwindcss, vite: SiVite, mongo: SiMongodb, node: SiNodedotjs,
};

type Props = { stack: AdminStackItem[] };

export function StackShowcaseSection({ stack }: Props) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  const cards = stack.length > 0
    ? stack.map((item) => {
        const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "rails";
        const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? SiRuby;
        const gems = GEMS_BY_KEY[iconKey] ?? ["Gemas / libs", "Config", "Padrões", "Setup", "Deploy"];
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
          level: item.level,
        };
      })
    : DEFAULT_CARDS;

  return (
    <section id="stack" className="py-24 relative bg-card/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none rails-grid opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-[.24em] mb-3">Stack completo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Tecnologias que uso todo dia.</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Passe o mouse <em className="text-primary">ou clique</em> no card e ele <strong>vira</strong> — revelando libs, padrões e técnicas aplicadas em produção.
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
                className="rails-flip-card-scope"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-pressed={isFlipped}
                  className={`rails-flip-card ${item.tone} ${isFlipped ? "is-flipped" : ""}`}
                >
                  <div className="rails-flip-inner">
                    <div className="rails-flip-face rails-flip-front">
                      <div className="flex items-start justify-between mb-1">
                        <div className="rails-icon p-3 rounded-xl">
                          <item.FrontIcon className="tech-icon text-3xl" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">virar ↻</span>
                      </div>
                      <p className="tech-label text-xs font-mono mt-4">{item.tagline}</p>
                      <h3 className="text-xl font-bold mt-1 tracking-tight">{item.name}</h3>
                      <div className="mt-2">
                        <div className="h-1.5 rounded-full bg-[#44475a]/80 overflow-hidden">
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
                    <div className="rails-flip-face rails-flip-back">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="rails-icon p-2 rounded-lg">
                          <item.FrontIcon className="tech-icon text-2xl" />
                        </div>
                        <div className="min-w-0">
                          <p className="tech-label text-[10px] font-mono uppercase tracking-wider opacity-90">{item.backSubtitle}</p>
                          <h3 className="text-[15px] font-bold leading-tight">{item.backTitle}</h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/70 mb-1.5">Libs / ferramentas</p>
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
          Explorar projetos Rails <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}

const DEFAULT_CARDS = (() => {
  const FALLBACK_STACK: AdminStackItem[] = [
    { id: "s-ruby", name: "Ruby", icon: "ruby", tone: "tech-ruby", level: 96 },
    { id: "s-rails", name: "Ruby on Rails", icon: "rails", tone: "tech-rails", level: 98 },
    { id: "s-rspec", name: "RSpec · Qualidade", icon: "swagger", tone: "tech-ruby", level: 95 },
    { id: "s-jobs", name: "Background Jobs", icon: "rails", tone: "tech-postgres", level: 86 },
    { id: "s-auth", name: "Autenticação", icon: "docker", tone: "tech-docker", level: 90 },
    { id: "s-pundit", name: "Autorização", icon: "actions", tone: "tech-actions", level: 85 },
    { id: "s-hotwire", name: "Hotwire", icon: "vite", tone: "tech-rails", level: 80 },
    { id: "s-redis", name: "Cache & Redis", icon: "redis", tone: "tech-redis", level: 82 },
    { id: "s-pg", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 88 },
    { id: "s-api", name: "API & Microserviços", icon: "swagger", tone: "tech-openapi", level: 92 },
    { id: "s-ev", name: "Mensageria & Eventos", icon: "redis", tone: "tech-redis", level: 78 },
    { id: "s-obs", name: "Observabilidade", icon: "docker", tone: "tech-docker", level: 80 },
  ];
  return FALLBACK_STACK.map((item) => {
    const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "rails";
    const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? SiRuby;
    const gems = GEMS_BY_KEY[iconKey] ?? ["Gemas / libs", "Config", "Padrões", "Setup", "Deploy"];
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
