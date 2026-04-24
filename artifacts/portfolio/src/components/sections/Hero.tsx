import { motion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                <span className="block text-white">{portfolioData.profile.name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-mono text-primary mb-6 glow-text-cyan">
                {t('hero', 'role')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
                {t('hero', 'tagline')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('hero', 'contact')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-white hover:bg-primary/10" asChild>
                <a href={`${import.meta.env.BASE_URL}Curriculum_Reinaldo_Barreto.pdf`} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  {t('hero', 'cv')}
                </a>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-6 text-muted-foreground"
            >
              <a href={`https://github.com/${portfolioData.profile.github}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={`https://linkedin.com/in/${portfolioData.profile.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{portfolioData.profile.location}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>{portfolioData.profile.phone}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-[-20px] rounded-full border border-emerald-500/10 animate-[spin_20s_linear_infinite]" />
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <img 
                  src={`${import.meta.env.BASE_URL}profile.png`} 
                  alt="Reinaldo Barreto da Silva"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
