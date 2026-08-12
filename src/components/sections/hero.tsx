import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import { SiPostgresql, SiDocker, SiGithub, SiSpringboot, SiKotlin, SiFlutter, SiQuarkus, SiGo } from "react-icons/si";
import { FaJava as SiJava } from "react-icons/fa6";
import { Mail, ArrowDownRight, FileImage, FileDown, Code2 } from "lucide-react";
import { ResumeExporter, type ResumeExporterHandle } from "./resume-exporter";
import { GithubReadmeModal } from "./github-readme-modal";
import { TechStackAnimation } from "../hero/tech-stack-animation";
import { toast } from "sonner";

const STACK = [
  { label: "Java 8+ a 21", icon: <SiJava size={13} />, tone: "tech-java" },
  { label: "Spring Boot 3", icon: <SiSpringboot size={13} />, tone: "tech-spring" },
  { label: "Quarkus", icon: <SiQuarkus size={13} />, tone: "tech-quarkus" },
  { label: "Kotlin (Android/Web)", icon: <SiKotlin size={13} />, tone: "tech-kotlin" },
  { label: "Go / Golang", icon: <SiGo size={13} />, tone: "tech-golang" },
  { label: "Flutter / Dart", icon: <SiFlutter size={13} />, tone: "tech-flutter" },
  { label: "PostgreSQL", icon: <SiPostgresql size={13} />, tone: "tech-postgres" },
  { label: "Docker", icon: <SiDocker size={13} />, tone: "tech-docker" },
];

