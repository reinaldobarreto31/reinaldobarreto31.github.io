import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { SiRuby, SiRubyonrails, SiPostgresql } from "react-icons/si";

const GITHUB = "https://github.com/reinaldobarreto31";
const projects = [
  { title: "Rails Link Shortener", subtitle: "Encurtador de URLs", description: "Aplicação Ruby on Rails para criar, organizar e redirecionar links curtos. Um projeto enxuto para demonstrar modelagem, rotas e o ciclo completo de uma aplicação Rails.", tech: ["Ruby", "Rails", "PostgreSQL", "MVC"], icon: SiRubyonrails, github: `${GITHUB}/rails-link-shortener` },
  { title: "Rails Tasks API", subtitle: "API de tarefas", description: "API REST para gestão de tarefas, estruturada com convenções Rails, endpoints claros e persistência em banco de dados relacional.", tech: ["Ruby", "Rails API", "PostgreSQL", "REST"], icon: SiRuby, github: `${GITHUB}/rails-tasks-api` },
  { title: "Ruby Expense Tracker", subtitle: "Controle financeiro", description: "Projeto em Ruby voltado ao controle de despesas e à lógica de negócio, com uma base simples e legível para evoluir em uma aplicação Rails completa.", tech: ["Ruby", "Domínio", "CLI", "Testes"], icon: SiPostgresql, github: `${GITHUB}/ruby-expense-tracker` },
];

export function ProjectsSection() {
  return <section id="projects" className="py-24 bg-background"><div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"><div><p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">Portfólio Rails</p><h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Projetos selecionados</h2><p className="text-muted-foreground mt-3 max-w-xl">Projetos que evidenciam uma base sólida em Ruby e Ruby on Rails.</p></div><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start md:self-auto border border-border hover:border-primary/50 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"><Github size={16} /> Ver GitHub</a></div>
    <div className="grid md:grid-cols-3 gap-5">{projects.map((project, index) => { const Icon = project.icon; return <motion.article key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -6 }} className="rails-project-card rounded-xl overflow-hidden flex flex-col">
      <div className="h-28 relative flex items-center justify-center rails-project-head"><Icon className="text-5xl text-primary relative z-10" /><div className="absolute inset-0 rails-grid opacity-50" /></div>
      <div className="p-5 flex flex-col flex-1"><p className="text-xs font-mono text-primary">{project.subtitle}</p><h3 className="font-bold text-lg mt-1">{project.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mt-3 flex-1">{project.description}</p><div className="flex flex-wrap gap-1.5 mt-5">{project.tech.map(tech => <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded border border-primary/25 text-primary bg-primary/5">{tech}</span>)}</div><a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Ver repositório <ArrowUpRight size={15} /></a></div>
    </motion.article>})}</div>
    <div className="mt-10 text-center"><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="rails-button inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm">Mais projetos no GitHub <ExternalLink size={15} /></a></div>
  </div></section>;
}
