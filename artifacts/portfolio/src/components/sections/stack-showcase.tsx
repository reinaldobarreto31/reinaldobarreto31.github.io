import { useState } from "react";
import { motion } from "framer-motion";
import { SiSpring, SiKotlin, SiGo, SiReact, SiVuedotjs, SiDocker, SiPostgresql } from "react-icons/si";
import { JavaIcon } from "@/components/icons/JavaIcon";
import { ExternalLink, RotateCcw } from "lucide-react";

const GITHUB = "https://github.com/reinaldobarreto31";

const STACK = [
  {
    name: "Java",
    tagline: "Core do backend",
    icon: JavaIcon,
    iconClass: "text-orange-400",
    glowColor: "rgba(237,139,0,0.3)",
    glowColorSoft: "rgba(237,139,0,0.12)",
    borderFront: "border-orange-500/35",
    borderBack: "border-orange-500/50",
    bgFront: "from-orange-950/60 via-background to-background",
    bgBack: "from-orange-950/80 via-card to-card",
    badgeBg: "bg-orange-950/60 border-orange-500/40 text-orange-200",
    description: "Core da stack backend. Sistemas críticos para o setor público, JPA/Hibernate, OAuth2/Keycloak e arquitetura limpa.",
    highlights: ["Java 17 / 21", "JPA · Hibernate", "Maven · Gradle", "JUnit · Mockito"],
    projects: [
      { label: "ClienteHub", href: `${GITHUB}/clientehub` },
      { label: "PRODEB/BA",  href: GITHUB },
    ],
  },
  {
    name: "Spring Boot",
    tagline: "Framework principal",
    icon: SiSpring,
    iconClass: "text-green-400",
    glowColor: "rgba(109,179,63,0.35)",
    glowColorSoft: "rgba(109,179,63,0.12)",
    borderFront: "border-primary/35",
    borderBack: "border-primary/55",
    bgFront: "from-green-950/60 via-background to-background",
    bgBack: "from-green-950/80 via-card to-card",
    badgeBg: "bg-green-950/60 border-green-500/40 text-green-200",
    description: "Spring Data, Spring Security, Spring Cloud, APIs documentadas com Swagger/OpenAPI e autenticação JWT.",
    highlights: ["Spring Boot 3", "Spring Security", "Spring Cloud", "OpenAPI · Swagger"],
    projects: [
      { label: "ClienteHub", href: `${GITHUB}/clientehub` },
      { label: "PRODEB/BA",  href: GITHUB },
    ],
  },
  {
    name: "Kotlin",
    tagline: "Backend & Android",
    icon: SiKotlin,
    iconClass: "text-purple-400",
    glowColor: "rgba(127,82,255,0.35)",
    glowColorSoft: "rgba(127,82,255,0.1)",
    borderFront: "border-purple-500/35",
    borderBack: "border-purple-500/55",
    bgFront: "from-purple-950/60 via-background to-background",
    bgBack: "from-purple-950/80 via-card to-card",
    badgeBg: "bg-purple-950/60 border-purple-500/40 text-purple-200",
    description: "Linguagem moderna com null-safety, Coroutines, extensões e interoperabilidade total com Java/Spring Boot.",
    highlights: ["Kotlin Coroutines", "Android · MVVM", "Room Database", "Material Design 3"],
    projects: [
      { label: "PDF Compressor", href: "https://senior-profile-suite.replit.app/pdf-compressor/" },
      { label: "Kotlin Tasks",   href: `${GITHUB}/kotlin-tasks-android` },
    ],
  },
  {
    name: "Go",
    tagline: "Alta performance",
    icon: SiGo,
    iconClass: "text-cyan-300",
    glowColor: "rgba(0,173,216,0.28)",
    glowColorSoft: "rgba(0,173,216,0.08)",
    borderFront: "border-cyan-500/35",
    borderBack: "border-cyan-500/55",
    bgFront: "from-cyan-950/60 via-background to-background",
    bgBack: "from-cyan-950/80 via-card to-card",
    badgeBg: "bg-cyan-950/60 border-cyan-500/40 text-cyan-200",
    description: "APIs cloud-native com concorrência via Goroutines, binários compactos e eficiência de memória para microsserviços.",
    highlights: ["Go 1.22+", "REST APIs", "Goroutines", "JWT · PostgreSQL"],
    projects: [
      { label: "StockWise", href: `${GITHUB}/stockwise-go` },
    ],
  },
  {
    name: "React",
    tagline: "Dashboards & SPAs",
    icon: SiReact,
    iconClass: "text-cyan-400",
    glowColor: "rgba(34,211,238,0.25)",
    glowColorSoft: "rgba(34,211,238,0.08)",
    borderFront: "border-cyan-400/35",
    borderBack: "border-cyan-400/55",
    bgFront: "from-cyan-950/50 via-background to-background",
    bgBack: "from-cyan-950/70 via-card to-card",
    badgeBg: "bg-cyan-950/60 border-cyan-400/40 text-cyan-200",
    description: "React 18, Tailwind CSS, React Query, Vite e componentização baseada em design system para dashboards modernos.",
    highlights: ["React 18 · Vite", "Tailwind CSS", "React Query", "TypeScript"],
    projects: [
      { label: "ClienteHub",     href: `${GITHUB}/clientehub` },
      { label: "PDF Compressor", href: "https://senior-profile-suite.replit.app/pdf-compressor/" },
    ],
  },
  {
    name: "Vue.js",
    tagline: "Sistemas públicos",
    icon: SiVuedotjs,
    iconClass: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.25)",
    glowColorSoft: "rgba(52,211,153,0.08)",
    borderFront: "border-emerald-500/35",
    borderBack: "border-emerald-500/55",
    bgFront: "from-emerald-950/50 via-background to-background",
    bgBack: "from-emerald-950/70 via-card to-card",
    badgeBg: "bg-emerald-950/60 border-emerald-500/40 text-emerald-200",
    description: "Framework progressivo utilizado em sistemas estaduais e municipais. Composition API e integração com APIs Spring Boot.",
    highlights: ["Vue 3 · Composition API", "SFCs", "Pinia", "Integração REST"],
    projects: [
      { label: "PRODEB/BA", href: GITHUB },
      { label: "EDZA (ERP)", href: GITHUB },
    ],
  },
];

