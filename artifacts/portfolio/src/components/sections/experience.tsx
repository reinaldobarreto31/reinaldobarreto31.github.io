import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin, CalendarDays, Code2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { SiJava, SiSpringboot, SiVueDotJs, SiPostgresql, SiLinux, SiAngular, SiReact, SiMysql } from "react-icons/si";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  sector: string;
  stack: { label: string; icon?: React.ReactNode; tone?: string }[];
  tags: string[];
  highlights?: string[];
};

const SYNTAX = {
  comment: "#6272a4",
  keyword: "#ff79c6",
  const: "#bd93f9",
  assign: "#f8f8f2",
  symbol: "#50fa7b",
  string: "#f1fa8c",
  bracket: "#ffb86c",
  rubyVar: "#8be9fd",
  key: "#ff79c6",
  rocket: "#ff5555",
  frozen: "#50fa7b",
  lineNum: "#44475a",
  filename: "#f8f8f2",
};

const experiences: Experience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados da Bahia",
    role: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
    period: "mar/2024 – set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e manutenção de soluções web para órgãos públicos estaduais do Governo da Bahia, com foco em sistemas críticos de escala, integrações entre módulos e modernização de legado. Participação em squad com rituais ágeis, refinamento, estimativas e entregas contínuas em pipeline estruturado.",
    sector: "Governo do Estado da Bahia · sistemas públicos estaduais",
    stack: [
      { label: "Java", icon: <SiJava size={13} />, tone: "tech-ruby" },
      { label: "Spring-Boot", icon: <SiSpringboot size={13} />, tone: "tech-rails" },
      { label: "Vue.js", icon: <SiVueDotJs size={13} />, tone: "tech-ts" },
      { label: "PostgreSQL", icon: <SiPostgresql size={13} />, tone: "tech-postgres" },
      { label: "Linux", icon: <SiLinux size={13} />, tone: "tech-docker" },
    ],
    tags: ["Sistemas públicos", "Escala estadual", "APIs", "Banco de dados", "Scrum", "Legado → Moderno"],
    highlights: ["Sistemas de interesse público", "Integrações entre módulos", "Qualidade em entregas"],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "mar/2022 – mai/2022",
    location: "Salvador / BA",
    description:
      "Atuação em ambiente de alta responsabilidade para segurança pública (SSP-BA / Polícia Militar da Bahia), com foco em autenticação forte, autorização granular, auditoria e integridade de dados sensíveis. Entregas com práticas de qualidade, testes e revisão de código em stack Java + frontend moderno.",
    sector: "SSP-BA · PM-BA · Segurança Pública",
    stack: [
      { label: "Java", icon: <SiJava size={13} />, tone: "tech-ruby" },
      { label: "Spring-Boot", icon: <SiSpringboot size={13} />, tone: "tech-rails" },
      { label: "Spring-Security", tone: "tech-rails" },
      { label: "OAuth2", tone: "tech-jwt" },
      { label: "Angular", icon: <SiAngular size={13} />, tone: "tech-ruby" },
      { label: "React", icon: <SiReact size={13} />, tone: "tech-react" },
    ],
    tags: ["Segurança pública", "OAuth2 / JWT", "Integridade de dados", "Auditoria", "Qualidade"],
    highlights: ["Auth forte e autorização", "Stack Java + Front moderno", "Dados sensíveis"],
  },
  {
    company: "EDZA Engenharia · Planejamento Consultoria e Informática LTDA",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "nov/2019 – mar/2022",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e sustentação de ERP Municipal usado em diversas prefeituras do sul da Bahia (Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas). Implantação, customização, automação de módulos pequenos (Hubs/relatórios) e regras de negócio específicas de gestão pública com foco em estabilidade e performance em bases de produção.",
    sector: "ERP Municipal · Ilhéus · Juazeiro · Candeias · Porto-Seguro · Lauro-de-Freitas",
    stack: [
      { label: "Java-EE", icon: <SiJava size={13} />, tone: "tech-ruby" },
      { label: "Spring-Boot", icon: <SiSpringboot size={13} />, tone: "tech-rails" },
      { label: "Vue.js", icon: <SiVueDotJs size={13} />, tone: "tech-ts" },
      { label: "Angular", icon: <SiAngular size={13} />, tone: "tech-ruby" },
      { label: "MySQL", icon: <SiMysql size={13} />, tone: "tech-openapi" },
      { label: "Linux", icon: <SiLinux size={13} />, tone: "tech-docker" },
    ],
    tags: ["ERP Público", "Módulos custom", "Automações", "Produção", "Multi-municípios"],
    highlights: ["5+ municípios atendidos", "Módulos pequenos (Hub)", "Regras de negócio municipais"],
  },
];

