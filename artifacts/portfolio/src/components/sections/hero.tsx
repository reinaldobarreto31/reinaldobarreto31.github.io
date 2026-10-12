import { useRef, useState } from "react";
import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiGithub, SiSpringboot, SiPhp, SiLaravel, SiNodedotjs, SiTypescript, SiPostgresql, SiDocker } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbDatabase } from "react-icons/tb";
import { Mail, ArrowDownRight, FileImage, FileDown, ExternalLink } from "lucide-react";
import { ResumeExporter, type ResumeExporterHandle } from "./resume-exporter";
import { toast } from "sonner";

const PRIMARY_JAVA_STACK = [
  { label: "Java 21", icon: <DiJava size={16} />, tone: "tech-java" },
  { label: "Spring Boot 3", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "Spring Data JPA", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "Spring Security", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "PostgreSQL", icon: <SiPostgresql size={14} />, tone: "tech-postgres" },
  { label: "Docker", icon: <SiDocker size={14} />, tone: "tech-docker" },
];



export function HeroSection() {
  const resumeRef = useRef<ResumeExporterHandle | null>(null);
  const [exportingImg, setExportingImg] = useState(false);

  const handleExportImage = async () => {
    if (exportingImg) return;
    setExportingImg(true);
    toast("Gerando imagem do currículo...", {
      description: "Renderizando em PNG único em alta definição. Aguarde 2-4 segundos.",
      duration: 2800,
    });
    try {
      await resumeRef.current?.exportAsImage();
      toast.success("Currículo em PNG (imagem única) baixado com sucesso!", {
        description: "Arquivo: Curriculo_Reinaldo_Barreto_da_Silva.png",
        duration: 4200,
      });
    } catch (err) {
      console.error(err);
      toast.error("Não foi possível gerar a imagem.");
    } finally {
      setExportingImg(false);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background text-foreground transition-colors"
    >
      {/* Dynamic Aurora Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[15%] w-[480px] h-[480px] rounded-full bg-[#6db33f]/15 blur-[120px] dark:bg-[#6db33f]/18" />
        <div className="absolute top-[35%] right-[10%] w-[420px] h-[420px] rounded-full bg-[#007396]/15 blur-[120px] dark:bg-[#007396]/20" />
        <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-[#777bb4]/12 blur-[130px] dark:bg-[#777bb4]/15" />
        
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `radial-gradient(#6db33f 1px, transparent 1px)`,
            backgroundSize: "28px 28px"
          }} 
        />
      </div>

      <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: .65 }} 
          className="flex flex-col gap-5"
        >
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full w-fit text-xs font-mono tracking-tight bg-[#6db33f]/15 border border-[#6db33f]/40 text-[#6db33f] shadow-[0_0_20px_rgba(109,179,63,0.2)] backdrop-blur-md">
            <SiSpringboot className="text-[#6db33f] text-base shrink-0" />
            <span className="font-semibold text-foreground/90">
              1º Java &amp; Spring Boot · 2º PHP &amp; Laravel · 3º Node.js &amp; TypeScript
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-name">
            <span className="text-foreground">Reinaldo</span><br />
            <span className="text-primary font-medium">Barreto</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans" data-testid="text-hero-description">
            Engenheiro de Software &amp; Desenvolvedor Backend com <span className="text-[#6db33f] font-bold">foco principal em Java &amp; Spring Boot 3</span> (APIs RESTful, Spring Security, JPA/Hibernate, PostgreSQL), <span className="text-[#ff2d20] font-semibold">PHP 8+ &amp; Laravel 11</span> (2º Pilar com vivência prática corporativa e freelance) e <span className="text-[#3178c6] font-semibold">Node.js &amp; TypeScript</span> (3º Pilar full-stack).
          </p>
          
          {/* Stack Tiers Badges */}
          <div className="flex flex-col gap-2.5 pt-1">
            {/* 1º Foco: Java & Spring */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6db33f] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6db33f]" /> 1º Stack Principal · Java Enterprise &amp; Spring Boot 3
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PRIMARY_JAVA_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-card border-[#6db33f]/35 text-foreground shadow-sm hover:border-[#6db33f]/70 transition-colors"
                  >
                    <span className="text-[#6db33f]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 2º Foco: PHP & Laravel */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#ff2d20] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d20]" /> 2º Stack Secundária · PHP 8+ &amp; Laravel 11
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SECONDARY_PHP_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-card border-[#ff2d20]/35 text-foreground shadow-sm hover:border-[#ff2d20]/70 transition-colors"
                  >
                    <span className="text-[#ff2d20]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 3º Foco: Node.js & TypeScript */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3178c6] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3178c6]" /> 3º Stack Complementar · Node.js &amp; TypeScript
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TERTIARY_NODE_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-card border-[#3178c6]/35 text-foreground shadow-sm hover:border-[#3178c6]/70 transition-colors"
                  >
                    <span className="text-[#3178c6]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: .97 }} 
              className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white px-5 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 shadow-md shadow-[#2e7d32]/25 transition-all"
            >
              Ver Projetos <ArrowDownRight size={16} />
            </motion.a>

            <motion.a 
              href="/curriculo.pdf" 
              download="Curriculo_Reinaldo_Barreto.pdf" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: .97 }} 
              className="border border-[#6db33f]/60 text-foreground hover:bg-[#6db33f]/10 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <FileDown size={15} className="text-[#6db33f]" />
              Baixar Currículo (PDF 2 Pág)
            </motion.a>

            <motion.a
              href="/curriculo.html"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="border border-border text-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:border-[#6db33f]/60 hover:bg-[#6db33f]/10 transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <ExternalLink size={15} />
              Currículo Web
            </motion.a>

            <motion.button
              onClick={handleExportImage}
              disabled={exportingImg}
              whileHover={{ scale: exportingImg ? 1 : 1.03 }}
              whileTap={{ scale: exportingImg ? 1 : 0.97 }}
              className="border border-[#777bb4]/60 text-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#777bb4]/20 transition-all backdrop-blur-md inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FileImage size={15} className={`text-[#777bb4] ${exportingImg ? "animate-pulse" : ""}`} />
              {exportingImg ? "Gerando..." : "Exportar PNG"}
            </motion.button>
          </div>
          
          <div className="flex items-center gap-4 mt-1 text-muted-foreground">
            <a href="https://github.com/reinaldobarreto31" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#6db33f] transition-colors">
              <SiGithub size={21} />
            </a>
            <a href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#007396] font-bold text-lg transition-colors">
              in
            </a>
            <a href="mailto:reinaldobarreto31@gmail.com" aria-label="Email" className="hover:text-[#6db33f] transition-colors">
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        {/* Profile Column with FULL NATURAL COLOR Photo and Glowing Aura */}
        <motion.div 
          initial={{ opacity: 0, scale: .93 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: .8, delay: .15 }} 
          className="relative flex min-h-[25rem] items-center justify-center md:justify-end"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#6db33f]/30 to-[#007396]/25 blur-[60px] pointer-events-none" />

          {/* Profile Photo: Full Color, No Grayscale! */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-[#6db33f] via-[#007396] to-[#777bb4] shadow-[0_0_40px_rgba(109,179,63,0.35)] z-10 transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img 
                src={fotoRei} 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/foto-reinaldo.png";
                }}
                alt="Reinaldo Barreto" 
                className="w-full h-full object-cover object-center transition-all duration-300" 
                data-testid="img-hero-profile" 
              />
            </div>
          </div>
          
          {/* Floating Spring Boot Badge */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 right-2 md:right-4 z-20 flex items-center gap-2 bg-card/90 border border-[#6db33f]/70 rounded-2xl px-3.5 py-2.5 shadow-[0_0_24px_rgba(109,179,63,0.35)] backdrop-blur-md"
          >
            <SiSpringboot className="text-3xl text-[#6db33f]" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">Spring Boot 3</span>
              <span className="text-[10px] font-mono text-muted-foreground">Java Enterprise</span>
            </div>
          </motion.div>

          {/* Floating PHP / Laravel Badge */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-4 left-0 md:left-2 z-20 flex items-center gap-2.5 bg-card/90 border border-[#ff2d20]/60 rounded-2xl px-3.5 py-2.5 shadow-[0_0_24px_rgba(255,45,32,0.25)] backdrop-blur-md"
          >
            <div className="flex items-center gap-1">
              <SiPhp className="text-2xl text-[#777bb4]" />
              <SiLaravel className="text-xl text-[#ff2d20]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">PHP 8 &amp; Laravel 11</span>
              <span className="text-[10px] font-mono text-muted-foreground">Eloquent &amp; APIs</span>
            </div>
          </motion.div>

          {/* Floating Node.js & TypeScript Badge */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-28 left-[-10px] md:left-[-20px] z-20 flex items-center gap-2 bg-card/90 border border-[#3178c6]/60 rounded-2xl px-3 py-2 shadow-[0_0_20px_rgba(49,120,198,0.25)] backdrop-blur-md"
          >
            <SiTypescript className="text-xl text-[#3178c6]" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">Node &amp; TypeScript</span>
              <span className="text-[10px] font-mono text-muted-foreground">Full-Stack Hub</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ResumeExporter ref={resumeRef} />
    </section>
  );
}
