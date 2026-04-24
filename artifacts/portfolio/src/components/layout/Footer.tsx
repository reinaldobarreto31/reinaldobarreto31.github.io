import { useI18n } from '@/i18n/useI18n';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-background border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-mono tracking-tighter text-white">
              RB<span className="text-primary">.</span>
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-left">
            {t('footer', 'copyright')}
          </div>

          <div className="flex items-center space-x-4">
            <a href={`https://github.com/${portfolioData.profile.github}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={`https://linkedin.com/in/${portfolioData.profile.linkedin}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${portfolioData.profile.email}`} className="text-muted-foreground hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
