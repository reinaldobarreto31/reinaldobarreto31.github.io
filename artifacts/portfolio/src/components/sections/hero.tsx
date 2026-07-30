import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiSpring, SiKotlin, SiDocker, SiGo } from "react-icons/si";
import { JavaIcon } from "@/components/icons/JavaIcon";

const STACK = [
  {
    label: "Java",
    icon: <JavaIcon size={13} />,
    color: "from-orange-500/20 to-orange-950/0 border-orange-500/50 text-orange-300 shadow-[0_0_14px_rgba(237,139,0,0.25)]",
  },
  {
    label: "Spring Boot",
    icon: <SiSpring size={13} />,
    color: "from-green-500/20 to-green-950/0 border-green-500/50 text-green-300 shadow-[0_0_14px_rgba(109,179,63,0.35)]",
  },
  {
    label: "Kotlin",
    icon: <SiKotlin size={13} />,
    color: "from-purple-500/20 to-purple-950/0 border-purple-500/50 text-purple-300 shadow-[0_0_14px_rgba(127,82,255,0.25)]",
  },
  {
    label: "Go",
    icon: <SiGo size={13} />,
    color: "from-cyan-500/15 to-cyan-950/0 border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(0,173,216,0.2)]",
  },
  {
    label: "Docker",
    icon: <SiDocker size={13} />,
    color: "from-blue-500/15 to-blue-950/0 border-blue-500/40 text-blue-300 shadow-[0_0_10px_rgba(36,150,237,0.2)]",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-16 pb-16 md:pb-0 overflow-hidden">
      {/* Radial glow from center */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(109,179,63,0.07) 0%, transparent 70%)" }}
      />
      {/* Cockpit scan line */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(109,179,63,0.018) 3px, rgba(109,179,63,0.018) 4px)"
        }}
      />
      {/* Racing stripe accent — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 z-10" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Stack trinity badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="icon-card-3d icon-card-spring inline-flex items-center gap-3 px-4 py-2 rounded-md w-fit text-sm font-mono tracking-tight cursor-default"
            data-testid="badge-hero-specialty"
          >
            <SiSpring className="icon-spring-float text-green-400 text-lg shrink-0" />
            <span className="boot-shine font-bold">Java · Spring Boot · Kotlin</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight" data-testid="text-hero-name">
            Reinaldo<br />
            <span className="text-muted-foreground">Barreto</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-sans leading-relaxed" data-testid="text-hero-description">
            Software Engineer especializado em{" "}
            <span className="boot-shine font-bold font-mono">Spring Boot</span>{" "}
            e{" "}
            <span className="java-glow font-bold font-mono">Java</span>.{" "}
            Sistemas críticos para o setor público, microsserviços, OAuth2/Keycloak e DevOps.
          </p>

          {/* 3D Futuristic stack pills */}
          <div className="flex flex-wrap gap-2">
            {STACK.map(({ label, icon, color }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-gradient-to-br text-[11px] font-bold font-mono cursor-default transition-all ${color}`}
              >
                {icon}
                {label}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(109,179,63,0.35)] hover:shadow-[0_0_32px_rgba(109,179,63,0.5)]"
              data-testid="link-hero-projects"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-transparent border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-muted hover:border-primary/40 transition-all"
              data-testid="link-hero-contact"
            >
              Contato
            </motion.a>
            <motion.a
              href="/curriculo.html?auto=pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-all shadow-[0_0_12px_rgba(109,179,63,0.15)]"
              data-testid="link-hero-cv"
            >
              Currículo PDF
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Profile photo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-[0_0_50px_rgba(109,179,63,0.2)] z-10 ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
            <img
              src={fotoRei}
              alt="Reinaldo Barreto"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              data-testid="img-hero-profile"
            />
          </div>

          {/* Decorative rings — cockpit gauge style */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-dashed border-secondary/10 animate-[spin_80s_linear_infinite]" />

          {/* Floating Spring Boot orb */}
          <motion.div
            animate={{ y: [0, -8, 0], rotateY: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:top-0 md:-right-8 z-20 bg-card border border-primary/40 p-3 rounded-xl shadow-[0_0_24px_rgba(109,179,63,0.4)] backdrop-blur-sm"
          >
            <SiSpring className="text-3xl text-green-400 project-icon-orb" />
          </motion.div>

          {/* Floating Kotlin orb */}
          <motion.div
            animate={{ y: [0, 8, 0], rotateY: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 -left-4 md:-left-8 z-20 bg-card border border-purple-500/40 p-2.5 rounded-xl shadow-[0_0_20px_rgba(127,82,255,0.35)] backdrop-blur-sm"
          >
            <SiKotlin className="text-2xl text-purple-400 project-icon-orb-kotlin" />
          </motion.div>

          {/* Floating Java (coffee) orb */}
          <motion.div
            animate={{ y: [-4, 4, -4], rotateZ: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-2 md:right-4 z-20 bg-card border border-orange-500/40 p-2 rounded-xl shadow-[0_0_16px_rgba(237,139,0,0.3)] backdrop-blur-sm"
          >
            <JavaIcon size={22} className="text-orange-400 project-icon-orb-java" />
          </motion.div>

          {/* Status blip */}
          <div className="absolute bottom-4 right-1/4 md:right-0 bg-card border border-border p-2 rounded-md shadow-lg flex items-center gap-2 z-20">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs text-muted-foreground font-mono">sys.status: ONLINE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