const INFRA = [
  { icon: SiDocker,     label: "Docker · Compose",      color: "text-blue-400" },
  { icon: SiPostgresql, label: "PostgreSQL",             color: "text-indigo-300" },
];

function FlipCard({ tech, index }: { tech: typeof STACK[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`flip-card h-56 rounded-xl ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-card-inner rounded-xl">

        {/* ── FRONT ── */}
        <div
          className={`flip-card-front border bg-gradient-to-br ${tech.bgFront} ${tech.borderFront} flex flex-col items-center justify-center gap-4 p-6 rounded-xl`}
          style={{ boxShadow: `0 0 32px ${tech.glowColorSoft}, inset 0 1px 0 rgba(255,255,255,0.05)` }}
        >
          {/* Cockpit scan-line overlay */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)",
            }}
          />

          {/* Icon */}
          <div
            className="relative p-4 rounded-2xl bg-background/50 border border-white/10 backdrop-blur-sm"
            style={{ boxShadow: `0 0 28px ${tech.glowColor}` }}
          >
            <Icon className={`text-5xl ${tech.iconClass}`} />
          </div>

          {/* Name + tagline */}
          <div className="text-center z-10">
            <p className="font-bold text-lg text-foreground leading-none">{tech.name}</p>
            <p className="text-xs text-muted-foreground mt-1 font-mono">{tech.tagline}</p>
          </div>

          {/* Flip hint */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[9px] font-mono text-muted-foreground/50">
            <RotateCcw size={9} />
            ver stack
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className={`flip-card-back border bg-gradient-to-br ${tech.bgBack} ${tech.borderBack} flex flex-col p-5 gap-3 rounded-xl`}
          style={{ boxShadow: `0 0 40px ${tech.glowColorSoft}, inset 0 1px 0 rgba(255,255,255,0.06)` }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Icon className={`text-lg ${tech.iconClass} shrink-0`} />
            <span className="font-bold text-sm text-foreground">{tech.name}</span>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed flex-1 font-sans">
            {tech.description}
          </p>

          {/* Highlight badges */}
          <div className="flex flex-wrap gap-1.5">
            {tech.highlights.map((h) => (
              <span
                key={h}
                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tech.badgeBg}`}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Project links */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-[10px] font-mono text-muted-foreground/70">projetos:</span>
            {tech.projects.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-1 text-[10px] font-mono hover:underline ${tech.iconClass}`}
              >
                <ExternalLink size={9} />
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StackShowcaseSection() {
  return (
    <section id="stack" className="py-24 bg-card/30 border-y border-border relative overflow-hidden">
      {/* Background scan line */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(109,179,63,0.012) 3px, rgba(109,179,63,0.012) 4px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Tecnologias</p>
          <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-3">
            <span className="bg-primary/10 border border-primary/30 p-2 rounded-lg shadow-[0_0_16px_rgba(109,179,63,0.2)] inline-flex">
              <SiSpring className="text-primary text-xl" />
            </span>
            Stack Principal
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-md">
            Passe o mouse ou toque nos cards para ver os detalhes de cada tecnologia.
          </p>
        </div>

        {/* Flip card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STACK.map((tech, i) => (
            <FlipCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Infra strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {INFRA.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono text-muted-foreground"
            >
              <Icon className={color} />
              {label}
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono text-muted-foreground">
            <span>☁️</span> AWS · Azure · GCP
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono text-muted-foreground">
            <span>🔒</span> OAuth2 · Keycloak · JWT
          </div>
        </div>
      </div>
    </section>
  );
}
