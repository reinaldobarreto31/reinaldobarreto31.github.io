import { useRef, useState } from "react";
import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiGithub, SiDotnet, SiSpringboot, SiNodedotjs, SiTypescript } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandCSharp, TbBrandWindows, TbBrandAzure, TbDatabase } from "react-icons/tb";
import { Mail, ArrowDownRight, FileImage, FileDown, ExternalLink } from "lucide-react";
import { ResumeExporter, type ResumeExporterHandle } from "./resume-exporter";
import { toast } from "sonner";

const PRIMARY_MICROSOFT_STACK = [
  { label: "C#", icon: <TbBrandCSharp size={15} />, tone: "tech-csharp" },
  { label: ".NET 8", icon: <SiDotnet size={14} />, tone: "tech-dotnet" },
  { label: "ASP.NET Core", icon: <SiDotnet size={14} />, tone: "tech-aspnet" },
  { label: "Desktop (WPF/WinForms)", icon: <TbBrandWindows size={14} />, tone: "tech-csharp" },
  { label: "VB6 / VB.NET", icon: <TbBrandWindows size={14} />, tone: "tech-vb" },
  { label: "SQL Server", icon: <TbDatabase size={14} />, tone: "tech-sqlserver" },
  { label: "Windows 11 / N3", icon: <TbBrandWindows size={14} />, tone: "tech-windows" },
  { label: "Azure Cloud", icon: <TbBrandAzure size={14} />, tone: "tech-azure" },
];

