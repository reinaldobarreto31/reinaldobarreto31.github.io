import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink, Layers, Terminal, ShieldCheck,
} from "lucide-react";
import {
  SiSpringboot, SiPostgresql, SiMysql, SiRedis, SiMongodb,
  SiDocker, SiKubernetes, SiGithubactions, SiReact, SiTypescript,
  SiJavascript, SiVuedotjs, SiAngular, SiSwagger, SiGit,
  SiLinux, SiGnubash, SiTailwindcss, SiVite, SiGo, SiNodedotjs,
  SiKotlin, SiFlutter, SiPhp, SiLaravel,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import type { AdminStackItem, ProjectTone } from "@/lib/default-data";

const ADMIN_ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  java: DiJava, spring: SiSpringboot, php: SiPhp, laravel: SiLaravel,
  kotlin: SiKotlin, flutter: SiFlutter,
  node: SiNodedotjs, next: SiNodedotjs, js: SiJavascript, ts: SiTypescript,
  vue: SiVuedotjs, angular: SiAngular, react: SiReact,
  postgres: SiPostgresql, mysql: SiMysql, redis: SiRedis, mongo: SiMongodb,
  docker: SiDocker, k8s: SiKubernetes, actions: SiGithubactions,
  swagger: SiSwagger, git: SiGit, linux: SiLinux, bash: SiGnubash,
  tailwind: SiTailwindcss, vite: SiVite, go: SiGo,
};

const GEMS_BY_KEY: Record<string, string[]> = {
  java: ["Java 17 · 21+ LTS", "JPA Hibernate", "Stream API", "Records · Patterns", "Virtual Threads"],
  spring: ["Spring Boot 3", "Spring Data JPA", "Spring Security 6", "Spring Cloud Gateway", "JUnit 5 · Mockito"],
  php: ["PHP 8.3", "Composer", "OPcache", "Attributes", "Tipagem Estrita"],
  laravel: ["Laravel 11", "Eloquent ORM", "Blade", "Artisan CLI", "Queues & Jobs"],
  node: ["Node.js 20 LTS", "Express / NestJS", "RESTful APIs", "Event Loop", "NPM / PNPM"],
  ts: ["TypeScript 5", "Tipagem Estrita", "Interfaces & Generics", "Type Safety", "Async / Await"],
  kotlin: ["Kotlin 2.0", "Jetpack Compose", "Coroutines · Flow", "Hilt DI", "Room DB"],
  flutter: ["Flutter 3.x", "Dart 3", "Riverpod · Provider", "Firebase", "Go Router"],
  postgres: ["PostgreSQL 16", "JPA Indexes", "PgSearch", "JSONB", "Window Functions"],
  mysql: ["MySQL 8", "InnoDB Engine", "Índices B-Tree", "Transações ACID", "Stored Procedures"],
  docker: ["docker-compose.yml", "alpine", "Dockerfile multi-stage", "Docker BuildKit", "entrypoint.sh"],
  git: ["Git Flow", "Conventional Commits", "Rebase · Cherry-pick", "Husky", "Semantic Release"],
  linux: ["Ubuntu 24.04", "systemd units", "ufw + fail2ban", "cron · journalctl", "SSH hardening"],
  react: ["React 18", "Hooks", "Context API", "Virtual DOM", "Tailwind CSS"],
  vue: ["Vue.js 3", "Composition API", "Pinia", "Vue Router", "Vite"],
};

