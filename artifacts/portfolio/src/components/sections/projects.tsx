import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Clock, Zap } from "lucide-react";
import { SiSpring, SiKotlin, SiGo, SiReact, SiDocker, SiPostgresql, SiTailwindcss, SiSwagger } from "react-icons/si";
import { JavaIcon } from "@/components/icons/JavaIcon";

const GITHUB = "https://github.com/reinaldobarreto31";

const projects = [
  {
    title: "ClienteHub",
    titlePt: "ClienteHub — API REST + Dashboard React",
    subtitle: "Spring Boot 3 · React 18 · Tailwind · PostgreSQL",
    description:
      "CRUD completo de clientes com API RESTful em Spring Boot 3, autenticação JWT, JPA/Hibernate e PostgreSQL. Frontend em React 18 + Tailwind com dashboard, tabela paginada, formulários com validação e modo dark. Docker Compose para dev local. Swagger UI integrado.",
    tech: ["Java", "Spring Boot", "Spring Security", "React", "Tailwind", "PostgreSQL", "Docker", "JWT"],
    icon: SiSpring,
    iconColor: "text-green-400",
    orbClass: "project-icon-orb",
    cardBorder: "border-primary/40 hover:border-primary/70",
    headerBg: "from-green-950/40 to-background",
    glowColor: "rgba(109,179,63,0.25)",
    live: null,
    github: `${GITHUB}/clientehub`,
    highlight: true,
    comingSoon: false,
    badge: "novo",
  },
  {
    title: "PDF Compressor",
    titlePt: "Compressor de PDF",
    subtitle: "Kotlin · Spring Boot · React · Vite · 100% no navegador",
    description:
      "Compressor de PDFs para os padrões brasileiros — Governo BR (2 MB), Empresa (5 MB), E-mail e mais. Base em Kotlin com Spring Boot. Processamento 100% local no navegador sem upload. Presets alinhados com perfis Ghostscript (/screen, /ebook, /printer). Controle de qualidade e DPI personalizáveis.",
    tech: ["Kotlin", "Spring Boot", "React", "Vite", "TypeScript", "pdf-lib"],
    icon: SiKotlin,
    iconColor: "text-purple-400",
    orbClass: "project-icon-orb-kotlin",
    cardBorder: "border-purple-500/30 hover:border-purple-500/60",
    headerBg: "from-purple-950/30 to-background",
    glowColor: "rgba(127,82,255,0.2)",
    live: "https://senior-profile-suite.replit.app/pdf-compressor/",
    github: GITHUB,
    highlight: true,
    comingSoon: false,
    badge: null,
  },
  {
    title: "StockWise",
    titlePt: "StockWise — Controle de Estoque",
    subtitle: "Go · React.js · PostgreSQL · JWT",
    description:
      "Sistema de controle de estoque com backend em Go e frontend React.js. API RESTful com autenticação JWT, CRUD completo de produtos, movimentações, relatórios e persistência em PostgreSQL.",
    tech: ["Go", "React.js", "PostgreSQL", "JWT", "REST API"],
    icon: SiGo,
    iconColor: "text-cyan-300",
    orbClass: "project-icon-orb",
    cardBorder: "border-cyan-500/30 hover:border-cyan-500/60",
    headerBg: "from-cyan-950/30 to-background",
    glowColor: "rgba(0,173,216,0.18)",
    live: null,
    github: `${GITHUB}/stockwise-go`,
    highlight: true,
    comingSoon: true,
    badge: null,
  },
  {
    title: "Kotlin Tasks Android",
    titlePt: "App Android — Gestão de Tarefas",
    subtitle: "Kotlin · Android · Room · Coroutines · MVVM",
    description:
      "Aplicativo Android em Kotlin para gestão de tarefas com sincronização em tempo real. Arquitetura MVVM, Room Database, Coroutines e Material Design 3. Notificações e filtros por prioridade.",
    tech: ["Kotlin", "Android", "Room", "Coroutines", "MVVM"],
    icon: SiKotlin,
    iconColor: "text-purple-400",
    orbClass: "project-icon-orb-kotlin",
    cardBorder: "border-purple-500/30 hover:border-purple-500/60",
    headerBg: "from-purple-950/30 to-background",
    glowColor: "rgba(127,82,255,0.2)",
    live: null,
    github: `${GITHUB}/kotlin-tasks-android`,
    highlight: false,
    comingSoon: true,
    badge: null,
  },
  {
    title: "PRODEB",
    titlePt: "Sistemas Públicos Estaduais — PRODEB/BA",
    subtitle: "Spring Boot · Java · Vue.js · PostgreSQL · Scrum",
    description:
      "Desenvolvimento e manutenção de soluções web para órgãos estaduais da Bahia. APIs RESTful escaláveis em Java e Spring Boot, integração com sistemas legados e modernização de processos públicos.",
    tech: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "Linux"],
    icon: JavaIcon,
    iconColor: "text-orange-400",
    orbClass: "project-icon-orb-java",
    cardBorder: "border-orange-500/20 hover:border-orange-500/40",
    headerBg: "from-orange-950/20 to-background",
    glowColor: "rgba(237,139,0,0.15)",
    live: null,
    github: GITHUB,
    highlight: false,
    comingSoon: false,
    badge: null,
  },
];

