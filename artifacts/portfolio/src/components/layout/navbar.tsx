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
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-primary/15 border border-primary/30 shadow-[0_0_12px_rgba(109,179,63,0.3)] group-hover:shadow-[0_0_20px_rgba(109,179,63,0.5)] transition-shadow">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute"
            >
              <SiSpring className="text-primary text-sm" />
            </motion.div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-tight text-foreground">Reinaldo Barreto</span>
            <span className="text-[10px] text-primary font-mono tracking-wider uppercase">Software Engineer</span>
          </div>
        </a>

        {/* Desktop nav */}
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

        {/* Currículo button */}
        <a
          href="/curriculo.html?auto=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 text-xs font-semibold border border-primary/40 text-primary px-3 py-1.5 rounded-md hover:bg-primary/10 transition-colors shadow-[0_0_8px_rgba(109,179,63,0.15)]"
        >
          Baixar CV
        </a>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-card/95 backdrop-blur border-t border-border grid grid-cols-6 h-14 z-50">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex flex-col items-center justify-center text-[10px] text-muted-foreground hover:text-primary transition-colors border-r border-border last:border-r-0"
          >
            <span className="truncate w-full text-center px-1 font-medium">{link.name.substring(0, 3)}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
