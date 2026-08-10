import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Globe, Rocket, TerminalSquare, Sparkles, Package } from "lucide-react";
import {
  SiRubyonrails, SiRuby, SiPostgresql, SiDocker, SiGithubactions, SiReact,
  SiTypescript, SiSwagger, SiGo, SiJavascript, SiNodedotjs, SiMysql, SiMongodb,
  SiRedis, SiLinux, SiGnubash, SiGit, SiAngular, SiVuedotjs, SiSpringboot,
  SiKubernetes, SiTailwindcss, SiVite,
} from "react-icons/si";
import type { AdminProject, ProjectTone, ProjectBadge } from "@/lib/default-data";

const GITHUB = "https://github.com/reinaldobarreto31";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  sparkles: Sparkles,
  swagger: SiSwagger,
  rails: SiRubyonrails,
  ruby: SiRuby,
  package: Package,
  postgres: SiPostgresql,
  docker: SiDocker,
  actions: SiGithubactions,
  react: SiReact,
  ts: SiTypescript,
  go: SiGo,
  js: SiJavascript,
  node: SiNodedotjs,
  mysql: SiMysql,
  mongo: SiMongodb,
  redis: SiRedis,
  linux: SiLinux,
  bash: SiGnubash,
  git: SiGit,
  angular: SiAngular,
  vue: SiVuedotjs,
  spring: SiSpringboot,
  k8s: SiKubernetes,
  tailwind: SiTailwindcss,
  vite: SiVite,
  rocket: Rocket,
  terminal: TerminalSquare,
  github: Github,
  globe: Globe,
};

const badgeStyle: Record<NonNullable<ProjectBadge>, string> = {
  DESTAQUE: "bg-[#b91f32]/90 text-white shadow-[0_0_0_1px_rgba(255,255,255,.08),0_8px_22px_rgba(185,31,50,.35)]",
  "EM CONSTRUÇÃO": "bg-[#bd93f9]/85 text-[#161720] shadow-[0_0_0_1px_rgba(255,255,255,.08),0_8px_22px_rgba(189,147,249,.35)]",
  LIVE: "bg-[#50fa7b]/90 text-[#161720] shadow-[0_0_0_1px_rgba(255,255,255,.1),0_8px_22px_rgba(80,250,123,.35)]",
  API: "bg-[#6272a4]/85 text-white shadow-[0_0_0_1px_rgba(255,255,255,.08)]",
  "FULL-STACK": "bg-[#ffb86c]/85 text-[#161720] shadow-[0_0_0_1px_rgba(255,255,255,.08)]",
};

type Props = { projects: AdminProject[] };

function ProjectCard({
  project, index, size = "normal",
}: { project: AdminProject; index: number; size?: "featured" | "normal" }) {
  const Icon = ICON_MAP[project.icon] ?? Sparkles;
  const onOpen = () => window.open(project.live ?? project.github, "_blank", "noopener,noreferrer");
  const isFeatured = size === "featured";

  return (
    <motion.article
      key={project.id}
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

export function ProjectsSection({ projects }: Props) {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

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
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} size="featured" />
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
          {secondary.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} size="normal" />
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
