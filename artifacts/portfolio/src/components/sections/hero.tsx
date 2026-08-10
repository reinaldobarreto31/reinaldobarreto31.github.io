import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import tracksBg from "@/assets/tracks-bg.png";
import { TrackLocomotive } from "@/components/hero/track-locomotive";
import { SiRuby, SiRubyonrails, SiPostgresql, SiDocker, SiGithub } from "react-icons/si";
import { Mail, ArrowDownRight } from "lucide-react";

const STACK = [
  { label: "Ruby", icon: <SiRuby size={13} />, tone: "tech-ruby" },
  { label: "Ruby on Rails", icon: <SiRubyonrails size={13} />, tone: "tech-rails" },
  { label: "PostgreSQL", icon: <SiPostgresql size={13} />, tone: "tech-postgres" },
  { label: "Docker", icon: <SiDocker size={13} />, tone: "tech-docker" },
];

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty("--travel-speed", "3.0");
    scene.style.setProperty("--travel-sway", "0");
    scene.style.setProperty("--travel-dive", "0");
    scene.style.setProperty("--travel-roll", "0");
    scene.style.setProperty("--travel-accent", "0.9");
  }, []);

  return <section id="hero" ref={sceneRef} className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-16 md:pb-0 overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none hero-aura" />

    <div className="track-cinema absolute inset-0 z-0">
      <video
        className="track-cinema-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        aria-hidden="true"
      >
        <source src="/rails.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="flex flex-col gap-6">
        <div className="rails-badge inline-flex items-center gap-3 px-4 py-2 rounded-full w-fit text-sm font-mono tracking-tight"><SiRubyonrails className="text-[#cc0000] text-lg shrink-0" /><span className="rails-shine font-bold">Ruby on Rails Developer</span></div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight" data-testid="text-hero-name">Reinaldo<br /><span className="text-muted-foreground">Barreto</span></h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed" data-testid="text-hero-description">Desenvolvedor <span className="text-primary font-bold font-mono">Ruby on Rails</span> focado em produtos web bem estruturados, APIs REST, bancos de dados e entregas que transformam ideias em aplicacoes confiaveis.</p>
        <div className="flex flex-wrap gap-2">{STACK.map(({ label, icon, tone }, i) => <motion.span key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + i * .08 }} whileHover={{ y: -3, scale: 1.04 }} className={`rails-pill ${tone} flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-bold font-mono`}>{icon}{label}</motion.span>)}</div>
        <div className="flex flex-wrap items-center gap-3 mt-2"><motion.a href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="rails-button px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2">Ver projetos <ArrowDownRight size={16} /></motion.a><motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:border-primary/60 hover:bg-primary/5 transition-all backdrop-blur-[2px]">Vamos conversar</motion.a><motion.a href="/curriculo.pdf" download="Curriculo_Reinaldo_Barreto.pdf" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="border border-primary/45 text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-all backdrop-blur-[2px]">Curriculo PDF</motion.a></div>
        <div className="flex items-center gap-4 mt-1"><a href="https://github.com/reinaldobarreto31" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><SiGithub size={21} /></a><a href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">in</a><a href="#contact" aria-label="Email" className="social-link"><Mail size={21} /></a></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="relative flex min-h-[25rem] items-center justify-center md:justify-end">
        <div className="profile-frame group relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10" tabIndex={0}>
          <img src={fotoRei} alt="Reinaldo Barreto" className="profile-photo w-full h-full object-cover object-center" data-testid="img-hero-profile" />
        </div>
        <motion.div animate={{ y: [0, -18, 4, -12, 0], x: [0, 8, -5, 10, 0], rotateY: [0, 28, -14, 30, 0], rotateZ: [-4, 10, -6, 8, -4], scale: [1, 1.12, 0.96, 1.08, 1] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="ruby-gem ruby-gem-large absolute top-0 right-0 md:right-2 z-20"><SiRuby className="text-5xl" /></motion.div>
        <motion.div animate={{ y: [0, 16, -6, 12, 0], x: [0, -10, 6, -8, 0], rotateY: [0, -22, 12, -26, 0], rotateZ: [3, -8, 14, -5, 3], scale: [1, 1.15, 0.94, 1.1, 1] }} transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut", delay: .8 }} className="ruby-gem ruby-gem-rails absolute bottom-4 left-0 md:left-2 z-20"><SiRubyonrails className="text-3xl" /></motion.div>
        <motion.div animate={{ y: [0, -14, 6, -8, 2, 0], x: [0, 6, -8, 4, -6, 0], rotateZ: [0, 18, -12, 22, -8, 0], scale: [1, 1.2, 0.92, 1.14, 0.98, 1] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: .2 }} className="ruby-gem ruby-gem-small absolute top-20 left-1 md:left-4 z-20"><SiRuby className="text-2xl" /></motion.div>
        <div className="absolute bottom-3 right-0 bg-card/90 border border-border px-3 py-2 rounded-md shadow-lg flex items-center gap-2 z-20 backdrop-blur-sm"><span className="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse" /><span className="text-xs text-muted-foreground font-mono">rails.status: ready</span></div>
      </motion.div>
    </div>
  </section>;
}