const SECONDARY_JAVA_STACK = [
  { label: "Java 17+", icon: <DiJava size={16} />, tone: "tech-java" },
  { label: "Spring Boot 3", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
  { label: "Spring Data JPA", icon: <SiSpringboot size={14} />, tone: "tech-spring" },
];

const TERTIARY_NODE_STACK = [
  { label: "Node.js", icon: <SiNodedotjs size={14} />, tone: "tech-node" },
  { label: "TypeScript", icon: <SiTypescript size={14} />, tone: "tech-ts" },
  { label: "REST APIs", icon: <SiNodedotjs size={14} />, tone: "tech-node" },
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
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 md:pb-12 overflow-hidden bg-[#080d1a]">
      {/* Microsoft Fluent / Windows Mica Ambient Background (NO TRAIN/RAILWAY) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dark Slate Base */}
        <div className="absolute inset-0 bg-[#080d1a] bg-gradient-to-b from-[#060a14] via-[#091122] to-[#060a14]" />

        {/* Windows 11 Fluent Bloom Aurora Orbs */}
        <div 
          className="absolute -top-32 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#0078d4]/25 via-[#00a4ef]/12 to-transparent blur-[140px] pointer-events-none animate-pulse" 
          style={{ animationDuration: "8s" }} 
        />
        <div 
          className="absolute top-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#512bd4]/22 via-[#0078d4]/15 to-transparent blur-[130px] pointer-events-none animate-pulse" 
          style={{ animationDuration: "11s" }} 
        />
        <div 
          className="absolute -bottom-40 left-10 w-[700px] h-[500px] rounded-full bg-gradient-to-tr from-[#00a4ef]/16 via-[#0078d4]/10 to-transparent blur-[150px] pointer-events-none" 
        />

        {/* Fluent Subtle Micro Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(rgba(0,120,212,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,164,239,0.8) 1px, transparent 1px)`,
            backgroundSize: "48px 48px"
          }}
        />

        {/* Subtle Radial Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: .65 }} 
          className="flex flex-col gap-5"
        >
          {/* Microsoft Fluent Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full w-fit text-xs font-mono tracking-tight bg-[#0078d4]/15 border border-[#0078d4]/40 text-[#60a5fa] shadow-[0_0_20px_rgba(0,120,212,0.25)] backdrop-blur-md">
            <SiDotnet className="text-[#00a4ef] text-lg shrink-0" />
            <span className="font-semibold text-slate-200">
              1º Microsoft .NET (C#) · 2º Java Spring · 3º Node.js
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-name">
            <span className="text-white">Reinaldo</span><br />
            <span className="text-slate-400 font-medium">Barreto</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-sans" data-testid="text-hero-description">
            Desenvolvedor Full-Stack &amp; Desktop com <span className="text-[#00a4ef] font-bold">foco principal no ecossistema Microsoft</span> (.NET 8, C#, ASP.NET Core, Desktop WPF/WinForms, VB6/VB.NET, SQL Server e Infraestrutura Windows 11/Server N3), sólida atuação em <span className="text-[#60a5fa] font-semibold">Java 17+ &amp; Spring Boot 3</span> (2º Pilar) e <span className="text-[#34d399] font-semibold">Node.js &amp; TypeScript</span> (3º Pilar).
          </p>
          
          {/* Stack Tiers Badges */}
          <div className="flex flex-col gap-2.5 pt-1">
            {/* 1º Foco: Microsoft .NET */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00a4ef] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a4ef]" /> 1º Stack Principal · Microsoft .NET &amp; C#
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PRIMARY_MICROSOFT_STACK.map(({ label, icon, tone }) => (
                  <span
                    key={label}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-[#0f172a]/80 border-[#0078d4]/35 text-slate-200 shadow-sm hover:border-[#0078d4]/70 transition-colors`}
                  >
                    <span className="text-[#00a4ef]">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 2º Foco: Java & Spring */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> 2º Stack Secundária · Java &amp; Spring Boot
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SECONDARY_JAVA_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-[#0f172a]/80 border-amber-500/35 text-slate-200 shadow-sm hover:border-amber-500/70 transition-colors"
                  >
                    <span className="text-amber-400">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 3º Foco: Node.js & TypeScript */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 3º Stack Complementar · Node.js &amp; Web
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TERTIARY_NODE_STACK.map(({ label, icon }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium font-mono bg-[#0f172a]/80 border-emerald-500/35 text-slate-200 shadow-sm hover:border-emerald-500/70 transition-colors"
                  >
                    <span className="text-emerald-400">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="bg-[#0078d4] hover:bg-[#106ebe] text-white px-5 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 shadow-[0_4px_14px_rgba(0,120,212,0.4)] transition-all"
            >
              Ver Projetos <ArrowDownRight size={16} />
            </motion.a>
            
            <motion.a
              href="/curriculo.pdf"
              download="Curriculo_Reinaldo_Barreto.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="border border-[#0078d4]/60 text-[#60a5fa] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0078d4]/15 transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <FileDown size={15} />
              Baixar Currículo (PDF A4)
            </motion.a>

            <motion.a
              href="/curriculo.html"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="border border-slate-700 text-slate-200 px-4 py-2.5 rounded-lg font-semibold text-sm hover:border-[#0078d4]/60 hover:bg-[#0078d4]/10 transition-all backdrop-blur-md inline-flex items-center gap-2"
            >
              <ExternalLink size={15} />
              Currículo HTML (A4)
            </motion.a>

            <motion.button
              onClick={handleExportImage}
              disabled={exportingImg}
              whileHover={{ scale: exportingImg ? 1 : 1.03 }}
              whileTap={{ scale: exportingImg ? 1 : 0.97 }}
              className="border border-[#512bd4]/60 text-[#c4b5fd] px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#512bd4]/20 transition-all backdrop-blur-md inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FileImage size={15} className={exportingImg ? "animate-pulse" : ""} />
              {exportingImg ? "Gerando..." : "Exportar PNG"}
            </motion.button>
          </div>
          
          <div className="flex items-center gap-4 mt-1 text-slate-400">
            <a href="https://github.com/reinaldobarreto31" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#00a4ef] transition-colors">
              <SiGithub size={21} />
            </a>
            <a href="https://www.linkedin.com/in/reinaldo-barreto-da-silva-62215b22b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0078d4] font-bold text-lg transition-colors">
              in
            </a>
            <a href="mailto:reinaldobarretosilva@gmail.com" aria-label="Email" className="hover:text-[#00a4ef] transition-colors">
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        {/* Profile Column with Fluent Glass Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: .93 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: .8, delay: .15 }} 
          className="relative flex min-h-[25rem] items-center justify-center md:justify-end"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#0078d4]/30 to-[#512bd4]/25 blur-[60px] pointer-events-none" />

          {/* Profile Photo with Microsoft Fluent Glow Border */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-[#0078d4] via-[#00a4ef] to-[#512bd4] shadow-[0_0_45px_rgba(0,120,212,0.45)] z-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0b1329]">
              <img 
                src={fotoRei} 
                alt="Reinaldo Barreto" 
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500" 
                data-testid="img-hero-profile" 
              />
            </div>
          </div>
          
          {/* Floating Microsoft .NET Badge */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 right-2 md:right-4 z-20 flex items-center gap-2 bg-[#0c162d]/90 border border-[#0078d4]/70 rounded-2xl px-3.5 py-2.5 shadow-[0_0_24px_rgba(0,120,212,0.5)] backdrop-blur-md"
          >
            <SiDotnet className="text-3xl text-[#00a4ef]" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">1º Stack</span>
              <span className="text-xs font-mono font-bold text-white">.NET 8 &amp; C#</span>
            </div>
          </motion.div>
          
          {/* Floating Java & Spring Badge */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: .6 }}
            className="absolute bottom-6 left-0 md:left-2 z-20 flex items-center gap-2 bg-[#0c162d]/90 border border-amber-500/60 rounded-2xl px-3 py-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] backdrop-blur-md"
          >
            <DiJava className="text-2xl text-amber-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">2º Stack</span>
              <span className="text-xs font-mono font-bold text-white">Java Spring</span>
            </div>
          </motion.div>
          
          {/* Floating Node.js Badge */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
            transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: .3 }}
            className="absolute top-24 left-0 md:left-4 z-20 flex items-center gap-2 bg-[#0c162d]/90 border border-emerald-500/60 rounded-2xl px-3 py-2 shadow-[0_0_20px_rgba(16,185,129,0.35)] backdrop-blur-md"
          >
            <SiNodedotjs className="text-xl text-emerald-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">3º Stack</span>
              <span className="text-xs font-mono font-bold text-white">Node.js</span>
            </div>
          </motion.div>
          
          {/* Windows Status Pill */}
          <div className="absolute bottom-1 right-2 md:right-4 bg-[#0a1224]/95 border border-slate-700/80 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 z-20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00a4ef] animate-pulse" />
            <span className="text-[11px] text-slate-300 font-mono">Windows 11 &amp; Server N3 · Ready</span>
          </div>
        </motion.div>
      </div>
      
      <ResumeExporter ref={resumeRef} />
    </section>
  );
}
