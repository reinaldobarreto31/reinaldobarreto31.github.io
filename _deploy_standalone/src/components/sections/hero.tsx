import { useRef, useState } from "react";
import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiGithub, SiSpringboot, SiKotlin, SiFlutter, SiPostgresql, SiDocker, SiSwift, SiDart, SiNodedotjs, SiTypescript } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbDeviceMobile, TbBrandReactNative } from "react-icons/tb";
import { Mail, ArrowDownRight, FileImage, FileDown, ExternalLink } from "lucide-react";
import { ResumeExporter, type ResumeExporterHandle } from "./resume-exporter";
import { toast } from "sonner";

const PRIMARY_MOBILE_STACK = [
  { label: "Kotlin 2.0", icon: <SiKotlin size={14} />, tone: "tech-kotlin" },
  { label: "Jetpack Compose", icon: <TbDeviceMobile size={15} />, tone: "tech-kotlin" },
  { label: "Kotlin Multiplatform (KMP)", icon: <SiKotlin size={14} />, tone: "tech-kotlin" },
  { label: "Coroutines & Flow", icon: <TbDeviceMobile size={14} />, tone: "tech-kotlin" },
  { label: "Room Database", icon: <TbDeviceMobile size={14} />, tone: "tech-kotlin" },
  { label: "Hilt / Koin DI", icon: <TbDeviceMobile size={14} />, tone: "tech-kotlin" },
];

const SECONDARY_BACKEND_STACK = [
  { label: "Java 21", icon: <DiJava size={16} />, tone: "tech-java" },
  { label: "Spring Boot 3", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "Spring Security · JWT", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "Spring Data JPA", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "PostgreSQL", icon: <SiPostgresql size={14} />, tone: "tech-postgres" },
  { label: "Docker & REST APIs", icon: <SiDocker size={14} />, tone: "tech-docker" },
];

const TERTIARY_NODE_STACK = [
  { label: "Node.js", icon: <SiNodedotjs size={14} />, tone: "tech-node" },
  { label: "Express / NestJS", icon: <SiNodedotjs size={14} />, tone: "tech-node" },
  { label: "TypeScript", icon: <SiTypescript size={14} />, tone: "tech-ts" },
  { label: "REST APIs", icon: <TbDeviceMobile size={14} />, tone: "tech-node" },
];