const PATTERNS_BY_KEY: Record<string, string[]> = {
  java: ["Clean Architecture", "Hexagonal", "Repository", "Service Layer", "CQRS"],
  spring: ["@Transactional", "AOP", "DTO Projections", "Spring Profiles", "Auto-config"],
  php: ["PSR Standards", "OOP Avançado", "Injeção de Dependências", "Composer Packages", "Clean Code"],
  laravel: ["MVC Architecture", "Repository Pattern", "Middleware Pipeline", "Service Providers", "Policies & Gates"],
  node: ["MVC Pattern", "Middleware Pipeline", "Repository Pattern", "Clean Architecture", "JWT Auth"],
  ts: ["Strict Typing", "DTO Validation", "Decorators", "Modular Design", "Type Inference"],
  kotlin: ["MVVM + Clean", "Sealed Classes", "Extension Fns", "Delegates", "Reactive Flow"],
  flutter: ["Repository", "BLoC / Provider", "Isolates", "Lazy Lists", "Custom Paint"],
  postgres: ["CTE e Window Fns", "Índices GIN/GiST", "Advisory Locks", "JSONB", "Views"],
  mysql: ["Normalização de Dados", "Foreign Keys", "Índices Compostos", "Transactions", "Migrations"],
  docker: ["Camadas otimizadas", "Multi-stage", "Volumes nomeados", "Networks", ".dockerignore"],
  git: ["Feature branches", "Squash / Rebase", "Stash", "Bisect", "Husky pre-commit"],
  linux: ["SSH hardening", "systemd units", "fail2ban", "logrotate", "bashrc aliases"],
  react: ["Custom Hooks", "State Management", "Component Composition", "Atomic Design", "Memoization"],
  vue: ["Single File Components", "State Stores", "Computed Getters", "Route Guards", "Async Components"],
};

const TAGLINE_BY_KEY: Record<string, string> = {
  java: "Engenharia & Back-end corporativo",
  spring: "Produtividade Java Enterprise",
  php: "Desenvolvimento web moderno & performático",
  laravel: "Framework PHP ágil e corporativo",
  node: "Backend JavaScript ágil e modular",
  ts: "Tipagem estática e segurança de código",
  kotlin: "Android nativo · Moderno",
  flutter: "Híbrido iOS · Android",
  postgres: "Dados consistentes ACID",
  mysql: "Banco relacional performático",
  docker: "Ambientes reproduzíveis",
  git: "Controle de versão",
  linux: "Servidores Unix / Linux",
  react: "Interfaces web reativas",
  vue: "Aplicações web progressivas",
};

const FRONTICON_BY_KEY: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  java: DiJava, spring: SiSpringboot, php: SiPhp, laravel: SiLaravel,
  kotlin: SiKotlin, flutter: SiFlutter,
  node: SiNodedotjs, next: SiNodedotjs, js: SiJavascript, ts: SiTypescript,
  vue: SiVuedotjs, angular: SiAngular, react: SiReact,
  postgres: SiPostgresql, mysql: SiMysql, redis: SiRedis, mongo: SiMongodb,
  docker: SiDocker, k8s: SiKubernetes, actions: SiGithubactions,
  swagger: SiSwagger, git: SiGit, linux: SiLinux, bash: SiGnubash,
  tailwind: SiTailwindcss, vite: SiVite, go: SiGo,
};

type Props = { stack: AdminStackItem[] };

