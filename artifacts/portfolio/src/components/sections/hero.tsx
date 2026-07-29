import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import tracksBg from "@/assets/tracks-bg.png";
import { Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background tracks */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${tracksBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-0" />

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-md w-fit text-sm font-mono tracking-tight shadow-[0_0_15px_rgba(200,50,50,0.1)]" data-testid="badge-hero-specialty">
            <Terminal size={14} />
            <span>Especialista Ruby on Rails em formação</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight" data-testid="text-hero-name">
            Reinaldo<br />
            <span className="text-muted-foreground">Barreto</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-sans leading-relaxed" data-testid="text-hero-description">
            Software Engineer focado em infraestrutura, DevOps e SRE. Construindo sistemas resilientes e em transição de stack para <span className="text-primary font-mono">Ruby on Rails</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a 
              href="#projects" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-mono text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(200,50,50,0.3)]"
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
              href="/curriculo.html"
              download="CV-Reinaldo-Barreto.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border border-primary/50 text-primary px-6 py-3 rounded-md font-mono text-sm font-semibold hover:bg-primary/10 transition-colors"
              data-testid="link-hero-cv"
            >
              ↓ Currículo
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-[0_0_40px_rgba(50,50,50,0.5)] z-10 ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
            <img 
              src={fotoRei} 
              alt="Reinaldo Barreto" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              data-testid="img-hero-profile"
            />
          </div>
          
          {/* Decorative ops rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-dashed border-muted-foreground/30 animate-[spin_60s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] rounded-full border border-muted-foreground/10 animate-[spin_40s_linear_infinite_reverse]" />
          
          {/* Status blip */}
          <div className="absolute bottom-4 right-1/4 md:right-0 bg-card border border-border p-2 rounded-md shadow-lg flex items-center gap-2 z-20">
            <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="text-xs text-muted-foreground font-mono">sys.status: ONLINE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
