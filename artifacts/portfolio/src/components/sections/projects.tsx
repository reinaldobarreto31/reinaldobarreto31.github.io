import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SiRubyonrails, SiRuby, SiOpenjdk } from "react-icons/si";

const GITHUB = "https://github.com/reinaldobarreto31";

const projects = [
  {
    title: "rails-tasks-api",
    subtitle: "API RESTful · CRUD Completo",
    description:
      "API de gerenciamento de tarefas com Ruby on Rails 7 e PostgreSQL. Endpoints REST completos com validações, escopos e JSON responses.",
    tech: ["Ruby on Rails", "PostgreSQL", "REST API", "RSpec"],
    icon: SiRubyonrails,
    iconColor: "text-red-500",
    image: "/projects/rails-tasks-api.jpg",
    github: `${GITHUB}/rails-tasks-api`,
    highlight: true,
  },
  {
    title: "rails-link-shortener",
    subtitle: "Web App · Tailwind + Hotwire",
    description:
      "Encurtador de URLs com interface web moderna. Rails 7 + Tailwind CSS escuro + Stimulus JS. Contador de cliques em tempo real com Turbo.",
    tech: ["Ruby on Rails", "Tailwind CSS", "Hotwire", "Stimulus"],
    icon: SiRubyonrails,
    iconColor: "text-red-400",
    image: "/projects/rails-link-shortener.jpg",
    github: `${GITHUB}/rails-link-shortener`,
    highlight: true,
  },
  {
    title: "ruby-expense-tracker",
    subtitle: "CLI · Ruby Puro",
    description:
      "Controle de gastos pessoais via linha de comando em Ruby puro, sem gems. Relatórios por categoria com visualização de barras no terminal.",
    tech: ["Ruby", "CLI", "JSON", "Linux"],
    icon: SiRuby,
    iconColor: "text-rose-400",
    image: "/projects/ruby-expense-tracker.jpg",
    github: `${GITHUB}/ruby-expense-tracker`,
    highlight: false,
  },
  {
    title: "observability-metrics",
    subtitle: "Java · Spring Boot",
    description:
      "Microserviço Java Spring Boot exportando métricas para Prometheus com dashboards no Grafana. Legado — migrando para Ruby on Rails.",
    tech: ["Java", "Spring Boot", "Prometheus", "Grafana"],
    icon: SiOpenjdk,
    iconColor: "text-yellow-500",
    image: null,
    github: `${GITHUB}/observability-metrics`,
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
              {/* Project image — clickable, links to GitHub */}
              {project.image && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden aspect-video bg-zinc-900"
                  title={`Ver ${project.title} no GitHub`}
                >
                  <img
                    src={project.image}
                    alt={`Preview do ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="flex items-center gap-2 bg-primary text-white text-sm font-mono px-4 py-2 rounded-md shadow-lg">
                      <Github size={16} />
                      Ver no GitHub
                    </span>
                  </div>
                </a>
              )}

              {/* No-image placeholder */}
              {!project.image && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video bg-zinc-900/60 flex items-center justify-center group/img"
                >
                  <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover/img:text-foreground transition-colors">
                    <project.icon size={36} className={project.iconColor} />
                    <span className="text-xs font-mono">{project.title}</span>
                  </div>
                </a>
              )}

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-mono font-bold text-base group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      title="Abrir projeto"
                    >
                      <ExternalLink size={18} />
                    </a>
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
