import { motion } from "framer-motion";
import { Database, ShieldCheck, Workflow, Sparkles } from "lucide-react";
import { SiRuby, SiRubyonrails, SiPostgresql, SiRedis, SiDocker, SiGithubactions } from "react-icons/si";

const SKILLS = [
  { name: "Ruby", icon: SiRuby }, { name: "Rails", icon: SiRubyonrails },
  { name: "PostgreSQL", icon: SiPostgresql }, { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker }, { name: "GitHub Actions", icon: SiGithubactions },
];

const PRACTICES = ["MVC", "REST APIs", "Active Record", "RSpec", "TDD", "SOLID", "Clean Code", "CI/CD"];

export function AboutSection() {
  return <section id="about" className="py-24 relative bg-card/30">
    <div className="container mx-auto px-4 grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-start">
      <div>
        <p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">Perfil profissional</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Produtos web claros por fora. Estruturados por dentro.</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
          <p>Meu foco é construir aplicações com <strong className="text-primary">Ruby on Rails</strong> que sejam simples de usar, confiáveis para manter e preparadas para evoluir.</p>
          <p>Trabalho da modelagem do domínio e banco de dados à criação de APIs, autenticação, testes e publicação. A prioridade é sempre traduzir uma necessidade real em uma solução objetiva.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-3">
          {[{ icon: Database, title: "Dados", text: "Modelagem e migrations seguras." }, { icon: ShieldCheck, title: "Qualidade", text: "Testes e boas práticas desde o início." }, { icon: Workflow, title: "Entrega", text: "Fluxo automatizado e ambientes reproduzíveis." }].map(({ icon: Icon, title, text }) => <div key={title} className="rails-mini-card rounded-lg p-4"><Icon size={18} className="text-primary mb-3" /><h3 className="font-semibold text-sm">{title}</h3><p className="text-xs text-muted-foreground mt-1 leading-relaxed">{text}</p></div>)}
        </div>
        <div className="mt-8"><h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">Práticas de engenharia</h3><div className="flex flex-wrap gap-2">{PRACTICES.map(item => <span key={item} className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-mono">{item}</span>)}</div></div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rails-panel rounded-xl p-5 sm:p-7 relative overflow-hidden">
        <div className="absolute inset-0 rails-grid opacity-30 pointer-events-none" />
        <div className="relative"><div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider"><Sparkles size={14} /> Ferramentas do dia a dia</div><div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">{SKILLS.map(({ name, icon: Icon }) => <div key={name} className="rails-tool-card rounded-lg p-4 text-center"><Icon className="text-3xl text-primary mx-auto mb-3" /><span className="text-xs font-mono text-muted-foreground">{name}</span></div>)}</div><div className="mt-6 pt-5 border-t border-border"><p className="font-mono text-xs text-muted-foreground"><span className="text-primary">$</span> rails new produto --database=postgresql</p></div></div>
      </motion.div>
    </div>
  </section>;
}
