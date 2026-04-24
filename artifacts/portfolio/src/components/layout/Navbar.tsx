import React, { useState, useEffect } from 'react';
import { useI18n, Language } from '@/i18n/useI18n';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'dashboard', href: '#dashboard' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const langs: Language[] = ['pt', 'en', 'es'];
    const nextIndex = (langs.indexOf(language) + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold font-mono tracking-tighter text-white group-hover:text-primary transition-colors">
              RB<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav', item.key)}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 pl-6 border-l border-white/10">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2 text-muted-foreground hover:text-white">
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2 text-muted-foreground hover:text-white">
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </Button>
            <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-xl md:hidden"
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-white/5"
                >
                  {t('nav', item.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
