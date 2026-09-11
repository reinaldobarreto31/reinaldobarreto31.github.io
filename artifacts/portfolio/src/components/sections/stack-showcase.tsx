import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPostgresql, SiRedis, SiDocker, SiGithubactions,
} from "react-icons/si";
import { ExternalLink } from "lucide-react";
import type { AdminStackItem, ProjectTone } from "@/lib/default-data";
import {
  SiGo, SiSwagger, SiJavascript, SiMysql, SiLinux, SiGnubash, SiGit,
  SiAngular, SiVuedotjs, SiSpringboot, SiKubernetes, SiTailwindcss, SiVite,
  SiMongodb, SiNodedotjs, SiReact, SiTypescript, SiKotlin, SiFlutter,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandWindows, TbBrandAzure, TbDatabase } from "react-icons/tb";
import { DiJava } from "react-icons/di";

const ADMIN_ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  csharp: TbBrandCSharp,
  dotnet: SiDotnet,
  windows: TbBrandWindows,
  sqlserver: TbDatabase,
  azure: TbBrandAzure,
  maui: SiDotnet,
  vba: TbBrandWindows,
  vb: TbBrandWindows,
  java: DiJava, spring: SiSpringboot, kotlin: SiKotlin, flutter: SiFlutter,
  node: SiNodedotjs, next: SiNodedotjs, js: SiJavascript, ts: SiTypescript,
  vue: SiVuedotjs, angular: SiAngular, react: SiReact,
  postgres: SiPostgresql, mysql: SiMysql, redis: SiRedis, mongo: SiMongodb,
  docker: SiDocker, k8s: SiKubernetes, actions: SiGithubactions,
  swagger: SiSwagger, git: SiGit, linux: SiLinux, bash: SiGnubash,
  tailwind: SiTailwindcss, vite: SiVite, go: SiGo,
};

const GEMS_BY_KEY: Record<string, string[]> = {
  csharp: ["C# 12 / 13", "LINQ", "Async / Await TPL", "Pattern Matching", "Records & Structs"],
  dotnet: [".NET 8 / 9 LTS", "ASP.NET Core", "Entity Framework Core", "Injeção de Dependência", "Kestrel Server"],
  windows: ["Windows 11 Pro", "Windows Server", "Active Directory", "IIS", "PowerShell & Suporte N3"],
  sqlserver: ["SQL Server 2022", "T-SQL Avançado", "Índices & Execution Plan", "Stored Procedures", "Transações ACID"],
  azure: ["Azure App Services", "Azure SQL", "Blob Storage", "Azure DevOps", "Monitor & App Insights"],
  maui: [".NET MAUI", "Blazor Hybrid", "XAML / C# UI", "PWA Offline", "Cross-Platform"],
  vba: ["VBA Avançado", "Excel Macros & Interop", "Microsoft Access", "Automação Office", "Modelos Fiscais"],
  vb: ["Visual Basic 6 (VB6)", "VB.NET", "Windows Forms", "Migração para C#", "Sustentação Legados"],
  java: ["Java 17 · LTS", "JPA Hibernate", "Stream API", "Records · Patterns", "Virtual Threads"],
  spring: ["Spring Boot Starter", "Spring Data JPA", "Spring Security 6", "Spring Cloud Gateway", "JUnit 5 · Mockito"],
  kotlin: ["Kotlin 2.0", "Jetpack Compose", "Coroutines · Flow", "Hilt DI", "Room DB"],
  flutter: ["Flutter 3.x", "Dart 3", "Riverpod · Provider", "Firebase", "Go Router"],
  postgres: ["PostgreSQL 16", "JPA Indexes", "PgSearch", "JSONB", "Window Functions"],
  docker: ["docker-compose.yml", "alpine", "Dockerfile multi-stage", "Docker BuildKit", "entrypoint.sh"],
  git: ["Git Flow", "Conventional Commits", "Rebase · Cherry-pick", "Husky", "Semantic Release"],
  linux: ["Ubuntu 24.04", "systemd units", "ufw + fail2ban", "cron · journalctl", "SSH hardening"],
};