const rubyLines = [
  { type: "comment", text: "# experience.rb  --  reinaldobarreto31" },
  { type: "blank", text: "" },
  { type: "assign", parts: [{ kind: "const", v: "EXPERIENCE" }, { kind: "op", v: " = [" }] },
  { type: "blank", text: "" },
  ...experiences.flatMap((exp, idx) => [
    { type: "blank", text: "" },
    { type: "obj-open", parts: [{ kind: "brace", v: "  {" }] },
    {
      type: "keyval",
      parts: [
        { kind: "indent", v: "    " },
        { kind: "key", v: "company" },
        { kind: "rocket", v: ": " },
        { kind: "str", v: `"${exp.company.split(" — ")[0]}"` },
        { kind: "comma", v: "," },
      ],
    },
    {
      type: "keyval",
      parts: [
        { kind: "indent", v: "    " },
        { kind: "key", v: "period" },
        { kind: "rocket", v: ": " },
        { kind: "str", v: `"${exp.period.replace("–", "-")}"` },
        { kind: "comma", v: "," },
      ],
    },
    {
      type: "keyval",
      parts: [
        { kind: "indent", v: "    " },
        { kind: "key", v: "stack" },
        { kind: "rocket", v: ": " },
        { kind: "symbol", v: `%w[${exp.stack.map(s => s.label).join(" ")}]` },
        { kind: "comma", v: "," },
      ],
    },
    {
      type: "keyval",
      parts: [
        { kind: "indent", v: "    " },
        { kind: "key", v: "sector" },
        { kind: "rocket", v: ": " },
        { kind: "str", v: `"${exp.sector}"` },
      ],
    },
    { type: "obj-close", parts: [{ kind: "brace", v: "  }" }, { kind: idx < experiences.length - 1 ? "comma" : "blank", v: idx < experiences.length - 1 ? "," : "" }] },
  ]),
  { type: "blank", text: "" },
  { type: "frozen", parts: [{ kind: "rb-var", v: "]" }, { kind: "dot", v: "." }, { kind: "kw", v: "freeze" }] },
];

function RubyLine({ idx, line }: { idx: number; line: any }) {
  const gutter = String(idx + 1).padStart(2, " ");
  if (line.type === "blank") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span className="flex-1" />
      </div>
    );
  }
  if (line.type === "comment") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span style={{ color: SYNTAX.comment }} className="font-mono text-[13px] whitespace-pre">{line.text}</span>
      </div>
    );
  }
  if (line.type === "assign") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span className="font-mono text-[13px] whitespace-pre">
          {line.parts.map((p: any, i: number) => {
            if (p.kind === "const") return <span key={i} style={{ color: SYNTAX.const, fontWeight: 700 }}>{p.v}</span>;
            if (p.kind === "op") return <span key={i} style={{ color: SYNTAX.assign }}>{p.v}</span>;
            return null;
          })}
        </span>
      </div>
    );
  }
  if (line.type === "frozen") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span className="font-mono text-[13px] whitespace-pre">
          {line.parts.map((p: any, i: number) => {
            if (p.kind === "rb-var") return <span key={i} style={{ color: SYNTAX.rubyVar }}>{p.v}</span>;
            if (p.kind === "dot") return <span key={i} style={{ color: SYNTAX.assign }}>{p.v}</span>;
            if (p.kind === "kw") return <span key={i} style={{ color: SYNTAX.frozen, fontWeight: 600 }}>{p.v}</span>;
            return null;
          })}
        </span>
      </div>
    );
  }
  if (line.type === "obj-open") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span className="font-mono text-[13px] whitespace-pre">
          {line.parts.map((p: any, i: number) => (
            <span key={i} style={{ color: SYNTAX.bracket }}>{p.v}</span>
          ))}
        </span>
      </div>
    );
  }
  if (line.type === "obj-close") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span className="font-mono text-[13px] whitespace-pre">
          {line.parts.map((p: any, i: number) => {
            if (p.kind === "brace") return <span key={i} style={{ color: SYNTAX.bracket }}>{p.v}</span>;
            if (p.kind === "comma") return <span key={i} style={{ color: SYNTAX.assign }}>{p.v}</span>;
            return null;
          })}
        </span>
      </div>
    );
  }
  if (line.type === "keyval") {
    return (
      <div className="flex items-center gap-5 leading-7">
        <span className="select-none text-right w-7 shrink-0 pr-2" style={{ color: SYNTAX.lineNum }}>{gutter}</span>
        <span className="font-mono text-[13px] whitespace-pre flex-wrap">
          {line.parts.map((p: any, i: number) => {
            if (p.kind === "indent") return <span key={i}>{p.v}</span>;
            if (p.kind === "key") return <span key={i} style={{ color: SYNTAX.key, fontWeight: 600 }}>{p.v}</span>;
            if (p.kind === "rocket") return <span key={i} style={{ color: SYNTAX.rocket }}>{p.v}</span>;
            if (p.kind === "str") return <span key={i} style={{ color: SYNTAX.string }}>{p.v}</span>;
            if (p.kind === "symbol") return <span key={i} style={{ color: SYNTAX.symbol }}>{p.v}</span>;
            if (p.kind === "comma") return <span key={i} style={{ color: SYNTAX.assign }}>{p.v}</span>;
            return null;
          })}
        </span>
      </div>
    );
  }
  return null;
}