const COMPLEMENTARY_STACK = [
  { label: "Flutter (Intermediário)", icon: <SiFlutter size={14} />, tone: "tech-react" },
  { label: "Dart", icon: <SiDart size={14} />, tone: "tech-react" },
  { label: "React Native (Básico)", icon: <TbBrandReactNative size={15} />, tone: "tech-react" },
  { label: "Swift / iOS (em aprendizado; sem Mac/Xcode)", icon: <SiSwift size={14} />, tone: "tech-actions" },
  { label: "PHP (Noções básicas)", icon: <span style={{ fontSize: 10, fontWeight: 700 }}>PHP</span>, tone: "tech-php" },
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
        <div className="absolute top-[-10%] left-[15%] w-[480px] h-[480px] rounded-full bg-[#7f52ff]/18 blur-[120px] dark:bg-[#7f52ff]/22" />
        <div className="absolute top-[35%] right-[10%] w-[420px] h-[420px] rounded-full bg-[#02569b]/15 blur-[120px] dark:bg-[#02569b]/20" />
        <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-[#6db33f]/12 blur-[130px] dark:bg-[#6db33f]/15" />
        
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `radial-gradient(#7f52ff 1px, transparent 1px)`,
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
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full w-fit text-xs font-mono tracking-tight bg-[#7f52ff]/15 border border-[#7f52ff]/40 text-[#a78bfa] shadow-[0_0_20px_rgba(127,82,255,0.25)] backdrop-blur-md">
            <SiKotlin className="text-[#a78bfa] text-base shrink-0" />
            <span className="font-semibold text-foreground/90">
              1º Mobile Android (Kotlin &amp; KMP) · 2º Java &amp; Spring Boot 3 · 3º Node.js
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-name">
            <span className="text-foreground">Reinaldo</span><br />
            <span className="text-[#a78bfa] font-medium">Barreto</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans" data-testid="text-hero-description">
            Desenvolvedor focado em <span className="text-[#a78bfa] font-bold">Mobile Android Nativo (Kotlin, Jetpack Compose, KMP)</span>, com backend corporativo em <span className="text-[#6db33f] font-semibold">Java 21 &amp; Spring Boot 3</span> e APIs em <span className="text-[#52cc52] font-semibold">Node.js</span>. Experiência complementar em <span className="text-[#38bdf8] font-semibold">Flutter (Intermediário)</span>, <span className="text-[#61dafb] font-semibold">React Native (Básico)</span>, noções em <span className="text-[#f97316] font-semibold">iOS Nativo (Swift)</span> e em PHP para sistemas legados.
          </p>
          
          {/* Stack Tiers Badges */}
          <div className="flex flex-col gap-2.5 pt-1">
            {/* 1º Foco: Mobile Nativo */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#a78bfa] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7f52ff]" /> 1º Foco Principal · Mobile Android Nativo &amp; KMP
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PRIMARY_MOBILE_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-card border-[#7f52ff]/35 text-foreground shadow-sm hover:border-[#7f52ff]/70 transition-colors"
                  >
                    <span className="text-[#a78bfa]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 2º Foco: Backend Java & Spring Boot */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#6db33f] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6db33f]" /> 2º Foco Backend · Java 21 &amp; Spring Boot 3
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SECONDARY_BACKEND_STACK.map(({ label, icon }) => (
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

            {/* 3º Foco: Node.js */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#52cc52] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#339933]" /> 3º Foco Backend · Node.js &amp; TypeScript
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TERTIARY_NODE_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-card border-[#339933]/35 text-foreground shadow-sm hover:border-[#339933]/70 transition-colors"
                  >
                    <span className="text-[#52cc52]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Complementares Mobile */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#38bdf8] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /> Complementares · Flutter (Intermediário) · React Native (Básico) · Swift/iOS em aprendizado (sem Mac/Xcode) · PHP (Noções)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COMPLEMENTARY_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-card border-[#38bdf8]/35 text-foreground shadow-sm hover:border-[#38bdf8]/70 transition-colors"
                  >
                    <span className="text-[#38bdf8]">{icon}</span>
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
              className="bg-[#7f52ff] hover:bg-[#6333ea] text-white px-5 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 shadow-md shadow-[#7f52ff]/25 transition-all"
            >
              Ver Projetos Mobile <ArrowDownRight size={16} />
            </motion.a>

            <motion.a 
              href="/curriculo.html" 
              target="_blank" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: .97 }} 
              className="border border-[#7f52ff]/60 text-foreground hover:bg-[#7f52ff]/10 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <FileDown size={15} className="text-[#a78bfa]" />
              Ver Currículo em PDF
            </motion.a>

            <motion.a
              href="#admin"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="border border-border text-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:border-[#7f52ff]/60 hover:bg-[#7f52ff]/10 transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <ExternalLink size={15} />
              Área de Gestão
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
            <a href="https://github.com/reinaldobarreto31" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#a78bfa] transition-colors">
              <SiGithub size={21} />
            </a>
            <a href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#38bdf8] font-bold text-lg transition-colors">
              in
            </a>
            <a href="mailto:reinaldobarreto31@gmail.com" aria-label="Email" className="hover:text-[#a78bfa] transition-colors">
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
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#7f52ff]/30 to-[#02569b]/25 blur-[60px] pointer-events-none" />

          {/* Profile Photo: Full Color, No Grayscale! */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-[#7f52ff] via-[#02569b] to-[#6db33f] shadow-[0_0_40px_rgba(127,82,255,0.35)] z-10 transition-transform duration-300 hover:scale-[1.02]">
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
          
          {/* Floating Kotlin / Android Badge */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 right-2 md:right-4 z-20 flex items-center gap-2 bg-card/90 border border-[#7f52ff]/70 rounded-2xl px-3.5 py-2.5 shadow-[0_0_24px_rgba(127,82,255,0.35)] backdrop-blur-md"
          >
            <SiKotlin className="text-3xl text-[#a78bfa]" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">Kotlin &amp; KMP</span>
              <span className="text-[10px] font-mono text-muted-foreground">Android Nativo</span>
            </div>
          </motion.div>

          {/* Floating Node.js Badge */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-4 left-0 md:left-2 z-20 flex items-center gap-2.5 bg-card/90 border border-[#339933]/60 rounded-2xl px-3.5 py-2.5 shadow-[0_0_24px_rgba(51,153,51,0.3)] backdrop-blur-md"
          >
            <div className="flex items-center gap-1">
              <SiNodedotjs className="text-2xl text-[#52cc52]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">Node.js &amp; TypeScript</span>
              <span className="text-[10px] font-mono text-muted-foreground">3º Foco Backend</span>
            </div>
          </motion.div>

          {/* Floating Java & Spring Boot Badge */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-28 left-[-10px] md:left-[-20px] z-20 flex items-center gap-2 bg-card/90 border border-[#6db33f]/60 rounded-2xl px-3 py-2 shadow-[0_0_20px_rgba(109,179,63,0.25)] backdrop-blur-md"
          >
            <SiSpringboot className="text-xl text-[#6db33f]" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">Spring Boot 3</span>
              <span className="text-[10px] font-mono text-muted-foreground">Java Enterprise</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ResumeExporter ref={resumeRef} />
    </section>
  );
}