const PATTERNS_BY_KEY: Record<string, string[]> = {
  csharp: ["Clean Architecture", "SOLID & GoF", "Repository Pattern", "CQRS com MediatR", "Result Pattern"],
  dotnet: ["Middleware Pipeline", "FluentValidation", "Polly Resiliência", "JWT Authentication", "Health Checks"],
  windows: ["Administração de Servidores", "Políticas de Grupo (GPO)", "Hyper-V", "Diagnóstico N3", "Segurança de Redes"],
  sqlserver: ["Otimização de Consultas", "Normalização", "Particionamento", "Auditoria de Dados", "Backup & Recovery"],
  azure: ["Cloud Native", "Serverless Functions", "CI/CD Pipelines", "Managed Identities", "Scale Sets"],
  maui: ["MVVM", "Data Binding", "Dependency Service", "Offline-First Sync", "Responsive Layouts"],
  vba: ["Automação de Tarefas", "Processamento em Lote", "Integração COM/OLE", "Tratamento de Exceções", "Macros Seguras"],
  vb: ["Event-Driven", "COM / ActiveX", "ADO / DAO", "Refatoração Progressiva", "Interoperabilidade"],
  java: ["Clean Architecture", "Hexagonal", "Repository", "Service Layer", "CQRS"],
  spring: ["@Transactional", "AOP", "DTO Projections", "Spring Profiles", "Auto-config"],
  kotlin: ["MVVM + Clean", "Sealed Classes", "Extension Fns", "Delegates", "Reactive Flow"],
  flutter: ["Repository", "BLoC / Provider", "Isolates", "Lazy Lists", "Custom Paint"],
  postgres: ["CTE e Window Fns", "Índices GIN/GiST", "Advisory Locks", "JSONB", "Views"],
  docker: ["Camadas otimizadas", "Multi-stage", "Volumes nomeados", "Networks", ".dockerignore"],
  git: ["Feature branches", "Squash / Rebase", "Stash", "Bisect", "Husky pre-commit"],
  linux: ["SSH hardening", "systemd units", "fail2ban", "logrotate", "bashrc aliases"],
};

const TAGLINE_BY_KEY: Record<string, string> = {
  csharp: "Linguagem moderna de alto desempenho",
  dotnet: "Plataforma corporativa Microsoft",
  windows: "Sistemas operacionais e servidores",
  sqlserver: "Banco de dados relacional corporativo",
  azure: "Nuvem Microsoft & Serviços Web",
  maui: "Multiplataforma Mobile & PWA",
  vba: "Produtividade e automação corporativa",
  vb: "Sustentação e evolução de legados",
  java: "Engenharia & Back-end",
  spring: "Produtividade Java Enterprise",
  kotlin: "Android nativo · Moderno",
  flutter: "Híbrido iOS · Android",
  postgres: "Dados consistentes ACID",
  docker: "Ambientes reproduzíveis",
  git: "Controle de versão",
  linux: "Servidores Unix / Linux",
};

