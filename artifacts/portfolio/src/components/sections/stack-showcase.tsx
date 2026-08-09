import { motion } from "framer-motion";
import { SiRuby, SiRubyonrails, SiPostgresql, SiRedis, SiDocker, SiGithubactions } from "react-icons/si";
import { RotateCcw, ExternalLink } from "lucide-react";

const STACK = [
  { name: "Ruby", tagline: "Linguagem expressiva", icon: SiRuby, detail: "Código legível, orientado a objetos e pensado para entregar valor rapidamente.", points: ["Ruby 3.x", "POO", "Rake", "Bundler"] },
  { name: "Ruby on Rails", tagline: "Framework principal", icon: SiRubyonrails, detail: "Aplicações web completas com convenções sólidas, segurança e manutenção simples.", points: ["Rails 7 / 8", "MVC", "Active Record", "Hotwire"] },
  { name: "PostgreSQL", tagline: "Dados consistentes", icon: SiPostgresql, detail: "Modelagem, consultas e migrations para bases de dados prontas para crescer.", points: ["SQL", "Migrations", "Índices", "Backups"] },
  { name: "Entrega", tagline: "Qualidade contínua", icon: SiDocker, detail: "Ambientes reproduzíveis e automação para publicar com previsibilidade.", points: ["Docker", "Git", "CI/CD", "Testes"] },
];

export function StackShowcaseSection() {
  return <section id="stack" className="py-24 relative bg-card/30 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none rails-grid opacity-30" />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-2xl mb-12"><p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">Stack principal</p><h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ruby on Rails, do domínio ao deploy.</h2><p className="text-muted-foreground mt-3 leading-relaxed">Clique em um cartão para ver os fundamentos que guiam cada camada do produto.</p></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STACK.map((item, index) => { const Icon = item.icon; return <motion.article key={item.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rails-stack-card group rounded-xl p-5 min-h-64 flex flex-col">
          <div className="flex items-start justify-between"><div className="rails-icon p-3 rounded-xl"><Icon className="text-3xl text-primary" /></div><RotateCcw size={15} className="text-muted-foreground group-hover:text-primary group-hover:rotate-180 transition-all duration-500" /></div>
          <p className="text-xs font-mono text-primary mt-6">{item.tagline}</p><h3 className="text-xl font-bold mt-1">{item.name}</h3><p className="text-sm leading-relaxed text-muted-foreground mt-3">{item.detail}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto pt-5">{item.points.map(point => <span key={point} className="text-[10px] font-mono px-2 py-1 rounded border border-primary/25 bg-primary/5 text-primary">{point}</span>)}</div>
        </motion.article>})}
      </div>
      <a href="#projects" className="mt-9 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">Explorar projetos Rails <ExternalLink size={15} /></a>
    </div>
  </section>;
}