export function StackShowcaseSection({ stack }: Props) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  const cards = (stack && stack.length > 0)
    ? stack.map((item) => {
        const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "java";
        const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? DiJava;
        const gems = GEMS_BY_KEY[iconKey] ?? ["Libs", "Config", "Padrões", "Setup", "Deploy"];
        const patterns = PATTERNS_BY_KEY[iconKey] ?? ["Boas práticas", "Padrões", "Qualidade", "Documentação", "Testes"];
        const tagline = TAGLINE_BY_KEY[iconKey] ?? item.name;
        return {
          id: item.id,
          name: item.name,
          tagline,
          tone: item.tone as ProjectTone,
          frontDetail: `Experiência com ${item.name}. Aplicado em projetos corporativos e sustentação.`,
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
    <section id="stack" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono text-[#6db33f] uppercase tracking-[0.24em] mb-3">
              Ecossistemas &amp; Tecnologias
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
              Stack em 3 Níveis Prioritários
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              1º Java &amp; Spring Boot 3 · 2º PHP 8+ &amp; Laravel 11 · 3º Node.js &amp; TypeScript. Clique em cada card para virar e conferir os detalhes técnicos.
            </p>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            {cards.length} tecnologias principais
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => {
            const isFlipped = !!flipped[c.id];
            const FrontIcon = c.FrontIcon;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rails-flip-card-scope"
              >
                <button
                  type="button"
                  onClick={() => toggle(c.id)}
                  aria-pressed={isFlipped}
                  aria-label={`Virar card ${c.name}`}
                  className={`rails-flip-card ${c.tone} ${isFlipped ? "is-flipped" : ""}`}
                >
                  <div className="rails-flip-inner">
                    {/* FRENTE */}
                    <div className="rails-flip-face rails-flip-front">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl grid place-items-center bg-card/80 border border-border">
                          <FrontIcon className="tech-icon text-2xl" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-muted-foreground">
                          {c.level}%
                        </span>
                      </div>

                      <h3 className="font-bold text-base leading-tight text-foreground">{c.name}</h3>
                      <p className="text-xs font-mono text-[#6db33f] mt-1">{c.tagline}</p>
                      <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                        {c.frontDetail}
                      </p>

                      <div className="mt-auto pt-4 flex items-center justify-between border-t border-border text-[11px] font-mono text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Layers size={12} /> detalhes
                        </span>
                        <span className="text-primary hover:underline">virar ↻</span>
                      </div>
                    </div>

                    {/* VERSO */}
                    <div className="rails-flip-face rails-flip-back">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                        <div className="min-w-0">
                          <p className="text-[10px] font-mono uppercase text-[#6db33f] tracking-wider truncate">
                            {c.backSubtitle}
                          </p>
                          <h4 className="font-bold text-sm text-foreground truncate">{c.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground shrink-0">voltar ↺</span>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div>
                          <p className="text-[10.5px] font-mono text-foreground font-semibold flex items-center gap-1 mb-1">
                            <Terminal size={11} className="text-[#6db33f]" /> Recursos:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {c.gems.slice(0, 4).map((g) => (
                              <span key={g} className="px-1.5 py-0.5 rounded bg-card/80 text-[10px] font-mono text-muted-foreground border border-border">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[10.5px] font-mono text-foreground font-semibold flex items-center gap-1 mb-1">
                            <ShieldCheck size={11} className="text-primary" /> Padrões:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {c.patterns.slice(0, 3).map((p) => (
                              <span key={p} className="px-1.5 py-0.5 rounded bg-card/80 text-[10px] font-mono text-muted-foreground border border-border">
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <a href="#projects" className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          Explorar projetos Java · Spring Boot · PHP / Laravel · Node.js <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}

const DEFAULT_CARDS = (() => {
  const FALLBACK_STACK: AdminStackItem[] = [
    { id: "s-java", name: "Java 17 / 21+", icon: "java", tone: "tech-java", level: 96 },
    { id: "s-spring", name: "Spring Boot 3", icon: "spring", tone: "tech-spring", level: 95 },
  ];
  return FALLBACK_STACK.map((item) => {
    const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "java";
    const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? DiJava;
    const gems = GEMS_BY_KEY[iconKey] ?? ["Libs", "Config", "Padrões", "Setup", "Deploy"];
    const patterns = PATTERNS_BY_KEY[iconKey] ?? ["Boas práticas", "Padrões", "Qualidade", "Documentação", "Testes"];
    const tagline = TAGLINE_BY_KEY[iconKey] ?? item.name;
    return {
      id: item.id, name: item.name, tagline,
      tone: item.tone as ProjectTone,
      frontDetail: `Experiência com ${item.name}. Aplicado em projetos corporativos e sustentação.`,
      backTitle: `${item.name} — Aplicação prática`,
      backSubtitle: `Recursos e padrões em ${item.name}`,
      gems, patterns, FrontIcon, level: item.level,
    };
  });
})();
