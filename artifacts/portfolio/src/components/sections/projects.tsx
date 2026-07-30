import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Clock } from "lucide-react";
import { SiSpring, SiKotlin, SiGo, SiReact } from "react-icons/si";
import { Coffee } from "lucide-react";

const GITHUB = "https://github.com/reinaldobarreto31";

const projects = [
  {
    title: "pdf-compressor",
    titlePt: "Compressor de PDF",
    subtitle: "React + Vite · 100% no navegador",
    description:
      "Compressor de PDFs para os padrões brasileiros — Governo BR (2 MB), Empresa (5 MB), E-mail e mais. Processa localmente no navegador, zero upload. Presets alinhados com perfis Ghostscript (/screen, /ebook, /printer).",
    tech: ["React", "Vite", "TypeScript", "pdf-lib", "pdfjs-dist"],
    icon: SiReact,
    orbClass: "project-icon-orb",
    cardBorder: "border-primary/30 hover:border-primary/60",
    live: "https://senior-profile-suite.replit.app/pdf-compressor/",
    github: `${GITHUB}`,
    highlight: true,
    comingSoon: false,
  },
  {
    title: "stockwise-go",
    titlePt: "StockWise — Controle de Estoque",
    subtitle: "Go · React.js · PostgreSQL",
    description:
      "Sistema de controle de estoque com backend em Go (Golang) e frontend em React.js. API RESTful com autenticação JWT, CRUD completo e persistência em PostgreSQL.",
    tech: ["Go", "React.js", "PostgreSQL", "JWT", "REST API"],
    icon: SiGo,
    orbClass: "project-icon-orb",
    cardBorder: "border-cyan-500/30 hover:border-cyan-500/60",
    live: null,
    github: `${GITHUB}/stockwise-go`,
    highlight: true,
    comingSoon: true,
  },
  {
    title: "spring-auth-api",
    titlePt: "API de Autenticação JWT + OAuth2",
    subtitle: "Spring Boot · Spring Security · Keycloak",
    description:
      "API REST com autenticação completa via JWT e OAuth2/Keycloak usando Spring Security. CRUD de usuários com validação, roles e persistência em PostgreSQL. Documentação OpenAPI (Swagger).",
    tech: ["Java", "Spring Boot", "Spring Security", "OAuth2", "Keycloak", "PostgreSQL"],
    icon: SiSpring,
    orbClass: "project-icon-orb",
    cardBorder: "border-primary/30 hover:border-primary/60",
    live: null,
    github: `${GITHUB}/spring-auth-api`,
    highlight: true,
    comingSoon: true,
  },
  {
    title: "kotlin-tasks-android",
    titlePt: "App Android — Gestão de Tarefas",
    subtitle: "Kotlin · Android · Room · Coroutines",
    description:
      "Aplicativo Android em Kotlin para gestão de tarefas com sincronização em tempo real. Arquitetura MVVM, Room Database, Coroutines e Material Design 3.",
    tech: ["Kotlin", "Android", "Room", "Coroutines", "MVVM"],
    icon: SiKotlin,
    orbClass: "project-icon-orb-kotlin",
    cardBorder: "border-purple-500/30 hover:border-purple-500/60",
    live: null,
    github: `${GITHUB}/kotlin-tasks-android`,
    highlight: false,
    comingSoon: true,
  },
  {
    title: "prodeb-spring-boot",
    titlePt: "Sistemas Públicos Estaduais (PRODEB)",
    subtitle: "Spring Boot · Java EE · Vue.js · PostgreSQL",
    description:
      "Desenvolvimento e manutenção de soluções web para órgãos estaduais. APIs RESTful escaláveis em Java e Spring Boot, integração com sistemas legados e modernização de processos públicos.",
    tech: ["Java", "Spring Boot", "Vue.js", "PostgreSQL", "Scrum", "Linux"],
    icon: Coffee,
    orbClass: "project-icon-orb-java",
    cardBorder: "border-orange-500/20 hover:border-orange-500/40",
    live: null,
    github: GITHUB,
    highlight: false,
    comingSoon: false,
  },
];

const SPRING_TECHS = new Set(["Spring Boot", "Spring Security", "Spring Cloud", "OAuth2", "Keycloak"]);
const JAVA_TECHS   = new Set(["Java", "Java EE"]);
const KOTLIN_TECHS = new Set(["Kotlin"]);

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
              onClick={() => !project.comingSoon && window.open(project.live ?? project.github, "_blank")}
              className={`icon-card-3d group relative bg-card border rounded-lg overflow-hidden flex flex-col transition-colors ${
                project.comingSoon ? "cursor-default opacity-80" : "cursor-pointer"
              } ${project.cardBorder}`}
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
                    <Globe size={10} /> live
                  </a>
                </div>
              )}

              {/* Coming soon badge */}
              {project.comingSoon && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="flex items-center gap-1 text-[10px] font-mono bg-muted/40 text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                    <Clock size={9} /> em breve
                  </span>
                </div>
              )}

              {/* Project image area / icon orb */}
              <div className="relative h-36 overflow-hidden bg-card border-b border-border flex items-center justify-center">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(109,179,63,0.15) 8px, rgba(109,179,63,0.15) 9px)"
                  }}
                />
                <div className="bg-background/70 border border-primary/20 rounded-2xl p-4 backdrop-blur-sm shadow-[0_0_30px_rgba(109,179,63,0.2)]">
                  <project.icon className={`text-5xl text-green-400 ${project.orbClass}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1 gap-2">
                  <div>
                    <h3 className="font-mono text-sm font-bold text-foreground flex items-center gap-1.5">
                      <project.icon className={`text-sm ${project.orbClass} shrink-0`} />
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
                      <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors text-muted-foreground">
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-primary transition-colors text-muted-foreground">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-sans flex-1 mb-4 leading-relaxed mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) =>
                    SPRING_TECHS.has(t) ? (
                      <span key={t} className="tag-spring inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold">
                        <SiSpring className="text-[9px]" /> {t}
                      </span>
                    ) : JAVA_TECHS.has(t) ? (
                      <span key={t} className="tag-java inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold">
                        <Coffee size={9} /> {t}
                      </span>
                    ) : KOTLIN_TECHS.has(t) ? (
                      <span key={t} className="tag-kotlin inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border rounded font-bold">
                        <SiKotlin className="text-[9px]" /> {t}
                      </span>
                    ) : (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-background border border-border rounded">
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
            className="icon-card-3d inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Github size={16} />
            github.com/reinaldobarreto31
          </a>
        </div>
      </div>
    </section>
  );
}
