import { motion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import { portfolioData } from "@/data/portfolio";
import { Terminal, CheckCircle2, ShieldCheck } from "lucide-react";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Terminal className="text-primary w-8 h-8" />
            <span>{t('about', 'title')}</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 glass-card p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about', 'summary')}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Alta Disponibilidade (HA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <span>Sistemas Seguros (SOC)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4"
          >
            <div className="glass-card p-6 rounded-xl flex items-center gap-6 border-l-4 border-l-primary">
              <div className="text-4xl font-bold font-mono text-white glow-text-cyan">
                {portfolioData.stats.years}+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                {t('about', 'stats.experience')}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center gap-6 border-l-4 border-l-secondary">
              <div className="text-4xl font-bold font-mono text-white glow-text-violet">
                {portfolioData.stats.projects}+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                {t('about', 'stats.projects')}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center gap-6 border-l-4 border-l-emerald-500">
              <div className="text-4xl font-bold font-mono text-white" style={{ textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>
                {portfolioData.stats.technologies}+
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                {t('about', 'stats.techs')}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
