import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Globe, Rocket, TerminalSquare, Sparkles, Package } from "lucide-react";
import { SiRubyonrails, SiPostgresql, SiReact, SiSwagger, SiGo } from "react-icons/si";

const GITHUB = "https://github.com/reinaldobarreto31";
const PAGES = "https://reinaldobarreto31.github.io";

type Tone = "tech-ruby" | "tech-rails" | "tech-postgres" | "tech-docker" | "tech-actions" | "tech-react" | "tech-ts" | "tech-jwt" | "tech-openapi" | "tech-pdf" | "tech-golang";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
  tone: Tone;
  github: string;
  live?: string;
  badge?: "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "API" | "FULL-STACK";
  featured?: boolean;
};

const FEATURED: Project[] = [
  {
    title: "Compressor de PDF",
    subtitle: "Padrões Brasileiros · 100% navegador",
    description:
      "Compressor de PDFs 100% no navegador com presets brasileiros: Governo BR (até 2 MB), Empresa (até 5 MB), E-mail e Qualidade. Múltiplos arquivos em lote, progresso individual e renomear antes de baixar. Interface em tema Dracula + vermelho Ruby on Rails.",
    tech: ["React", "TypeScript", "pdf-lib", "Vite", "GitHub Pages"],
    icon: SiReact,
    tone: "tech-pdf",
    github: `${GITHUB}/pdf-compressor`,
    live: `${PAGES}/pdf-compressor/`,
    badge: "LIVE",
    featured: true,
  },
  {
    title: "rails-swagger-crud",
    subtitle: "API REST + OpenAPI 3 + TDD",
    description:
      "RESTful CRUD API em Rails API mode com documentação OpenAPI 3 (Swagger UI em /api-docs) gerada automaticamente pelos testes RSpec via Rswag. TDD first — FactoryBot + Shoulda Matchers. Autenticação Devise/JWT, PostgreSQL estruturado e Docker Compose para dev local com um comando.",
    tech: ["Ruby", "Rails API", "Rswag", "RSpec", "FactoryBot", "Devise/JWT", "PostgreSQL", "Docker"],
    icon: SiSwagger,
    tone: "tech-openapi",
    github: `${GITHUB}/rails-swagger-crud`,
    badge: "DESTAQUE",
    featured: true,
  },
  {
    title: "RailsHub",
    subtitle: "Full-stack · API Rails + React 18",
    description:
      "Hub full-stack: API REST em Rails com autenticação Devise/JWT, documentação OpenAPI 3 automática via Rswag e TDD com RSpec + FactoryBot. Frontend React 18 + Tailwind com dashboard paginado, filtros e CRUD visual. Docker Compose + pipeline CI/CD em GitHub Actions para deploy automatizado.",
    tech: ["Ruby on Rails", "React 18", "Rswag", "JWT", "PostgreSQL", "Docker", "RSpec", "GitHub Actions"],
    icon: Rocket,
    tone: "tech-jwt",
    github: `${GITHUB}/railshub`,
    badge: "EM CONSTRUÇÃO",
    featured: true,
  },
];

const SECONDARY: Project[] = [
  {
    title: "StockWise",
    subtitle: "Controle de Estoque · Go + React.js",
    description:
      "Backend em Go com API RESTful, autenticação JWT, CRUD de produtos e controle de movimentações de estoque. Frontend React.js com dashboard, listagens paginadas e formulários tipados. GitHub: github.com/reinaldobarreto31/stockwise-go",
    tech: ["Go", "React.js", "PostgreSQL", "JWT", "REST API"],
    icon: Package,
    tone: "tech-golang",
    github: `${GITHUB}/stockwise-go`,
    badge: "FULL-STACK",
  },
  {
    title: "Rails Link Shortener",
    subtitle: "Encurtador de URLs",
    description:
      "Aplicação Ruby on Rails para criar, organizar e redirecionar links curtos com contagem de acessos. Projeto enxuto que demonstra modelagem limpa, rotas RESTful e o ciclo completo de uma aplicação Rails MVC.",
    tech: ["Ruby", "Rails", "PostgreSQL", "MVC"],
    icon: SiRubyonrails,
    tone: "tech-rails",
    github: `${GITHUB}/rails-link-shortener`,
    badge: "API",
  },
  {
    title: "Rails Tasks API",
    subtitle: "API de tarefas",
    description:
      "API REST para gestão de tarefas (todo list) estruturada com convenções Rails, endpoints claros, paginação e persistência em banco de dados relacional.",
    tech: ["Ruby", "Rails API", "PostgreSQL", "REST"],
    icon: TerminalSquare,
    tone: "tech-ruby",
    github: `${GITHUB}/rails-tasks-api`,
    badge: "API",
  },
  {
    title: "Ruby Expense Tracker",
    subtitle: "Controle financeiro",
    description:
      "Projeto em Ruby puro voltado ao controle de despesas e exploração da lógica de negócio — com classes de domínio limpas e legíveis, prontas para evoluir em uma aplicação Rails completa.",
    tech: ["Ruby", "Domínio", "CLI", "Testes"],
    icon: SiPostgresql,
    tone: "tech-postgres",
    github: `${GITHUB}/ruby-expense-tracker`,
    badge: "API",
  },
];