export function ExperienceSection() {
  const [copied, setCopied] = useState(false);
  const asCode = `EXPERIENCE = [
${experiences.map(e => `  {
    company: "${e.company.split(" — ")[0]}",
    period: "${e.period.replace("–", "-")}",
    stack:  %w[${e.stack.map(s => s.label).join(" ")}],
    sector: "${e.sector}"
  }`).join(",\n\n")}
].freeze`;

  function onCopy() {
    try {
      navigator.clipboard.writeText(asCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <section id="experience" className="py-24 relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 rails-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-3">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">Trajetória</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Experiência que fortalece cada entrega.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed md:text-right">
            Passagem por órgãos públicos estaduais, segurança de alta responsabilidade e ERPs municipais — com foco em sistemas que realmente impactam pessoas.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 rounded-2xl overflow-hidden border border-border/80 shadow-[0_20px_60px_rgba(0,0,0,.45)] rails-panel"
        >
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-border/60 bg-[linear-gradient(145deg,rgba(40,42,54,.95),rgba(30,31,40,.92))]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5555] shadow-[0_0_0_1px_rgba(0,0,0,.3)_inset]" />
                <span className="w-3 h-3 rounded-full bg-[#f1fa8c] shadow-[0_0_0_1px_rgba(0,0,0,.3)_inset]" />
                <span className="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_0_0_1px_rgba(0,0,0,.3)_inset]" />
              </div>
              <div className="flex items-center gap-2 text-[12px] font-mono text-muted-foreground">
                <Code2 size={13} className="text-primary" />
                <span style={{ color: SYNTAX.filename }} className="font-semibold">experience.rb</span>
                <span className="text-[10px] opacity-70">UTF-8 · Ruby 3.2 · frozen_string_literal: true</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onCopy}
              className="inline-flex items-center gap-2 text-[11px] font-mono px-3 py-1.5 rounded-md border border-primary/35 text-primary/90 hover:bg-primary/10 hover:border-primary/60 transition-colors active:scale-[.97]"
              aria-label="Copiar código Ruby da experiência"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>

          <div className="px-4 sm:px-5 py-5 bg-[linear-gradient(180deg,rgba(40,42,54,.9),rgba(30,31,40,.94))] relative">
            <div className="absolute inset-y-0 left-0 w-14 border-r border-border/40 pointer-events-none" />
            <div className="relative">
              {rubyLines.map((l, i) => (
                <RubyLine key={`${l.type}-${i}`} idx={i} line={l} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 max-w-5xl space-y-5">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rails-experience-card rounded-xl p-5 sm:p-6 grid md:grid-cols-[12rem_1fr] gap-5 md:gap-7"
            >
              <div className="font-mono text-xs text-muted-foreground space-y-3">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-primary shrink-0" />
                  {item.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary shrink-0" />
                  {item.location}
                </span>
                {index === 0 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-[#b91f32] to-[#e33446] border border-primary/50 shadow-[0_0_12px_rgba(227,52,70,.28)] w-fit">
                    ⭐ Experiência mais recente
                  </span>
                )}
                {index === 2 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-gradient-to-r from-[#5050a0] to-[#bd93f9] border border-[#bd93f9]/40 shadow-[0_0_12px_rgba(189,147,249,.25)] w-fit">
                    🏛️ Maior estadia · 2,4 anos
                  </span>
                )}
              </div>

              <div>
                <div className="flex gap-3 flex-wrap">
                  <BriefcaseBusiness className="text-primary shrink-0 mt-1" size={18} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg">{item.role}</h3>
                    <p className="text-sm text-primary mt-1 font-semibold">{item.company}</p>
                    <p className="text-[11px] font-mono tracking-wide text-muted-foreground mt-1.5 uppercase opacity-80">
                      {item.sector}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{item.description}</p>

                {item.highlights && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 text-[10.5px] font-mono px-2.5 py-1 rounded-md bg-[linear-gradient(145deg,rgba(189,147,249,.15),rgba(255,85,85,.08))] border border-[#bd93f9]/25 text-[#f5f2ff]"
                      >
                        ▸ {h}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.stack.map((s) => (
                    <span
                      key={s.label}
                      className={`rails-pill tech-tag ${s.tone ?? ""} inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10.5px] font-bold font-mono`}
                    >
                      {s.icon}
                      {s.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded border border-primary/25 bg-primary/5 text-primary/90"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