const SPRING_TECHS = new Set(["Spring Boot", "Spring Security", "Spring Cloud", "OAuth2", "Keycloak"]);
const JAVA_TECHS   = new Set(["Java", "Java EE"]);
const KOTLIN_TECHS = new Set(["Kotlin"]);

function TechTag({ t }: { t: string }) {
  if (SPRING_TECHS.has(t))
    return (
      <span className="tag-spring inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold">
        <SiSpring className="text-[9px]" /> {t}
      </span>
    );
  if (JAVA_TECHS.has(t))
    return (
      <span className="tag-java inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold">
        <JavaIcon size={9} /> {t}
      </span>
    );
  if (KOTLIN_TECHS.has(t))
    return (
      <span className="tag-kotlin inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold">
        <SiKotlin className="text-[9px]" /> {t}
      </span>
    );
  if (t === "Docker")
    return <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-blue-950/30 border border-blue-500/30 text-blue-300 rounded font-bold"><SiDocker size={9}/> {t}</span>;
  if (t === "PostgreSQL")
    return <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-indigo-950/30 border border-indigo-400/30 text-indigo-300 rounded font-bold"><SiPostgresql size={9}/> {t}</span>;
  if (t === "React" || t === "React.js")
    return <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 rounded font-bold"><SiReact size={9}/> {t}</span>;
  if (t === "Tailwind" || t === "Tailwind CSS")
    return <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-sky-950/30 border border-sky-400/30 text-sky-300 rounded font-bold"><SiTailwindcss size={9}/> {t}</span>;
  if (t === "Swagger" || t === "OpenAPI")
    return <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-emerald-950/30 border border-emerald-400/30 text-emerald-300 rounded font-bold"><SiSwagger size={9}/> {t}</span>;
  if (t === "Go")
    return <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-cyan-950/20 border border-cyan-500/30 text-cyan-300 rounded font-bold"><SiGo size={9}/> {t}</span>;
  if (t === "Kotlin")
    return <span className="tag-kotlin inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold"><SiKotlin size={9}/> {t}</span>;
  return (
    <span className="text-[10px] font-mono px-2 py-0.5 bg-background border border-border rounded text-muted-foreground">
      {t}
    </span>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Portfólio</p>
            <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-3">
              <span className="bg-primary/10 border border-primary/30 p-2 rounded-lg shadow-[0_0_16px_rgba(109,179,63,0.2)] inline-flex">
                <SiSpring className="text-primary text-xl" />
              </span>
              Projetos em Destaque
            </h2>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border hover:border-primary/40 px-3 py-1.5 rounded-md"
          >
            <Github size={14} />
            Ver todos no GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => !project.comingSoon && window.open(project.live ?? project.github, "_blank")}
              className={`icon-card-3d group relative bg-card border rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
                project.comingSoon ? "cursor-default" : "cursor-pointer"
              } ${project.cardBorder} ${project.highlight ? "shadow-lg" : ""}`}
              style={project.highlight ? { boxShadow: `0 4px 32px ${project.glowColor}` } : {}}
            >

              {/* Badges top-right */}
              <div className="absolute top-3 right-3 z-10 flex gap-1.5">
                {project.badge === "novo" && (
                  <span className="flex items-center gap-1 text-[10px] font-bold bg-primary/25 text-primary border border-primary/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <Zap size={9} /> Novo
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[10px] font-mono bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full hover:bg-primary/30 transition-colors"
                  >
                    <Globe size={9} /> live
                  </a>
                )}
                {project.comingSoon && !project.live && project.badge !== "novo" && (
                  <span className="flex items-center gap-1 text-[10px] font-mono bg-muted/40 text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                    <Clock size={9} /> em breve
                  </span>
                )}
                {project.comingSoon && project.badge === "novo" && (
                  <span className="flex items-center gap-1 text-[10px] font-mono bg-muted/40 text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                    <Clock size={9} /> em breve
                  </span>
                )}
              </div>

              {/* Card header — gradient + icon */}
              <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.headerBg} border-b border-border flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.5) 8px, rgba(255,255,255,0.5) 9px)"
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-background/60 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                  style={{ boxShadow: `0 0 32px ${project.glowColor}` }}
                >
                  <project.icon className={`text-5xl ${project.iconColor}`} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <div>
                    <h3 className="font-bold text-base text-foreground">{project.titlePt}</h3>
                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2 shrink-0 mt-0.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-primary transition-colors text-muted-foreground"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    {(project.live || !project.comingSoon) && (
                      <a
                        href={project.live ?? project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-primary transition-colors text-muted-foreground"
                        title="Abrir"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => <TechTag key={t} t={t} />)}
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
            className="icon-card-3d inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Github size={16} />
            github.com/reinaldobarreto31
          </a>
        </div>
      </div>
    </section>
  );
}
