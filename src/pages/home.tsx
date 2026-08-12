import { useRef, useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { StackShowcaseSection } from "@/components/sections/stack-showcase";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdminPanel } from "@/components/sections/admin-panel";
import { useAdminData } from "@/lib/admin-store";

export default function Home() {
  const { data } = useAdminData();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <HeroSection resumeRef={resumeRef} />
        <AboutSection about={data.about} />
        <ExperienceSection experiences={data.experiences} />
        <ProjectsSection projects={data.projects} />
        <StackShowcaseSection stack={data.stack} />
        <ContactSection />
      </main>
      <Footer onOpenAdmin={() => setAdminOpen(true)} />

      {/* Export invisible area (para currículo PNG) — será ativado via ResumeExporter no hero */}
      <div ref={resumeRef} />

      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}
