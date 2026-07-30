import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiSpring } from "react-icons/si";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início",      href: "#hero" },
    { name: "Sobre",       href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos",    href: "#projects" },
    { name: "Status",      href: "#status" },
    { name: "Contato",     href: "#contact" },
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
        {/* Logo — Spring Boot themed */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <SiSpring className="text-primary text-lg" />
          </motion.div>
          <span className="font-bold text-lg tracking-tighter font-mono">
            rb<span className="text-primary">::</span>spring
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors uppercase tracking-wider text-xs font-mono"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Currículo button */}
        <a
          href="/curriculo.html?auto=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 text-xs font-mono border border-primary/40 text-primary px-3 py-1.5 rounded hover:bg-primary/10 transition-colors"
        >
          ↓ CV
        </a>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-card border-t border-border grid grid-cols-6 h-14 z-50">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex flex-col items-center justify-center text-[10px] text-muted-foreground hover:text-primary transition-colors border-r border-border last:border-r-0"
          >
            <span className="truncate w-full text-center px-1 font-mono">{link.name.substring(0, 3)}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
