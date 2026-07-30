import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { StackShowcaseSection } from "@/components/sections/stack-showcase";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
