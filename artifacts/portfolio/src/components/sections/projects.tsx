import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { SiRubyonrails, SiRuby } from "react-icons/si";

const GITHUB = "https://github.com/reinaldobarreto31";

const projects = [
  {
    title: "expense-tracker-web",
    titlePt: "Controle de Gastos Web",
    subtitle: "Rails API + React Vite · GitHub Pages",
    description:
      "Controle de gastos pessoais com interface web moderna. Ruby on Rails API no backend, React Vite + TypeScript no frontend. Gráficos de pizza e barras por categoria. Deploy automático no GitHub Pages.",
    tech: ["Ruby on Rails", "React", "Vite", "TypeScript", "Recharts"],
    icon: SiRubyonrails,
    iconColor: "text-red-500",
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
    iconColor: "text-red-500",
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
    iconColor: "text-red-400",
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
    iconColor: "text-red-400",
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
    iconColor: "text-rose-400",
    image: "/projects/ruby-expense-tracker.jpg",
    github: `${GITHUB}/ruby-expense-tracker`,
    live: "https://reinaldobarreto31.github.io/expense-tracker-web/",
    highlight: false,
  },
];

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
              className={`group relative bg-card border rounded-lg overflow-hidden flex flex-col transition-colors ${
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
                    className="flex items-center gap-1.5 bg-primary text-white text-[10px] font-mono
                               px-2.5 py-1 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
                  >
                    <Globe size={10} />
                    Live Demo
                  </a>
                </div>
              )}

              {/* Project image with hover overlay */}
              {project.image && (
                <div className="relative overflow-hidden aspect-video bg-zinc-900">
                  <img
                    src={project.image}
                    alt={`Preview do ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay — GitHub + optional Live buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-zinc-900 border border-primary text-white text-sm font-mono px-4 py-2 rounded-md shadow-lg hover:bg-zinc-800 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white text-sm font-mono px-4 py-2 rounded-md shadow-lg hover:bg-primary/80 transition-colors"
                      >
                        <Globe size={16} />
                        Ver App
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-mono font-bold text-base group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">
                      ({project.titlePt})
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      title="Ver no GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        title="Ver app ao vivo"
                      >
                        <Globe size={18} />
                      </a>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-sans flex-1 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 bg-background border border-border rounded"
                    >
                      {t}
                    </span>
                  ))}
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
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm
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
