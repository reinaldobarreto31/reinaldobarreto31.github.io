import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiRubyonrails } from "react-icons/si";
import { Home, User, Briefcase, Code2, Activity, Mail, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Início",      href: "#hero",       icon: Home },
    { name: "Sobre",       href: "#about",      icon: User },
    { name: "Experiência", href: "#experience", icon: Briefcase },
    { name: "Projetos",    href: "#projects",   icon: Code2 },
    { name: "Stack",       href: "#stack",      icon: Activity },
    { name: "Contato",     href: "#contact",    icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/15 border border-red-500/30 shadow-[0_0_12px_rgba(204,0,0,0.28)] group-hover:shadow-[0_0_20px_rgba(204,0,0,0.55)] transition-shadow">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute text-red-500"
            >
              <SiRubyonrails size={20} />
            </motion.div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-tight text-foreground">Reinaldo Barreto</span>
            <span className="text-[10px] text-red-500 font-mono tracking-wider uppercase">Ruby on Rails · Ruby 3 · React</span>
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
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-card/80 border border-border text-foreground hover:text-primary transition-all shadow-sm hover:scale-105 active:scale-95"
            data-testid="button-theme-toggle"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400 animate-spin-slow" />
            ) : (
              <Moon size={17} className="text-indigo-600" />
            )}
          </button>
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
