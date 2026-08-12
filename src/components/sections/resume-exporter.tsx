import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import fotoRei from "@assets/foto_Rei_perfil_1777048784969.png";
import {
  Mail, Phone, MapPin, CalendarDays, BriefcaseBusiness, GraduationCap,
  Award, Languages, Sparkles, Target, Rocket, Package, FileDown,
} from "lucide-react";
import {
  SiPostgresql, SiDocker, SiGithubactions,
  SiReact, SiSpringboot, SiVuedotjs, SiAngular, SiGo, SiSwagger,
  SiTypescript, SiKotlin, SiFlutter, SiJavascript, SiNodedotjs, SiMongodb, SiVite, SiTailwindcss, SiMysql, SiRedis, SiGit, SiLinux, SiGnubash,
} from "react-icons/si";
import { FaJava as SiJava } from "react-icons/fa6";
import {
  CONTACT,
  PROFESSIONAL_SUMMARY,
  PROFESSIONAL_OBJECTIVE,
  HARD_SKILLS,
  METHODOLOGIES,
  EDUCATION,
  COURSES,
  LANGUAGES,
  EXPERIENCES,
  PERSONAL_PROJECTS,
} from "@/lib/resume-data";
import { onResumeExportImage } from "@/lib/resume-export-bus";

declare global {
  interface Window { html2canvas?: any; }
}

function SkillBarStatic({ name, level, color }: { name: string; level: number; color: string; key?: string }) {
  const c = color || "#6db33f";
  const grad = (() => {
    const lc = c.toLowerCase();
    if (lc === "#6db33f" || lc.includes("50fa7b") || lc.includes("6db")) return "linear-gradient(to right,#3d7a27,#6db33f,#9ed866)";
    if (lc === "#007396" || lc === "#f89820" || lc.includes("007396") || lc.includes("f898")) return "linear-gradient(to right,#005d7c,#007396,#2fa4c8)";
    if (lc === "#7f52ff" || lc.includes("7f52")) return "linear-gradient(to right,#5a3ad1,#7f52ff,#a78bfa)";
    if (lc === "#02569b" || lc === "#42a5f5" || lc.includes("02569b")) return "linear-gradient(to right,#013f73,#02569b,#42a5f5)";
    return `linear-gradient(to right, ${c}, ${c})`;
  })();
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="text-foreground font-semibold">{name}</span>
        <span style={{ color: c, fontWeight: 700 }}>{level}%</span>
      </div>
      <div className="h-[6px] w-full rounded-full bg-[#e0e5ec] overflow-hidden border border-white/80 shadow-[inset_1px_1px_3px_#b8c1ec,inset_-1px_-1px_3px_#ffffff]">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: grad,
            boxShadow: `0 0 8px ${c}44`,
          }}
        />
      </div>
    </div>
  );
}

export interface ResumeExporterHandle {
  exportAsImage: () => Promise<void>;
}

