import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { SiRubyonrails, SiRuby, SiReact } from "react-icons/si";

const GITHUB = "https://github.com/reinaldobarreto31";

const projects = [
  {
    title: "pdf-compressor",
    titlePt: "Compressor de PDF",
    subtitle: "React + Vite · 100% no navegador",
    description:
      "Compressor de PDFs para os padrões brasileiros — Governo BR (2 MB), Empresa (5 MB), E-mail (8 MB) e mais. Processa tudo localmente no navegador, sem enviar arquivos a nenhum servidor.",
    tech: ["React", "Vite", "TypeScript", "pdf-lib", "pdfjs-dist"],
    icon: SiReact,
    rails: false,
    image: "/projects/pdf-compressor.jpg",
    github: `${GITHUB}/reinaldobarreto31.github.io`,
    live: "https://senior-profile-suite.replit.app/pdf-compressor/",
    highlight: true,
  },
  {
    title: "expense-tracker-web",
    titlePt: "Controle de Gastos Web",
    subtitle: "Rails API + React Vite · GitHub Pages",
    description:
      "Controle de gastos pessoais com interface web moderna. Ruby on Rails API no backend, React Vite + TypeScript no frontend. Gráficos de pizza e barras por categoria. Deploy automático no GitHub Pages.",
    tech: ["Ruby on Rails", "React", "Vite", "TypeScript", "Recharts"],
    icon: SiRubyonrails,
    rails: true,
    image: "/projects/expense-tracker-web.jpg",
    github: `${GITHUB}/expense-tracker-web`,
    live: "https://reinaldobarreto31.github.io/expense-tracker-web/",
    highlight: true,
  },
  {
    title: "rails-tasks-api",
    titlePt: "API de Tarefas",
    subtitle: "API RESTful · CRUD Completo",
    description:
      "API de gerenciamento de tarefas com Ruby on Rails 7 e PostgreSQL. Endpoints REST completos com validações, escopos e JSON responses.",
    tech: ["Ruby on Rails", "PostgreSQL", "REST API", "RSpec"],
    icon: SiRubyonrails,
    rails: true,
    image: "/projects/rails-tasks-api.jpg",
    github: `${GITHUB}/rails-tasks-api`,
    live: null,
    highlight: true,
  },
  {
    title: "rails-auth-api",
    titlePt: "API de Autenticação JWT",
    subtitle: "Auth JWT · Devise · TDD",
    description:
      "API RESTful com autenticação completa via JWT usando Devise. Signup, login, logout, rotas protegidas e autorização por dono do recurso. RSpec com FactoryBot.",
    tech: ["Ruby on Rails", "JWT", "Devise", "RSpec"],
    icon: SiRubyonrails,
    rails: true,
    image: "/projects/rails-auth-api.jpg",
    github: `${GITHUB}/rails-auth-api`,
    live: null,
    highlight: true,
  },
  {
    title: "rails-link-shortener",
    titlePt: "Encurtador de Links",
    subtitle: "Web App · Tailwind + Hotwire",
    description:
      "Encurtador de URLs com interface web moderna. Rails 7 + Tailwind CSS escuro + Stimulus JS. Contador de cliques em tempo real com Turbo.",
    tech: ["Ruby on Rails", "Tailwind CSS", "Hotwire", "Stimulus"],
    icon: SiRubyonrails,
    rails: true,
    image: "/projects/rails-link-shortener.jpg",
    github: `${GITHUB}/rails-link-shortener`,
    live: null,
    highlight: false,
  },
  {
    title: "ruby-expense-tracker",
    titlePt: "Rastreador de Gastos (CLI)",
    subtitle: "CLI · Ruby Puro",
    description:
      "Versão CLI do controle de gastos em Ruby puro, sem gems. Relatórios por categoria com barras no terminal. Persistência JSON. Base do expense-tracker-web.",
    tech: ["Ruby", "CLI", "JSON", "Linux"],
    icon: SiRuby,
    rails: true,
    image: "/projects/ruby-expense-tracker.jpg",
    github: `${GITHUB}/ruby-expense-tracker`,
    live: "https://reinaldobarreto31.github.io/expense-tracker-web/",
    highlight: false,
  },
];

const RAILS_TECHS = new Set(["Ruby on Rails", "Ruby"]);

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-primary">~/</span>projetos_destaque
          </h2>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={14} />
            ver todos no GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => window.open(project.live ?? project.github, "_blank")}
              className={`icon-card-3d group relative bg-card border rounded-lg overflow-hidden flex flex-col transition-colors cursor-pointer ${
                project.highlight
                  ? "border-primary/30 hover:border-primary/60"
                  : "border-border hover:border-border/80"
              }`}
            >
              {/* Live badge */}
              {project.live && (
                <div className="absolute top-3 right-3 z-10">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[10px] font-mono bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full hover:bg-primary/30 transition-colors"
                  >
                    <Globe size={10} />
                    live
                  </a>
                </div>
              )}

              {/* Project image */}
              <div className="relative h-40 overflow-hidden bg-card border-b border-border">
                <img
                  src={project.image}
                  alt={project.titlePt}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* 3D icon orb overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/70 border border-primary/30 rounded-2xl p-4 backdrop-blur-sm shadow-[0_0_30px_rgba(204,0,0,0.3)]">
                    <project.icon className="text-5xl text-red-400 project-icon-orb" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1 gap-2">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-foreground flex items-center gap-1.5">
                      <project.icon className="text-red-400 text-sm project-icon-orb shrink-0" />
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-primary transition-colors text-muted-foreground"
                    >
                      <Github size={16} />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-primary transition-colors text-muted-foreground"
                      >
                        <ExternalLink size={18} />
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-primary transition-colors text-muted-foreground"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-sans flex-1 mb-4 leading-relaxed mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) =>
                    RAILS_TECHS.has(t) ? (
                      <span
                        key={t}
                        className="tag-rails inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold"
                      >
                        <project.icon className="text-[9px]" />
                        {t}
                      </span>
                    ) : (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 bg-background border border-border rounded"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-card-3d inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm
                       text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Github size={16} />
            github.com/reinaldobarreto31
          </a>
        </div>
      </div>
    </section>
  );
}
