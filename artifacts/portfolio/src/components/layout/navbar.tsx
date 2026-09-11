import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiDotnet } from "react-icons/si";
import { Home, User, Briefcase, Code2, Activity, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início",      href: "#hero",       icon: Home },
    { name: "Sobre",       href: "#about",      icon: User },
    { name: "Experiência", href: "#experience", icon: Briefcase },
    { name: "Projetos",    href: "#projects",   icon: Code2 },
    { name: "Stack",       href: "#stack",      icon: Activity },
    { name: "Contato",     href: "#contact",    icon: Mail },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-primary/15 border border-primary/30 shadow-[0_0_12px_rgba(0,120,212,0.35)] group-hover:shadow-[0_0_20px_rgba(0,120,212,0.65)] transition-shadow">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute"
            >
              <SiDotnet className="text-primary text-base" />
            </motion.div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-tight text-foreground">Reinaldo Barreto</span>
            <span className="text-[10px] text-primary font-mono tracking-wider uppercase">1º .NET · 2º Java · 3º Node.js</span>
          </div>
        </a>

        {/* Desktop nav + Theme Switcher */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors text-xs font-medium tracking-wide"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border bg-card/80 hover:bg-primary/15 text-foreground hover:text-primary transition-all flex items-center justify-center shadow-sm"
              title={theme === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
              aria-label="Alternar tema claro/escuro"
            >
              {theme === "dark" ? (
                <Sun size={17} className="text-amber-400" />
              ) : (
                <Moon size={17} className="text-[#0078d4]" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-card/95 backdrop-blur border-t border-border grid grid-cols-6 h-14 z-50">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-col items-center justify-center gap-0.5 text-[9px] text-muted-foreground hover:text-primary transition-colors border-r border-border last:border-r-0"
            >
              <Icon size={16} strokeWidth={1.5} />
              <span className="font-medium leading-none">{link.name.substring(0, 3)}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
