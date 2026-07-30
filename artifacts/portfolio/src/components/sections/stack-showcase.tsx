import { motion } from "framer-motion";
import { SiSpring, SiKotlin, SiGo, SiReact, SiVuedotjs, SiDocker, SiPostgresql } from "react-icons/si";
import { JavaIcon } from "@/components/icons/JavaIcon";
import { ExternalLink } from "lucide-react";

const GITHUB = "https://github.com/reinaldobarreto31";

const STACK = [
  {
    name: "Java",
    icon: JavaIcon,
    variant: "java",
    iconClass: "text-orange-400",
    borderClass: "border-orange-500/30 hover:border-orange-500/60",
    glowColor: "rgba(237,139,0,0.18)",
    badgeBg: "bg-orange-950/40 border-orange-500/40 text-orange-300",
    description:
      "Core da stack backend. Sistemas críticos para setor público, APIs RESTful, JPA/Hibernate, OAuth2/Keycloak, microsserviços e arquitetura limpa.",
    highlights: ["Java 17 / 21", "JPA · Hibernate", "Maven · Gradle", "JUnit · Mockito"],
    projects: [
      { label: "ClienteHub", href: `${GITHUB}/clientehub` },
      { label: "PRODEB/BA", href: GITHUB },
    ],
  },
  {
    name: "Spring Boot",
    icon: SiSpring,
    variant: "spring",
    iconClass: "text-green-400",
    borderClass: "border-primary/40 hover:border-primary/70",
    glowColor: "rgba(109,179,63,0.22)",
    badgeBg: "bg-green-950/40 border-green-500/40 text-green-300",
    description:
      "Framework principal. Spring Data, Spring Security, Spring Cloud, API RESTful documentada com Swagger/OpenAPI e autenticação JWT.",
    highlights: ["Spring Boot 3", "Spring Security", "Spring Cloud", "OpenAPI · Swagger"],
    projects: [
      { label: "ClienteHub", href: `${GITHUB}/clientehub` },
      { label: "PRODEB/BA", href: GITHUB },
    ],
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    variant: "kotlin",
    iconClass: "text-purple-400",
    borderClass: "border-purple-500/30 hover:border-purple-500/60",
    glowColor: "rgba(127,82,255,0.2)",
    badgeBg: "bg-purple-950/40 border-purple-500/40 text-purple-300",
    description:
      "Linguagem moderna para backend e Android. Coroutines, null-safety, extensões e interoperabilidade total com Java/Spring Boot.",
    highlights: ["Kotlin Coroutines", "Android · MVVM", "Room Database", "Material Design 3"],
    projects: [
      { label: "PDF Compressor", href: "https://senior-profile-suite.replit.app/pdf-compressor/" },
      { label: "Kotlin Tasks", href: `${GITHUB}/kotlin-tasks-android` },
    ],
  },
  {
    name: "Go",
    icon: SiGo,
    variant: "go",
    iconClass: "text-cyan-300",
    borderClass: "border-cyan-500/30 hover:border-cyan-500/60",
    glowColor: "rgba(0,173,216,0.16)",
    badgeBg: "bg-cyan-950/40 border-cyan-500/40 text-cyan-300",
    description:
      "Linguagem de alto desempenho para serviços cloud-native. APIs concorrentes, eficiência de memória e binários compactos para microsserviços.",
    highlights: ["Go 1.22+", "REST APIs", "Goroutines", "JWT · PostgreSQL"],
    projects: [
      { label: "StockWise", href: `${GITHUB}/stockwise-go` },
    ],
  },
  {
    name: "React",
    icon: SiReact,
    variant: "react",
    iconClass: "text-cyan-400",
    borderClass: "border-cyan-400/30 hover:border-cyan-400/60",
    glowColor: "rgba(34,211,238,0.14)",
    badgeBg: "bg-cyan-950/40 border-cyan-400/40 text-cyan-300",
    description:
      "Frontend moderno para dashboards e SPAs. React 18, Tailwind CSS, React Query, Vite e componentização baseada em design system.",
    highlights: ["React 18 · Vite", "Tailwind CSS", "React Query", "TypeScript"],
    projects: [
      { label: "ClienteHub", href: `${GITHUB}/clientehub` },
      { label: "PDF Compressor", href: "https://senior-profile-suite.replit.app/pdf-compressor/" },
    ],
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    variant: "vue",
    iconClass: "text-emerald-400",
    borderClass: "border-emerald-500/30 hover:border-emerald-500/60",
    glowColor: "rgba(52,211,153,0.14)",
    badgeBg: "bg-emerald-950/40 border-emerald-500/40 text-emerald-300",
    description:
      "Framework progressivo utilizado em sistemas públicos estaduais e municipais. SFCs, Composition API e integração com APIs Spring Boot.",
    highlights: ["Vue 3 · Composition API", "SFCs", "Pinia", "Integração REST"],
    projects: [
      { label: "PRODEB/BA", href: GITHUB },
      { label: "EDZA (ERP)", href: GITHUB },
    ],
  },
];

const INFRA = [
  { icon: SiDocker,     label: "Docker · Compose",  color: "text-blue-400" },
  { icon: SiPostgresql, label: "PostgreSQL",         color: "text-indigo-300" },
];

export function StackShowcaseSection() {
  return (
    <section id="stack" className="py-24 bg-card/30 border-y border-border relative">
      {/* Cockpit scan line */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(109,179,63,0.012) 3px, rgba(109,179,63,0.012) 4px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Tecnologias</p>
          <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-3">
            <span className="bg-primary/10 border border-primary/30 p-2 rounded-lg shadow-[0_0_16px_rgba(109,179,63,0.2)] inline-flex">
              <SiSpring className="text-primary text-xl" />
            </span>
            Stack Principal
          </h2>
          <p className="text-muted-foreground text-sm font-sans mt-3 max-w-xl">
            Tecnologias que uso no dia a dia — do backend em Java/Spring Boot ao frontend em React e Vue.js.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`icon-card-3d group relative bg-card border rounded-xl p-5 flex flex-col gap-4 transition-all duration-300 ${tech.borderClass}`}
                style={{ boxShadow: `0 4px 28px ${tech.glowColor}` }}
              >
                {/* Icon + name */}
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg bg-background border border-white/10 shadow-sm`} style={{ boxShadow: `0 0 18px ${tech.glowColor}` }}>
                    <Icon className={`text-2xl ${tech.iconClass}`} />
                  </div>
                  <span className={`font-bold text-base font-mono`}>{tech.name}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed font-sans flex-1">
                  {tech.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {tech.highlights.map((h) => (
                    <span key={h} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tech.badgeBg}`}>
                      {h}
                    </span>
                  ))}
                </div>

                {/* Projects */}
                {tech.projects.length > 0 && (
                  <div className="pt-3 border-t border-border/60 flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground self-center">projetos:</span>
                    {tech.projects.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-mono text-primary hover:underline"
                      >
                        <ExternalLink size={9} />
                        {p.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Infra strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {INFRA.map(({ icon: Icon, label, color }) => (
            <div key={label} className="icon-card-3d flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono text-muted-foreground">
              <Icon className={color} />
              {label}
            </div>
          ))}
          <div className="icon-card-3d flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono text-muted-foreground">
            <span>☁️</span> AWS · Azure · GCP
          </div>
          <div className="icon-card-3d flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono text-muted-foreground">
            <span>🔒</span> OAuth2 · Keycloak · JWT
          </div>
        </div>
      </div>
    </section>
  );
}