export const ResumeExporter = forwardRef<ResumeExporterHandle, {}>((_, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const exportFnRef = useRef<() => Promise<void>>(Promise.resolve);

  async function loadHtml2Canvas(): Promise<any> {
    if (window.html2canvas) return window.html2canvas;
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
      s.crossOrigin = "anonymous";
      s.onload = () => resolve(window.html2canvas);
      s.onerror = () => reject(new Error("Falha ao carregar html2canvas"));
      document.body.appendChild(s);
    });
  }

  async function exportAsImageInner() {
    if (loading) return;
    if (!containerRef.current) return;
    try {
      setLoading(true);
      const html2canvas = await loadHtml2Canvas();
      const node = containerRef.current;
      const canvas = await html2canvas(node, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        windowWidth: node.scrollWidth,
        windowHeight: node.scrollHeight,
        imageTimeout: 0,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "Curriculo_Reinaldo_Barreto_da_Silva.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("exportAsImage error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    exportFnRef.current = exportAsImageInner;
  });

  useImperativeHandle(ref, () => ({
    async exportAsImage() {
      await exportFnRef.current();
    },
  }));

  useEffect(() => {
    return onResumeExportImage(async () => {
      await exportFnRef.current();
    });
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: -99999,
        top: 0,
        pointerEvents: "none",
        opacity: 0.999,
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: 1600,
          background: "linear-gradient(180deg,#1e1f29 0%,#282a36 100%)",
          color: "#f8f8f2",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          minHeight: 1200,
          direction: "ltr",
        }}
      >
        {/* COLUNA ESQUERDA */}
        <aside
          style={{
            background: "linear-gradient(180deg,#14151c 0%,#1e1f29 100%)",
            borderRight: "1px solid rgba(98,114,164,.5)",
            padding: "40px 32px 60px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ marginBottom: 40 }}>
            <div
              style={{
                width: 112, height: 112, borderRadius: 999,
                background: "linear-gradient(135deg,#2f6d3f,#6db33f,#9ed866)",
                padding: 4, display: "grid", placeItems: "center",
                boxShadow: "0 12px 28px rgba(109,179,63,.38)",
                marginBottom: 18,
              }}
            >
              <div style={{ width: 104, height: 104, borderRadius: 999, overflow: "hidden", background: "#0b1220" }}>
                <img
                  src={fotoRei}
                  alt="Reinaldo Barreto"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
            <h1
              style={{
                fontSize: 26, fontWeight: 800, letterSpacing: -0.02,
                margin: 0, lineHeight: 1.1,
              }}
            >
              Reinaldo <span style={{ color: "#9ed866" }}>Barreto</span>
            </h1>
            <h2 style={{ fontSize: 22, margin: 0, fontWeight: 700, letterSpacing: -0.02 }}>
              da Silva
            </h2>
            <p style={{
              fontSize: 12.5, fontFamily: "ui-monospace, monospace",
              color: "#94a3b8", marginTop: 10, marginBottom: 0,
              lineHeight: 1.5,
            }}>
              Java 8+ a 21 · Spring Boot 3 · Quarkus · Legados (JSP/Struts) · Kotlin · Flutter · Docker
            </p>
          </div>

          <section style={{ marginBottom: 36 }}>
            <h3 style={h3Style("#6db33f")}>Contato</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 14 }}>
              <ContactRow icon={<Phone size={14} />} text="+55 47 98830-2308" />
              <ContactRow icon={<Mail size={14} />} text="reinaldobarretosilva@gmail.com" />
              <ContactRow icon={<MapPin size={14} />} text="Navegantes / SC, Brasil" />
              <ContactRow
                icon={<Sparkles size={14} />}
                text="linkedin.com/in/reinaldo-barreto-2a4ba2116"
              />
              <ContactRow icon={<Sparkles size={14} />} text="github.com/reinaldobarreto31" />
            </div>
          </section>

          <section style={{ marginBottom: 36 }}>
            <h3 style={h3Style("#6db33f")}>Habilidades Técnicas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
              {HARD_SKILLS.map((s) => (
                <SkillBarStatic key={s.name} name={s.name} level={s.level} color={s.color} />
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 36 }}>
            <h3 style={h3Style("#bd93f9")}>Metodologias</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {METHODOLOGIES.map((m) => (
                <span
                  key={m}
                  style={{
                    padding: "4px 9px",
                    borderRadius: 6,
                    border: "1px solid rgba(98,114,164,.5)",
                    background: "rgba(68,71,90,.55)",
                    color: "#f8f8f2",
                    fontSize: 11,
                    fontFamily: "ui-monospace, monospace",
                    fontWeight: 600,
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 36 }}>
            <h3 style={h3Style("#bd93f9")}>Formação Acadêmica</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 14 }}>
              {EDUCATION.map((e) => (
                <div key={e.course} style={{ display: "flex", gap: 10 }}>
                  <div
                    style={{
                      width: 32, height: 32, flexShrink: 0, borderRadius: 8,
                      background: "rgba(189,147,249,.15)",
                      border: "1px solid rgba(189,147,249,.5)",
                      color: "#bd93f9", display: "grid", placeItems: "center",
                    }}
                  >
                    <GraduationCap size={15} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, margin: 0, color: "#f8f8f2" }}>
                      {e.course}
                    </h4>
                    <p style={{ fontSize: 11.5, color: "#6272a4", margin: "3px 0 0" }}>{e.school}</p>
                    <p style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", margin: "3px 0 0", color: "#007396" }}>
                      {e.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 36 }}>
            <h3 style={h3Style("#f1fa8c")}>Cursos & Certificações</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
              {COURSES.map((c) => (
                <div
                  key={c}
                  style={{
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: "1px solid rgba(98,114,164,.45)",
                    background: "rgba(68,71,90,.35)",
                    fontSize: 11.5,
                    lineHeight: 1.4,
                    color: "#f8f8f2",
                  }}
                >
                  <span style={{
                    fontFamily: "ui-monospace, monospace", color: "#f1fa8c",
                    fontSize: 10.5, marginRight: 6, fontWeight: 700,
                  }}>
                    udemy
                  </span>
                  {c}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 style={h3Style("#50fa7b")}>Idiomas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
              {LANGUAGES.map((l) => (
                <div key={l.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 30, height: 30, borderRadius: 8,
                          background: "rgba(40,42,54,.9)", border: "1px solid rgba(98,114,164,.5)",
                          display: "grid", placeItems: "center",
                          fontSize: 11, fontFamily: "ui-monospace, monospace",
                          color: "#f8f8f2", fontWeight: 800,
                        }}
                      >
                        {l.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontSize: 12.5, fontWeight: 700 }}>{l.name}</div>
                        <div style={{ fontSize: 10.5, fontFamily: "ui-monospace, monospace", color: "#6272a4" }}>
                          {l.level}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#f8f8f2" }}>
                      {l.percent}%
                    </div>
                  </div>
                  <div style={{
                    height: 6, background: "#282a36", borderRadius: 999,
                    border: "1px solid rgba(98,114,164,.5)", overflow: "hidden",
                  }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${l.percent}%`,
                        background: l.percent > 80
                          ? "linear-gradient(90deg,#3d7a27,#6db33f,#9ed866)"
                          : l.percent > 40
                          ? "linear-gradient(90deg,#005d7c,#007396,#2fa4c8)"
                          : "linear-gradient(90deg,#5a3ad1,#7f52ff,#a78bfa)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* COLUNA DIREITA */}
        <main
          style={{
            padding: "40px 56px 60px",
            boxSizing: "border-box",
            background:
              "linear-gradient(180deg, rgba(7,11,21,.78) 0%, rgba(15,23,42,.52) 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingBottom: 24,
              borderBottom: "3px solid #6db33f",
              marginBottom: 28,
            }}
          >
            <div>
              <h1 style={{
                fontSize: 40, fontWeight: 800, letterSpacing: -0.03,
                margin: 0, color: "#f8fafc", lineHeight: 1.1,
              }}>
                Reinaldo Barreto da Silva
              </h1>
              <p style={{
                fontSize: 13, fontFamily: "ui-monospace, monospace",
                color: "#94a3b8", marginTop: 10, marginBottom: 0,
              }}>
                Java 8+ a 21 · Spring Boot 3 · Quarkus · Legados (JSP/Struts) · Kotlin · Flutter · Docker
              </p>
            </div>
            <div style={{ textAlign: "right", fontSize: 12.5, color: "#f8fafc", display: "flex", flexDirection: "column", gap: 7 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                <Phone size={13} style={{ color: "#6db33f" }} />
                <span style={{ fontFamily: "ui-monospace, monospace" }}>55 47 98830 2308</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                <Mail size={13} style={{ color: "#6db33f" }} />
                <span>reinaldobarretosilva@gmail.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, color: "#7f52ff" }}>
                <Sparkles size={13} />
                <span>linkedin.com/in/reinaldo-barreto-2a4ba2116</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, color: "#02569b" }}>
                <Sparkles size={13} />
                <span>github.com/reinaldobarreto31</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                <MapPin size={13} style={{ color: "#6db33f" }} />
                <span>Navegantes / SC, Brasil</span>
              </div>
            </div>
          </div>

          <section style={{ marginBottom: 30 }}>
            <h3 style={h3Col2Style("#007396")}>Resumo Profissional</h3>
            <p style={pStyle}>
              Engenheiro de Software com trajetória sólida em{" "}
              <strong style={{ color: "#007396" }}>Java Enterprise</strong> &amp;{" "}
              <strong style={{ color: "#6db33f" }}>Spring Boot 3</strong> (stack principal),
              com <strong style={{ color: "#7f52ff" }}>Kotlin · Jetpack Compose</strong> para
              Android nativo em segundo lugar e <strong style={{ color: "#02569b" }}>Flutter / Dart</strong>{" "}
              em terceiro para mobile híbrido/cross-platform. Especialista em{" "}
              <strong style={{ color: "#f8fafc" }}>APIs RESTful escaláveis</strong>, microsserviços
              (Eureka · Gateway · Kafka · Keycloak) e aplicações para o setor público. Domínio de{" "}
              <strong style={{ color: "#f8fafc" }}>TDD com JUnit 5 · Mockito</strong>, documentação
              via <strong style={{ color: "#6db33f" }}>SpringDoc OpenAPI 3 / Swagger</strong> e entrega com{" "}
              <strong style={{ color: "#007396" }}>CI/CD · Docker · GitHub Actions</strong>.{" "}
              <em style={{ color: "#7f52ff" }}>Clean Architecture · Hexagonal · DDD</em> como filosofia de trabalho.
            </p>
          </section>

          <section style={{ marginBottom: 30 }}>
            <h3 style={h3Col2Style("#7f52ff")}>Objetivo Profissional</h3>
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 10,
                border: "1px solid rgba(109,179,63,.45)",
                background: "linear-gradient(135deg, rgba(109,179,63,.10), rgba(7,11,21,.92))",
                marginTop: 14,
              }}
            >
              <p style={{ ...pStyle, margin: 0, color: "#f8fafc" }}>
                Atuar como <strong style={{ color: "#6db33f" }}>Engenheiro de Software Java / Spring Boot</strong>{" "}
                em produto de alto impacto — com <strong style={{ color: "#7f52ff" }}>Kotlin Android</strong>{" "}
                e <strong style={{ color: "#02569b" }}>Flutter Mobile</strong> como diferenciais.
                Contribuir com arquitetura limpa, APIs RESTful robustas, testes JUnit/Mockito,
                documentação OpenAPI 3 e entrega contínua em produção.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: 32 }}>
            <h3 style={h3Col2Style("#007396")}>Experiência Profissional</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 18 }}>
              {EXPERIENCES.map((exp) => (
                <article
                  key={exp.company}
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    border: "1px solid rgba(30,58,138,.55)",
                    background: "rgba(7,11,21,.95)",
                    borderLeft: "3px solid #6db33f",
                    boxShadow: "0 10px 26px rgba(0,0,0,.35), inset 0 1px rgba(255,255,255,.04)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "#6db33f" }}>
                        {exp.company}
                      </h4>
                      <h5 style={{ fontSize: 13, fontWeight: 700, color: "#7f52ff", margin: "6px 0 0" }}>
                        {exp.role}
                      </h5>
                    </div>
                    <div style={{ textAlign: "right", fontSize: 11.5, fontFamily: "ui-monospace, monospace", color: "#6272a4", display: "flex", flexDirection: "column", gap: 5 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
                        <CalendarDays size={12} style={{ color: "#f89820" }} />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
                        <MapPin size={12} style={{ color: "#8be9fd" }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ ...pStyle, marginTop: 12, marginBottom: 0, fontSize: 12.5 }}>
                    {exp.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                    {exp.tags.map((t) => (
                      <span
                        key={t.name}
                        style={{
                          padding: "3px 9px",
                          borderRadius: 5,
                          border: "1px solid rgba(98,114,164,.55)",
                          background: "rgba(68,71,90,.55)",
                          color: "#f8f8f2",
                          fontSize: 10.5,
                          fontFamily: "ui-monospace, monospace",
                          fontWeight: 600,
                        }}
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h3 style={h3Col2Style("#7f52ff")}>Projetos Pessoais</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 18 }}>
              {PERSONAL_PROJECTS.map((p) => (
                <article
                  key={p.title}
                  style={{
                    padding: 18,
                    borderRadius: 10,
                    border: "1px solid rgba(30,58,138,.55)",
                    background:
                      "linear-gradient(145deg, rgba(15,23,42,.82), rgba(7,11,21,.94))",
                    borderLeft:
                      p.badge === "LIVE"
                        ? "3px solid #50fa7b"
                        : p.badge === "DESTAQUE"
                        ? "3px solid #6db33f"
                        : p.badge === "EM CONSTRUÇÃO"
                        ? "3px solid #7f52ff"
                        : "3px solid #f89820",
                    boxShadow: "0 10px 24px rgba(0,0,0,.32), inset 0 1px rgba(255,255,255,.035)",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <h4 style={{ fontSize: 14, fontWeight: 800, margin: 0, color: "#f8fafc" }}>
                        {p.title.split("—")[0]}
                        {p.title.includes("—") && (
                          <span style={{ color: "#94a3b8", fontWeight: 500 }}> — {p.title.split("—")[1]}</span>
                        )}
                      </h4>
                      <p style={{
                        fontSize: 11.5, fontFamily: "ui-monospace, monospace",
                        color: "#f89820", marginTop: 5, marginBottom: 0,
                      }}>
                        {p.stack}
                      </p>
                    </div>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 5,
                        fontSize: 10,
                        fontWeight: 900,
                        fontFamily: "ui-monospace, monospace",
                        letterSpacing: 0.5,
                        background:
                          p.badge === "LIVE"
                            ? "rgba(80,250,123,.92)"
                            : p.badge === "DESTAQUE"
                            ? "rgba(109,179,63,.96)"
                            : p.badge === "EM CONSTRUÇÃO"
                            ? "rgba(127,82,255,.95)"
                            : "rgba(248,152,32,.95)",
                        color: "#071121",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 12px rgba(0,0,0,.28)",
                        flexShrink: 0,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p style={{ ...pStyle, marginTop: 10, marginBottom: 0, fontSize: 12 }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 8px",
                          borderRadius: 5,
                          border: "1px solid rgba(30,58,138,.55)",
                          background: "rgba(15,23,42,.55)",
                          color: "#f8fafc",
                          fontSize: 10.5,
                          fontFamily: "ui-monospace, monospace",
                          fontWeight: 600,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div style={{
            marginTop: 36, paddingTop: 16, borderTop: "1px solid rgba(30,58,138,.55)",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
            fontSize: 10.5, fontFamily: "ui-monospace, monospace", color: "#94a3b8",
          }}>
            <div>
              <span style={{ color: "#6db33f", fontWeight: 700 }}>♥</span> Java · Spring Boot · Kotlin · Flutter · Clean Arch · TDD · OpenAPI 3 · CI/CD
            </div>
            <div>
              Stack image export: <span style={{ color: "#6db33f" }}>pdf-lib</span> ·{" "}
              <span style={{ color: "#7f52ff" }}>pdf.js</span> ·{" "}
              <span style={{ color: "#007396" }}>html2canvas</span> ·{" "}
              <span style={{ color: "#6db33f" }}>Tema Profissional Java/Spring #6db33f · Kotlin #7f52ff · Flutter #02569b</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
});

ResumeExporter.displayName = "ResumeExporter";

function h3Style(color: string): React.CSSProperties {
  return {
    fontSize: 12,
    fontWeight: 800,
    fontFamily: "ui-monospace, monospace",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color,
    margin: 0,
    paddingBottom: 8,
    borderBottom: `2px solid ${color}`,
  };
}

function h3Col2Style(color: string): React.CSSProperties {
  return {
    fontSize: 13,
    fontWeight: 800,
    fontFamily: "ui-monospace, monospace",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color,
    margin: 0,
    paddingBottom: 8,
    borderBottom: `2px solid ${color}`,
  };
}

const pStyle: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.7,
  color: "#6272a4",
  marginTop: 14,
  marginBottom: 0,
};

function ContactRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#f8f8f2" }}>
      <div
        style={{
          width: 28, height: 28, borderRadius: 8, flexShrink: 0,
          background: "rgba(68,71,90,.6)",
          border: "1px solid rgba(98,114,164,.5)",
          display: "grid", placeItems: "center",
          color: "#6db33f",
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 12, color: "#f8f8f2", lineHeight: 1.35, wordBreak: "break-all" }}>
        {text}
      </span>
    </div>
  );
}
