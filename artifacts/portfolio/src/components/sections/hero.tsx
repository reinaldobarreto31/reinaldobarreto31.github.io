import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiPostgresql, SiDocker, SiGithub, SiDotnet } from "react-icons/si";
import { TbBrandCSharp, TbBrandWindows, TbBrandAzure, TbDatabase } from "react-icons/tb";
import { Mail, ArrowDownRight, FileImage, FileDown, ExternalLink } from "lucide-react";
import { ResumeExporter, type ResumeExporterHandle } from "./resume-exporter";
import { toast } from "sonner";

const STACK = [
  { label: "C#", icon: <TbBrandCSharp size={16} />, tone: "tech-csharp" },
  { label: ".NET 8 / 9", icon: <SiDotnet size={15} />, tone: "tech-dotnet" },
  { label: "ASP.NET Core", icon: <SiDotnet size={15} />, tone: "tech-aspnet" },
  { label: "Desktop (WPF/WinForms)", icon: <TbBrandWindows size={14} />, tone: "tech-csharp" },
  { label: "VB6 / VB.NET", icon: <TbBrandWindows size={14} />, tone: "tech-vb" },
  { label: "SQL Server", icon: <TbDatabase size={15} />, tone: "tech-sqlserver" },
  { label: "Windows 11 / Suporte N3", icon: <TbBrandWindows size={14} />, tone: "tech-windows" },
  { label: "Azure Cloud", icon: <TbBrandAzure size={15} />, tone: "tech-azure" },
];

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
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

  useEffect(() => {
    const scene = sceneRef.current;
    const video = videoRef.current;
    if (scene) {
      scene.style.setProperty("--travel-speed", "2.0");
      scene.style.setProperty("--travel-sway", "0");
      scene.style.setProperty("--travel-dive", "0");
      scene.style.setProperty("--travel-roll", "0");
      scene.style.setProperty("--travel-accent", "0.9");
    }
    if (video) {
      video.playbackRate = 2.0;
      const playPromise = video.play();
      if (playPromise && typeof (playPromise as Promise<void>).catch === "function") {
        (playPromise as Promise<void>).catch(() => {});
      }
    }
  }, []);

  return (
    <section id="hero" ref={sceneRef} className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-16 md:pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none hero-aura" />

      <div className="track-cinema absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="track-cinema-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        >
          <source src="/rails.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }} className="flex flex-col gap-6">
          <div className="rails-badge inline-flex items-center gap-3 px-4 py-2 rounded-full w-fit text-sm font-mono tracking-tight">
            <SiDotnet className="text-[#0078d4] text-xl shrink-0" />
            <span className="rails-shine font-bold">C# · .NET · ASP.NET Core · Desktop &amp; Web</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight" data-testid="text-hero-name">
            Reinaldo<br /><span className="text-muted-foreground">Barreto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed" data-testid="text-hero-description">
            Desenvolvedor <span className="text-primary font-bold font-mono">.NET / C#</span> especializado em <span className="text-[#0089d6] font-bold font-mono">ASP.NET Core</span>, sistemas corporativos <span className="text-[#00a4ef] font-bold font-mono">Desktop (WPF, WinForms, VB6 &amp; VB.NET)</span>, <span className="text-[#512bd4] font-bold font-mono">Mobile PWA / .NET MAUI</span> e <span className="text-[#0078d4] font-bold font-mono">Infraestrutura Windows 11 &amp; Servidores</span>. Engenharia de software, modernização de legados e bancos relacionais SQL Server.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {STACK.map(({ label, icon, tone }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .35 + i * .08 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className={`rails-pill ${tone} flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-bold font-mono`}
              >
                {icon}{label}
              </motion.span>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="rails-button px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
            >
              Ver projetos .NET <ArrowDownRight size={16} />
            </motion.a>
            
            <motion.a
              href="/curriculo.pdf"
              download="Curriculo_Reinaldo_Barreto.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="border border-primary/60 text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-all backdrop-blur-[2px] inline-flex items-center gap-2"
            >
              <FileDown size={15} />
              Baixar Currículo (PDF)
            </motion.a>

            <motion.a
              href="/curriculo.html"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: .97 }}
              className="border border-border text-foreground px-5 py-3 rounded-lg font-semibold text-sm hover:border-primary/60 hover:bg-primary/5 transition-all backdrop-blur-[2px] inline-flex items-center gap-2"
            >
              <ExternalLink size={15} />
              Currículo HTML (A4)
            </motion.a>

            <motion.button
              onClick={handleExportImage}
              disabled={exportingImg}
              whileHover={{ scale: exportingImg ? 1 : 1.03 }}
              whileTap={{ scale: exportingImg ? 1 : 0.97 }}
              className="border border-[#512bd4]/60 text-[#a78bfa] px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#512bd4]/15 transition-all backdrop-blur-[2px] inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FileImage size={15} className={exportingImg ? "animate-pulse" : ""} />
              {exportingImg ? "Gerando imagem..." : "Exportar PNG"}
            </motion.button>
          </div>
          
          <div className="flex items-center gap-4 mt-1">
            <a href="https://github.com/reinaldobarreto31" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <SiGithub size={21} />
            </a>
            <a href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              in
            </a>
            <a href="#contact" aria-label="Email" className="social-link">
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="relative flex min-h-[25rem] items-center justify-center md:justify-end">
          <div className="profile-frame group relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden z-10" tabIndex={0}>
            <img src={fotoRei} alt="Reinaldo Barreto" className="profile-photo w-full h-full object-cover object-center" data-testid="img-hero-profile" />
          </div>
          
          {/* Floating Microsoft Tech badges */}
          <motion.div
            animate={{ y: [0, -18, 4, -12, 0], x: [0, 8, -5, 10, 0], rotateY: [0, 28, -14, 30, 0], rotateZ: [-4, 10, -6, 8, -4], scale: [1, 1.12, 0.96, 1.08, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="ruby-gem ruby-gem-large absolute top-0 right-0 md:right-2 z-20 flex items-center justify-center bg-[#0078d4]/20 border border-[#0078d4]/60 rounded-2xl p-3 shadow-[0_0_24px_rgba(0,120,212,0.4)]"
          >
            <SiDotnet className="text-5xl text-[#0078d4]" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 16, -6, 12, 0], x: [0, -10, 6, -8, 0], rotateY: [0, -22, 12, -26, 0], rotateZ: [3, -8, 14, -5, 3], scale: [1, 1.15, 0.94, 1.1, 1] }}
            transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut", delay: .8 }}
            className="ruby-gem ruby-gem-rails absolute bottom-4 left-0 md:left-2 z-20 flex items-center justify-center bg-[#00a4ef]/20 border border-[#00a4ef]/60 rounded-2xl p-3 shadow-[0_0_24px_rgba(0,164,239,0.4)]"
          >
            <TbBrandWindows className="text-3xl text-[#00a4ef]" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -14, 6, -8, 2, 0], x: [0, 6, -8, 4, -6, 0], rotateZ: [0, 18, -12, 22, -8, 0], scale: [1, 1.2, 0.92, 1.14, 0.98, 1] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: .2 }}
            className="ruby-gem ruby-gem-small absolute top-20 left-1 md:left-4 z-20 flex items-center justify-center bg-[#512bd4]/20 border border-[#512bd4]/60 rounded-2xl p-2.5 shadow-[0_0_20px_rgba(81,43,212,0.4)]"
          >
            <TbBrandAzure className="text-2xl text-[#0089d6]" />
          </motion.div>
          
          <div className="absolute bottom-3 right-0 bg-card/90 border border-border px-3 py-2 rounded-md shadow-lg flex items-center gap-2 z-20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00a4ef] animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">dev.status: ready · C# .NET + Desktop + ASP.NET + Windows</span>
          </div>
        </motion.div>
      </div>
      
      <ResumeExporter ref={resumeRef} />
    </section>
  );
}
