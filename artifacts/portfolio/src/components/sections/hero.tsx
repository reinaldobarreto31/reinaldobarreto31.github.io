import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiSpring, SiKotlin } from "react-icons/si";
import { Coffee } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Green HUD gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
      {/* Cockpit scan line */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(109,179,63,0.018) 3px, rgba(109,179,63,0.018) 4px)"
        }}
      />
      {/* Racing stripe accent — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 z-10" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Stack trinity badge */}
          <div
            className="icon-card-3d icon-card-spring inline-flex items-center gap-3 px-4 py-2 rounded-md w-fit text-sm font-mono tracking-tight cursor-default"
            data-testid="badge-hero-specialty"
          >
            <SiSpring className="icon-spring-float text-green-400 text-lg shrink-0" />
            <span className="boot-shine font-bold">Java · Spring Boot · Kotlin</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight" data-testid="text-hero-name">
            Reinaldo<br />
            <span className="text-muted-foreground">Barreto</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-sans leading-relaxed" data-testid="text-hero-description">
            Software Engineer especializado em{" "}
            <span className="boot-shine font-bold font-mono">Spring Boot</span>{" "}
            e{" "}
            <span className="java-glow font-bold font-mono">Java</span>.
            Sistemas críticos para o setor público, microsserviços, OAuth2/Keycloak e DevOps.
          </p>

          {/* RPM-style tech indicators */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Java",        color: "border-orange-500/40 text-orange-400 bg-orange-950/20" },
              { label: "Spring Boot", color: "border-primary/40 text-primary bg-primary/10" },
              { label: "Kotlin",      color: "border-purple-500/40 text-purple-400 bg-purple-950/20" },
              { label: "Go",          color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/10" },
              { label: "Docker",      color: "border-blue-500/30 text-blue-400 bg-blue-950/10" },
            ].map(({ label, color }) => (
              <span key={label} className={`px-2.5 py-1 rounded border text-[11px] font-mono font-bold ${color}`}>
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-mono text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(109,179,63,0.3)]"
              data-testid="link-hero-projects"
            >
              /ver_projetos
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-border text-foreground px-6 py-3 rounded-md font-mono text-sm font-semibold hover:bg-muted transition-colors"
              data-testid="link-hero-contact"
            >
              /contato
            </a>
            <a
              href="/curriculo.html?auto=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border border-primary/50 text-primary px-6 py-3 rounded-md font-mono text-sm font-semibold hover:bg-primary/10 transition-colors shadow-[0_0_12px_rgba(109,179,63,0.15)]"
              data-testid="link-hero-cv"
            >
              ↓ Currículo PDF
            </a>
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
            <Coffee className="text-xl text-orange-400 project-icon-orb-java" />
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