const badgeStyle: Record<NonNullable<Project["badge"]>, string> = {
  DESTAQUE: "bg-[#b91f32]/90 text-white shadow-[0_0_0_1px_rgba(255,255,255,.08),0_8px_22px_rgba(185,31,50,.35)]",
  "EM CONSTRUÇÃO": "bg-[#bd93f9]/85 text-[#161720] shadow-[0_0_0_1px_rgba(255,255,255,.08),0_8px_22px_rgba(189,147,249,.35)]",
  LIVE: "bg-[#50fa7b]/90 text-[#161720] shadow-[0_0_0_1px_rgba(255,255,255,.1),0_8px_22px_rgba(80,250,123,.35)]",
  API: "bg-[#6272a4]/85 text-white shadow-[0_0_0_1px_rgba(255,255,255,.08)]",
  "FULL-STACK": "bg-[#ffb86c]/85 text-[#161720] shadow-[0_0_0_1px_rgba(255,255,255,.08)]",
};

function ProjectCard({ project, index, size = "normal" }: { project: Project; index: number; size?: "featured" | "normal" }) {
  const Icon = project.icon;
  const onOpen = () => window.open(project.live ?? project.github, "_blank", "noopener,noreferrer");
  const isFeatured = size === "featured";

  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: isFeatured ? 28 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * (isFeatured ? 0.09 : 0.06) }}
      whileHover={{ y: isFeatured ? -10 : -6 }}
      onClick={onOpen}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onOpen(); }}
      role="link"
      tabIndex={0}
      className={`rails-project-card ${project.tone} rounded-xl overflow-hidden flex flex-col cursor-pointer relative group ${isFeatured ? "ring-1 ring-primary/25 shadow-[0_18px_48px_rgba(0,0,0,.48),inset_0_1px_0_rgba(255,255,255,.04)] hover:ring-primary/55 hover:shadow-[0_24px_60px_rgba(200,40,60,.22),0_18px_48px_rgba(0,0,0,.55)]" : ""}`}
    >
      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 items-end">
        {isFeatured && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[linear-gradient(135deg,#ffd166,#ffb86c)] text-[#2a1600] shadow-[0_0_0_1px_rgba(0,0,0,.15),0_6px_16px_rgba(255,184,108,.35)] border border-[#ffdd88]/40">
            <Sparkles size={10} /> Principal
          </span>
        )}
        {project.badge && (
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase ${badgeStyle[project.badge]}`}>
            {project.badge}
          </span>
        )}
      </div>

      <div className={`relative flex items-center justify-center rails-project-head ${isFeatured ? "h-40 md:h-44" : "h-24 md:h-28"}`}>
        <Icon className={`tech-icon relative z-10 ${isFeatured ? "text-6xl md:text-7xl drop-shadow-[0_6px_14px_rgba(0,0,0,.45)]" : "text-4xl md:text-5xl"}`} />
        <div className="absolute inset-0 rails-grid opacity-50" />
        {isFeatured && (
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-90 group-hover:opacity-100" />
        )}
      </div>

      <div className={`flex flex-col flex-1 ${isFeatured ? "p-6" : "p-5"}`}>
        <p className={`tech-label text-xs font-mono ${isFeatured ? "tracking-wide" : ""}`}>{project.subtitle}</p>
        <h3 className={`font-bold tracking-tight leading-snug mt-1.5 ${isFeatured ? "text-xl md:text-[1.4rem]" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className={`text-sm text-muted-foreground leading-relaxed mt-3 flex-1 ${isFeatured ? "text-[13.5px] md:text-sm leading-[1.7] mt-4" : ""}`}>
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-1.5 mt-4 ${isFeatured ? "mt-5" : ""}`}>
          {project.tech.map((tech) => (
            <span key={tech} className={`tech-tag font-mono px-2 py-1 rounded border ${isFeatured ? "text-[10.5px]" : "text-[10px]"}`}>
              {tech}
            </span>
          ))}
        </div>

        <div className={`mt-5 flex items-center gap-3 flex-wrap ${isFeatured ? "mt-6" : ""}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className={`inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors`}
          >
            <Github size={isFeatured ? 16 : 15} />
            Repositório
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors border border-primary/30 hover:border-primary/70 hover:bg-primary/10 rounded-lg px-3 py-1.5"
            >
              <Globe size={isFeatured ? 16 : 15} />
              Live · GitHub Pages
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-[.24em] mb-3">
              Portfolio Rails
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Projetos principais.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-base">
              Estes são os trabalhos mais representativos do portfólio — APIs completas, frontends publicados no GitHub Pages e arquitetura full-stack bem estruturada.
            </p>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto border border-border hover:border-primary/50 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} /> Ver GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {FEATURED.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} size="featured" />
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-mono text-primary/80 uppercase tracking-[.22em] mb-2.5">
              Outros projetos
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Projetos mais enxutos.
            </h3>
            <p className="text-muted-foreground mt-2 text-sm max-w-lg">
              Aplicações menores que consolidam a base sólida em Ruby e Rails: MVC, APIs REST, modelagem de dados e lógica de domínio.
            </p>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-semibold text-primary hover:text-primary/85 transition-colors"
          >
            Ver tudo no GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SECONDARY.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} size="normal" />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rails-button inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm"
          >
            Mais projetos no GitHub <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
