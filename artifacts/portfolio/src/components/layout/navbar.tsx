import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Status", href: "#status" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="font-bold text-lg tracking-tighter">rb_sys</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-foreground transition-colors uppercase tracking-wider"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile bottom nav - ops console style */}
      <nav className="md:hidden fixed bottom-0 w-full bg-card border-t border-border grid grid-cols-6 h-14 z-50">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex flex-col items-center justify-center text-[10px] text-muted-foreground hover:text-primary transition-colors border-r border-border last:border-r-0"
          >
            <span className="truncate w-full text-center px-1">{link.name.substring(0,3)}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