export function HeroSection() {
  const resumeRef = useRef<ResumeExporterHandle | null>(null);
  const [exportingImg, setExportingImg] = useState(false);
  const [readmeOpen, setReadmeOpen] = useState(false);

  const handleExportImage = async () => {
    if (exportingImg) return;
    setExportingImg(true);
    toast("Gerando imagem do currículo...", {
      description: "Renderizando em PNG único em HD (2x). Aguarde 2-4 segundos.",
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
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-16 md:pb-0 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Neumorphic Tech Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none hero-aura" />
      <div className="absolute inset-0 z-0 pointer-events-none neo-grid opacity-40" />

      <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="neo-badge inline-flex items-center gap-3 px-4 py-2 rounded-full w-fit text-sm font-mono tracking-tight bg-[#e0e5ec] border border-white/80 shadow-[4px_4px_10px_#b8c1ec,-4px_-4px_10px_#ffffff]">
            <span className="text-[#2f855a] shrink-0 inline-flex items-center"><SiSpringboot size={18} /></span>
            <span className="neo-shine font-bold">Java · Spring Boot · Quarkus · Kotlin · Go · QA Automation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-foreground" data-testid="text-hero-name">
            Reinaldo<br />
            <span className="text-muted-foreground">Barreto</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed" data-testid="text-hero-description">
            Desenvolvedor &amp; Engenheiro Backend <span className="text-[#2f855a] font-bold font-mono">Java (Java 8+ a 21, Spring Boot 3 &amp; Quarkus)</span> — especializado em microsserviços, modernização de legados, <span className="text-[#00add8] font-bold font-mono">Go (Golang)</span> e <span className="text-[#7c3aed] font-bold font-mono">Kotlin (Android &amp; Web)</span> com foco em qualidade, arquitetura e suítes de automação QA.
          </p>

          <div className="flex flex-wrap gap-2">
            {STACK.map(({ label, icon, tone }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className={`neo-pill ${tone} flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold font-mono bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff]`}
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
              className="neo-button px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2"
            >
              Ver projetos <ArrowDownRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/80 bg-[#e0e5ec] shadow-[4px_4px_10px_#b8c1ec,-4px_-4px_10px_#ffffff] text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:text-[#2f855a] transition-all"
            >
              Vamos conversar
            </motion.a>
            <motion.a
              href="/curriculo.pdf"
              download="Curriculo_Reinaldo_Barreto.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/80 bg-[#e0e5ec] shadow-[4px_4px_10px_#b8c1ec,-4px_-4px_10px_#ffffff] text-[#2f855a] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#2f855a]/10 transition-all inline-flex items-center gap-2"
            >
              <FileDown size={15} />
              Currículo PDF
            </motion.a>
            <motion.button
              onClick={handleExportImage}
              disabled={exportingImg}
              whileHover={{ scale: exportingImg ? 1 : 1.03 }}
              whileTap={{ scale: exportingImg ? 1 : 0.97 }}
              className="border border-white/80 bg-[#e0e5ec] dark:bg-card dark:border-border shadow-[4px_4px_10px_#b8c1ec,-4px_-4px_10px_#ffffff] dark:shadow-none text-[#7c3aed] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#7c3aed]/10 transition-all inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FileImage size={15} className={exportingImg ? "animate-pulse" : ""} />
              {exportingImg ? "Gerando imagem..." : "Currículo Imagem PNG"}
            </motion.button>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://github.com/reinaldobarreto31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social"
            >
              <SiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social text-xs font-bold font-mono"
            >
              in
            </a>
            <a href="#contact" aria-label="Email" className="footer-social">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image Frame with Clean Neumorphic Badge Row Below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative flex flex-col items-center justify-center md:items-end w-full"
        >
          {/* Unobstructed Clean Profile Frame */}
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="profile-frame group relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden z-10 shadow-[10px_10px_24px_#b8c1ec,-10px_-10px_24px_#ffffff]"
              tabIndex={0}
            >
              <img
                src={fotoRei}
                alt="Reinaldo Barreto"
                className="profile-photo w-full h-full object-cover object-center"
                data-testid="img-hero-profile"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/foto-reinaldo.png";
                }}
              />
            </div>

            {/* Organized Neumorphic Technology Badges Row (Below Photo - No Overlap) */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-5 z-20 max-w-full">
              <motion.div
                whileHover={{ y: -4, scale: 1.08 }}
                className="tech-float-badge text-[#0284c7] !w-12 !h-12 sm:!w-14 sm:!h-14 rounded-2xl"
                title="Java 8+ a 21"
              >
                <SiJava size={24} />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.08 }}
                className="tech-float-badge text-[#2f855a] !w-12 !h-12 sm:!w-14 sm:!h-14 rounded-2xl"
                title="Spring Boot 3"
              >
                <SiSpringboot size={24} />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.08 }}
                className="tech-float-badge text-[#e0234e] !w-12 !h-12 sm:!w-14 sm:!h-14 rounded-2xl"
                title="Quarkus"
              >
                <SiQuarkus size={22} />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.08 }}
                className="tech-float-badge text-[#7c3aed] !w-12 !h-12 sm:!w-14 sm:!h-14 rounded-2xl"
                title="Kotlin (Android & Web)"
              >
                <SiKotlin size={22} />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.08 }}
                className="tech-float-badge text-[#00add8] !w-12 !h-12 sm:!w-14 sm:!h-14 rounded-2xl"
                title="Go / Golang"
              >
                <SiGo size={22} />
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.08 }}
                className="tech-float-badge text-[#0284c7] !w-12 !h-12 sm:!w-14 sm:!h-14 rounded-2xl"
                title="Flutter / Dart"
              >
                <SiFlutter size={22} />
              </motion.div>
            </div>
          </div>

          {/* Dev Status Badge - Clean & Well-aligned */}
          <div className="mt-4 bg-[#e0e5ec] border border-white/80 shadow-[4px_4px_10px_#b8c1ec,-4px_-4px_10px_#ffffff] px-4 py-2 rounded-xl flex items-center justify-center gap-2.5 z-20 backdrop-blur-sm max-w-full text-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2f855a] animate-pulse shrink-0" />
            <span className="text-xs text-foreground font-mono font-medium leading-relaxed">
              dev.status: ready · Java 21 + Spring + Quarkus + Kotlin + Go + QA Automation
            </span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Tech Stack Animation & Live QA Pipeline Canvas */}
      <div className="container mx-auto px-4 z-20 mt-8">
        <TechStackAnimation />
      </div>

      <ResumeExporter ref={resumeRef} />
      <GithubReadmeModal open={readmeOpen} onClose={() => setReadmeOpen(false)} />
    </section>
  );
}