const FRONTICON_BY_KEY: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  csharp: TbBrandCSharp,
  dotnet: SiDotnet,
  windows: TbBrandWindows,
  sqlserver: TbDatabase,
  azure: TbBrandAzure,
  maui: SiDotnet,
  vba: TbBrandWindows,
  vb: TbBrandWindows,
  java: DiJava, spring: SiSpringboot, kotlin: SiKotlin, flutter: SiFlutter,
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

  const cards = stack.length > 0
    ? stack.map((item) => {
        const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "csharp";
        const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? SiDotnet;
        const gems = GEMS_BY_KEY[iconKey] ?? ["Recursos", "Padrões", "Arquitetura", "Qualidade", "Deploy"];
        const patterns = PATTERNS_BY_KEY[iconKey] ?? ["Boas práticas", "Padrões", "Qualidade", "Documentação", "Testes"];
        const tagline = TAGLINE_BY_KEY[iconKey] ?? item.name;
        return {
          id: item.id,
          name: item.name,
          tagline,
          tone: (item.tone || "tech-csharp") as ProjectTone,
          frontDetail: `Experiência sólida com ${item.name}. Nível de domínio ~${item.level}%. Aplicado em projetos e sustentação do dia a dia.`,
          backTitle: `${item.name} — Aplicação Prática`,
          backSubtitle: `Recursos, arquitetura e padrões em ${item.name}`,
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
          <p className="text-xs font-mono text-primary uppercase tracking-[.24em] mb-3">Stack Tecnológico</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Tecnologias que domino na prática.</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Passe o mouse <em className="text-primary font-semibold">ou clique</em> no card e ele <strong>vira</strong> — revelando libs, recursos de arquitetura e padrões aplicados no ambiente de trabalho.
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
                            style={{ width: `${item.level}%`, background: "var(--tech-color,#0078d4)", boxShadow: "0 0 8px color-mix(in srgb, var(--tech-color,#0078d4) 55%, transparent)" }}
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
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <item.FrontIcon className="tech-icon text-2xl" />
                          <div>
                            <h4 className="font-bold text-sm leading-none">{item.name}</h4>
                            <span className="text-[10px] font-mono text-muted-foreground">{item.tagline}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">voltar ↺</span>
                      </div>

                      <div className="space-y-3 my-auto">
                        <div>
                          <p className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 font-bold">Recursos &amp; Ferramentas</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.gems.map((g, i) => (
                              <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-background/60 border border-border/60 text-foreground font-mono">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-[10px] font-mono text-[#00a4ef] uppercase tracking-wider mb-1.5 font-bold">Padrões &amp; Práticas</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.patterns.map((p, i) => (
                              <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary-foreground font-mono">
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                        <span>Stack Microsoft .NET</span>
                        <span className="text-primary font-bold">~{item.level}%</span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <a href="#projects" className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          Explorar projetos .NET · C# · Desktop &amp; Web <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}

const DEFAULT_CARDS = (() => {
  const FALLBACK_STACK: AdminStackItem[] = [
    { id: "s-csharp", name: "C#", icon: "csharp", tone: "tech-csharp", level: 96 },
    { id: "s-dotnet", name: ".NET 8 / 9", icon: "dotnet", tone: "tech-dotnet", level: 95 },
    { id: "s-aspnet", name: "ASP.NET Core", icon: "dotnet", tone: "tech-aspnet", level: 94 },
    { id: "s-desktop", name: "Desktop (WPF/WinForms)", icon: "windows", tone: "tech-csharp", level: 92 },
    { id: "s-vb", name: "Visual Basic 6 / VB.NET", icon: "windows", tone: "tech-vb", level: 90 },
    { id: "s-sqlserver", name: "Microsoft SQL Server", icon: "sqlserver", tone: "tech-sqlserver", level: 93 },
    { id: "s-windows", name: "Windows 11 / Servidores", icon: "windows", tone: "tech-windows", level: 95 },
    { id: "s-support", name: "Suporte N3 & Infraestrutura", icon: "windows", tone: "tech-windows", level: 94 },
    { id: "s-vba", name: "Excel VBA & Access", icon: "vba", tone: "tech-vba", level: 88 },
    { id: "s-maui", name: ".NET MAUI & PWA", icon: "maui", tone: "tech-maui", level: 86 },
    { id: "s-azure", name: "Microsoft Azure", icon: "azure", tone: "tech-azure", level: 82 },
    { id: "s-java", name: "Java & Spring Boot", icon: "spring", tone: "tech-spring", level: 88 },
  ];
  return FALLBACK_STACK.map((item) => {
    const iconKey = ADMIN_ICON_MAP[item.icon] ? item.icon : "csharp";
    const FrontIcon = FRONTICON_BY_KEY[iconKey] ?? SiDotnet;
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
