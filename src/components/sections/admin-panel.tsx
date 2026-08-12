import React, { useState, useMemo, useRef } from "react";
import {
  X, Save, Plus, Trash2, ArrowUp, ArrowDown, FileJson, RotateCcw,
  Sparkles, Package, TerminalSquare, Rocket, Globe, Github, Upload, Image as ImageIcon, Check, Copy
} from "lucide-react";
import {
  SiPostgresql, SiDocker, SiGithubactions,
  SiReact, SiTypescript, SiSwagger, SiGo, SiJavascript, SiNodedotjs,
  SiMysql, SiMongodb, SiRedis, SiLinux, SiGnubash, SiGit, SiAngular,
  SiVuedotjs, SiSpringboot, SiKubernetes, SiTailwindcss, SiVite,
  SiKotlin, SiFlutter, SiQuarkus,
} from "react-icons/si";
import { FaJava as SiJava } from "react-icons/fa6";
import { useAdminData, useAuth } from "@/lib/admin-store";
import type { AdminProject, AdminExperience, AdminAbout, AdminStackItem, ProjectTone, ProjectBadge } from "@/lib/default-data";
import { DEFAULTS } from "@/lib/default-data";
import { toast } from "sonner";

function compressAndConvertImage(file: File, maxWidth = 160, maxHeight = 160): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(e.target?.result as string);
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/png", 0.9);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Erro ao carregar imagem"));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Erro ao ler arquivo"));
    reader.readAsDataURL(file);
  });
}

function ImageUploader({
  customIconUrl,
  onChange,
  label = "Upload de Ícone / Logo Personalizado",
}: {
  customIconUrl?: string;
  onChange: (url?: string) => void;
  label?: string;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    try {
      const dataUrl = await compressAndConvertImage(file, 160, 160);
      onChange(dataUrl);
      toast.success("Imagem carregada e otimizada com sucesso!");
    } catch {
      toast.error("Erro ao processar imagem.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2 col-span-2 bg-[#e0e5ec] p-3 rounded-xl border border-white/80 shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff]">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2f855a] flex items-center gap-1.5">
          <Upload size={13} /> {label}
        </label>
        {customIconUrl && (
          <button
            type="button"
            onClick={() => onChange(undefined)}
            className="text-[10px] font-mono text-[#e44857] hover:underline"
          >
            remover imagem
          </button>
        )}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          className="neo-button text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold"
        >
          <Upload size={13} /> {loading ? "Otimizando..." : "Upload Arquivo (PNG, SVG, JPG)"}
        </button>
        <span className="text-xs text-muted-foreground font-mono">ou URL:</span>
        <input
          type="text"
          value={customIconUrl || ""}
          onChange={(e) => onChange(e.target.value || undefined)}
          placeholder="https://... (ex: raw.githubusercontent.com/...)"
          className="inp flex-1 min-w-[180px] text-xs"
        />
      </div>
      {customIconUrl && (
        <div className="flex items-center gap-2.5 pt-1">
          <span className="text-[10.5px] font-mono text-muted-foreground">Prévia em tela:</span>
          <div className="w-10 h-10 rounded-lg bg-card border border-border p-1 grid place-items-center shadow-sm">
            <img src={customIconUrl} alt="Preview" className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] font-mono text-[#2f855a]">✓ Imagem leve otimizada</span>
        </div>
      )}
    </div>
  );
}

type Props = { open: boolean; onClose: () => void };

const TONES: ProjectTone[] = [
  "tech-java", "tech-spring", "tech-quarkus", "tech-kotlin", "tech-flutter",
  "tech-node", "tech-next", "tech-js", "tech-vue", "tech-angular", "tech-react", "tech-ts",
  "tech-postgres", "tech-mysql", "tech-redis", "tech-mongo", "tech-docker", "tech-actions",
  "tech-openapi", "tech-pdf", "tech-api", "tech-git", "tech-linux", "tech-bash", "tech-tailwind", "tech-vite",
  "tech-jwt", "tech-golang",
];
const BADGES: (ProjectBadge | "")[] = ["", "DESTAQUE", "EM CONSTRUÇÃO", "LIVE", "API", "FULL-STACK"];

const ICON_OPTIONS = [
  { key: "java", label: "Java", icon: SiJava },
  { key: "spring", label: "Spring Boot", icon: SiSpringboot },
  { key: "quarkus", label: "Quarkus", icon: SiQuarkus },
  { key: "kotlin", label: "Kotlin", icon: SiKotlin },
  { key: "flutter", label: "Flutter", icon: SiFlutter },
  { key: "node", label: "Node.js", icon: SiNodedotjs },
  { key: "next", label: "Next.js", icon: SiNodedotjs },
  { key: "js", label: "JavaScript", icon: SiJavascript },
  { key: "ts", label: "TypeScript", icon: SiTypescript },
  { key: "vue", label: "Vue.js", icon: SiVuedotjs },
  { key: "angular", label: "Angular", icon: SiAngular },
  { key: "react", label: "React", icon: SiReact },
  { key: "sparkles", label: "Sparkles (PDF)", icon: Sparkles },
  { key: "swagger", label: "Swagger", icon: SiSwagger },
  { key: "postgres", label: "PostgreSQL", icon: SiPostgresql },
  { key: "mysql", label: "MySQL", icon: SiMysql },
  { key: "redis", label: "Redis", icon: SiRedis },
  { key: "mongo", label: "MongoDB", icon: SiMongodb },
  { key: "docker", label: "Docker", icon: SiDocker },
  { key: "k8s", label: "K8s", icon: SiKubernetes },
  { key: "actions", label: "GitHub Actions", icon: SiGithubactions },
  { key: "tailwind", label: "Tailwind", icon: SiTailwindcss },
  { key: "vite", label: "Vite", icon: SiVite },
  { key: "linux", label: "Linux", icon: SiLinux },
  { key: "bash", label: "Bash", icon: SiGnubash },
  { key: "git", label: "Git", icon: SiGit },
  { key: "go", label: "Go", icon: SiGo },
  { key: "package", label: "Package (Stock)", icon: Package },
  { key: "rocket", label: "Rocket", icon: Rocket },
  { key: "terminal", label: "Terminal", icon: TerminalSquare },
  { key: "github", label: "GitHub", icon: Github },
  { key: "globe", label: "Globe", icon: Globe },
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = ICON_OPTIONS.reduce(
  (acc, opt) => ({ ...acc, [opt.key]: opt.icon }),
  {} as Record<string, React.ComponentType<any>>,
);

function IconByKey({ k, customUrl, size = 18, className }: { k: string; customUrl?: string; size?: number; className?: string }) {
  if (customUrl) {
    return <img src={customUrl} alt="Icon" style={{ width: size, height: size, objectFit: "contain" }} className={className} />;
  }
  const Cmp = ICON_MAP[k] ?? Sparkles;
  return <Cmp size={size} className={className} />;
}

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

type Tab = "projects" | "experiences" | "about" | "stack";

export function AdminPanel({ open, onClose }: Props) {
  const { data, update, resetAll } = useAdminData();
  const { logout } = useAuth();
  const [tab, setTab] = useState<Tab>("projects");
  const [flash, setFlash] = useState<string | null>(null);

  if (!open) return null;

  function done(msg: string) {
    toast.success(msg);
    setFlash(msg);
    setTimeout(() => setFlash(null), 2200);
  }

  function jsonExport() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm p-2 sm:p-6 md:p-10 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative mx-auto w-full max-w-6xl bg-[#e0e5ec] border border-white/90 rounded-2xl shadow-[12px_12px_30px_#b8c1ec,-12px_-12px_30px_#ffffff] overflow-hidden text-foreground">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-4 md:p-5 border-b border-border/60 bg-[linear-gradient(135deg,rgba(47,133,90,.12),rgba(224,229,236,.9))]">
          <div>
            <div className="flex items-center gap-2 text-[#2f855a] font-bold font-mono text-xs uppercase tracking-wider">
              <Save size={15} /> Painel Administrativo — Portfolio Java · Spring · Kotlin · Flutter
            </div>
            <h2 className="text-foreground text-lg md:text-xl font-bold mt-1">Editar portfólio sem mexer no código</h2>
            <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
              Os dados são salvos em <code className="bg-[#e0e5ec] px-1.5 py-0.5 rounded border border-white/80 shadow-[inset_2px_2px_4px_#b8c1ec,inset_-2px_-2px_4px_#ffffff]">localStorage</code> e refletidos no portfólio em tempo real (como GIF).
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {flash && (
              <span className="text-[11px] font-mono font-semibold text-[#2f855a] bg-[#e0e5ec] border border-white/80 shadow-[inset_2px_2px_4px_#b8c1ec,inset_-2px_-2px_4px_#ffffff] px-2.5 py-1 rounded-lg">
                ✓ {flash}
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                if (confirm("Restaurar portfólio aos valores padrão (apaga suas edições)?")) {
                  resetAll();
                  done("Portfólio restaurado aos padrões.");
                }
              }}
              className="flex items-center gap-1.5 text-[11px] font-semibold rounded-lg px-2.5 py-1.5 bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff] text-muted-foreground hover:text-foreground"
            >
              <RotateCcw size={13} /> Resetar
            </button>
            <button
              type="button"
              onClick={jsonExport}
              className="flex items-center gap-1.5 text-[11px] font-semibold rounded-lg px-2.5 py-1.5 bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff] text-[#0284c7] hover:text-foreground"
            >
              <FileJson size={13} /> Exportar JSON
            </button>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1.5 text-[11px] font-semibold rounded-lg px-2.5 py-1.5 bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff] text-[#7c3aed] hover:bg-[#7c3aed]/10"
            >
              Sair Admin
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1 rounded-lg w-9 h-9 justify-center bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff] text-muted-foreground hover:text-foreground"
              aria-label="Fechar painel admin"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 md:gap-2 px-3 md:px-4 py-3 border-b border-border/50 overflow-x-auto bg-[#e0e5ec]">
          {(["projects", "experiences", "about", "stack"] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                tab === t
                  ? "bg-[#2f855a] text-white border-transparent shadow-[4px_4px_10px_rgba(47,133,90,0.35)]"
                  : "bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff] text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "projects" && "🧰 Projetos"}
              {t === "experiences" && "💼 Experiências"}
              {t === "about" && "📝 Sobre / Skills"}
              {t === "stack" && "🧱 Stack / Tecnologias"}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="max-h-[78vh] overflow-y-auto p-3 md:p-5">
          {tab === "projects" && <ProjectsTab done={done} data={data} update={update} />}
          {tab === "experiences" && <ExperiencesTab done={done} data={data} update={update} />}
          {tab === "about" && <AboutTab done={done} data={data} update={update} />}
          {tab === "stack" && <StackTab done={done} data={data} update={update} />}
        </div>
      </div>
    </div>
  );
}

/* ---------------- PROJETOS ---------------- */

function ProjectsTab({
  done, data, update,
}: { done: (m: string) => void; data: ReturnType<typeof useAdminData>["data"]; update: ReturnType<typeof useAdminData>["update"] }) {
  const featured = data.projects.filter((p) => p.featured);
  const secondary = data.projects.filter((p) => !p.featured);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<AdminProject | null>(null);

  function startAdd(isFeatured: boolean) {
    const p: AdminProject = {
      id: uid(), title: "Novo Projeto", subtitle: "Breve subtítulo",
      description: "Descreva o projeto aqui.",
      tech: ["Java 17", "Spring Boot 3"], icon: "spring", tone: "tech-spring",
      github: "https://github.com/reinaldobarreto31/",
      badge: "API", featured: isFeatured,
    };
    setEditingId(p.id); setDraft(p);
  }
  function startEdit(p: AdminProject) { setEditingId(p.id); setDraft({ ...p, tech: [...p.tech] }); }
  function cancel() { setEditingId(null); setDraft(null); }

  function persist() {
    if (!draft) return;
    const exists = data.projects.some((p) => p.id === draft.id);
    const next = exists
      ? data.projects.map((p) => (p.id === draft.id ? draft : p))
      : [...data.projects, draft];
    update({ projects: next });
    done(exists ? "Projeto atualizado no portfólio." : "Projeto criado no portfólio.");
    setEditingId(null); setDraft(null);
  }

  function remove(id: string) {
    if (!confirm("Remover este projeto do portfólio?")) return;
    update({ projects: data.projects.filter((p) => p.id !== id) });
    done("Projeto removido.");
    if (editingId === id) cancel();
  }

  function move(id: string, dir: -1 | 1, featured: boolean) {
    const arr = (featured ? featured : secondary).slice();
    const i = arr.findIndex((p) => p.id === id); if (i < 0) return;
    const j = i + dir; if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    const otherGroup = data.projects.filter((p) => (p.featured ? !featured : featured));
    const full = featured ? [...arr, ...otherGroup] : [...otherGroup, ...arr];
    update({ projects: full });
  }

  return (
    <div className="space-y-8">
      <GroupBlock
        title="Projetos em destaque (3 cards grandes no topo)"
        badge="DESTAQUES"
        onAdd={() => startAdd(true)}
      >
        {featured.length === 0 && <EmptyHint onAdd={() => startAdd(true)} text="Nenhum projeto em destaque. Clique em + NOVO para adicionar." />}
        {featured.map((p, idx) => (
          <ProjectRow
            key={p.id} p={p} index={idx} total={featured.length}
            editing={editingId === p.id} draft={editingId === p.id ? draft! : null}
            setDraft={setDraft} startEdit={() => startEdit(p)} cancel={cancel}
            persist={persist} remove={() => remove(p.id)}
            moveUp={() => move(p.id, -1, true)} moveDown={() => move(p.id, +1, true)}
          />
        ))}
      </GroupBlock>

      <GroupBlock
        title="Projetos secundários (cards menores, abaixo dos destaques)"
        badge="OUTROS"
        onAdd={() => startAdd(false)}
      >
        {secondary.length === 0 && <EmptyHint onAdd={() => startAdd(false)} text="Nenhum projeto secundário ainda." />}
        {secondary.map((p, idx) => (
          <ProjectRow
            key={p.id} p={p} index={idx} total={secondary.length}
            editing={editingId === p.id} draft={editingId === p.id ? draft! : null}
            setDraft={setDraft} startEdit={() => startEdit(p)} cancel={cancel}
            persist={persist} remove={() => remove(p.id)}
            moveUp={() => move(p.id, -1, false)} moveDown={() => move(p.id, +1, false)}
          />
        ))}
      </GroupBlock>

      {editingId && !data.projects.some((p) => p.id === editingId) && draft && (
        <div className="border border-dashed border-[#2f855a]/50 rounded-xl p-3 bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff]">
          <div className="text-xs font-bold text-[#2f855a] mb-2 font-mono uppercase">⬇ Rascunho — novo projeto (clique em SALVAR para gravar)</div>
          <ProjectForm draft={draft} setDraft={setDraft} onCancel={cancel} onSave={persist} saving />
        </div>
      )}
    </div>
  );
}

function GroupBlock({
  title, badge, onAdd, children,
}: { title: string; badge: string; onAdd: () => void; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-[#2f855a]/12 border border-[#2f855a]/40 text-[10px] font-mono font-bold tracking-wider text-[#2f855a]">{badge}</span>
          <h3 className="text-foreground font-bold">{title}</h3>
        </div>
        <button
          type="button" onClick={onAdd}
          className="inline-flex items-center gap-1.5 neo-button rounded-lg px-3 py-1.5 text-xs font-semibold"
        >
          <Plus size={13} /> Novo projeto
        </button>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function EmptyHint({ text, onAdd }: { text: string; onAdd: () => void }) {
  return (
    <div className="border border-dashed border-border/80 rounded-xl p-4 flex items-center justify-between gap-3 bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff]">
      <span className="text-sm text-muted-foreground">{text}</span>
      <button type="button" onClick={onAdd} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#e0e5ec] border border-white/80 shadow-[2px_2px_5px_#b8c1ec,-2px_-2px_5px_#ffffff] text-xs font-semibold">
        <Plus size={12} /> Adicionar
      </button>
    </div>
  );
}

function ProjectRow({
  p, index, total, editing, draft, setDraft, startEdit, cancel, persist, remove, moveUp, moveDown,
}: {
  p: AdminProject; index: number; total: number; key?: string;
  editing: boolean; draft: AdminProject | null; setDraft: (d: AdminProject) => void;
  startEdit: () => void; cancel: () => void; persist: () => void; remove: () => void;
  moveUp: () => void; moveDown: () => void;
}) {
  return (
    <div className="border border-white/80 bg-[#e0e5ec] shadow-[6px_6px_14px_#b8c1ec,-6px_-6px_14px_#ffffff] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border/40 bg-white/30">
        <div className="flex items-center gap-2 min-w-0">
          <div className={`w-9 h-9 shrink-0 rounded-lg grid place-items-center ${p.tone}`} style={{ background: "color-mix(in srgb, var(--tech-color,#fff) 14%, transparent)", boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--tech-color,#fff) 35%, transparent)" }}>
            <IconByKey k={p.icon} size={18} />
          </div>
          <div className="min-w-0">
            <div className="text-foreground font-semibold truncate">
              <span className="text-[10.5px] font-mono text-muted-foreground mr-2">#{String(index + 1).padStart(2, "0")}</span>
              {p.title}
            </div>
            <div className="text-[11.5px] text-muted-foreground truncate">{p.subtitle}</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button type="button" onClick={moveUp} disabled={index === 0} title="Mover para cima" className="w-7 h-7 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent"><ArrowUp size={14} /></button>
          <button type="button" onClick={moveDown} disabled={index === total - 1} title="Mover para baixo" className="w-7 h-7 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent"><ArrowDown size={14} /></button>
          <button type="button" onClick={startEdit} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold border border-[#0284c7]/60 text-[#0284c7] hover:bg-[#0284c7]/10">Editar</button>
          <button type="button" onClick={remove} className="w-7 h-7 grid place-items-center rounded-md text-[#dc2626] hover:bg-[#dc2626]/10"><Trash2 size={14} /></button>
        </div>
      </div>
      {editing && draft ? (
        <div className="p-3">
          <ProjectForm draft={draft} setDraft={setDraft} onCancel={cancel} onSave={persist} />
        </div>
      ) : (
        <div className="px-3 py-2.5 grid md:grid-cols-3 gap-3 text-[12px]">
          <div>
            <div className="text-[10.5px] font-mono text-muted-foreground uppercase mb-0.5">Tecnologias</div>
            <div className="flex flex-wrap gap-1">
              {p.tech.map((t) => <span key={t} className="px-1.5 py-0.5 rounded border border-white/60 text-[10.5px] font-mono bg-[#e0e5ec] shadow-[inset_1px_1px_2px_#b8c1ec,inset_-1px_-1px_2px_#ffffff]">{t}</span>)}
            </div>
          </div>
          <div>
            <div className="text-[10.5px] font-mono text-muted-foreground uppercase mb-0.5">Links</div>
            <div className="space-y-1 text-[11.5px]">
              <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#0284c7] hover:underline"><Github size={12} /> GitHub</a>
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#2f855a] hover:underline"><Globe size={12} /> Demonstração LIVE</a>}
            </div>
          </div>
          <div>
            <div className="text-[10.5px] font-mono text-muted-foreground uppercase mb-0.5">Classificação</div>
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              <span className="px-1.5 py-0.5 rounded border border-white/60 text-[10.5px] font-mono">Tone: {p.tone}</span>
              <span className="px-1.5 py-0.5 rounded border border-white/60 text-[10.5px] font-mono">Ícone: {p.icon}</span>
              {p.badge && <span className="px-1.5 py-0.5 rounded border border-[#2f855a]/40 text-[10.5px] font-mono bg-[#2f855a]/10 text-[#2f855a] font-semibold">{p.badge}</span>}
              {p.featured && <span className="px-1.5 py-0.5 rounded border border-[#d97706]/50 text-[10.5px] font-mono bg-[#d97706]/10 text-[#d97706] font-semibold">★ DESTAQUE</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectForm({
  draft, setDraft, onCancel, onSave, saving = false,
}: {
  draft: AdminProject; setDraft: (d: AdminProject) => void;
  onCancel: () => void; onSave: () => void; saving?: boolean;
}) {
  const [techStr, setTechStr] = useState(draft.tech.join(", "));

  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Field label="Título">
        <input className="inp" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
      </Field>
      <Field label="Subtítulo (label em cima do título no card)">
        <input className="inp" value={draft.subtitle} onChange={(e) => setDraft({ ...draft, subtitle: e.target.value })} />
      </Field>
      <Field label="GitHub (link)">
        <input className="inp" value={draft.github} onChange={(e) => setDraft({ ...draft, github: e.target.value })} />
      </Field>
      <Field label="Demonstração LIVE (URL — opcional)">
        <input className="inp" value={draft.live ?? ""} onChange={(e) => setDraft({ ...draft, live: e.target.value || undefined })} />
      </Field>
      <Field label="Tecnologias (separadas por vírgula)">
        <input className="inp" value={techStr} onChange={(e) => {
          setTechStr(e.target.value);
          setDraft({ ...draft, tech: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) });
        }} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Badge (canto superior direito)">
          <select className="inp" value={draft.badge ?? ""} onChange={(e) => setDraft({ ...draft, badge: (e.target.value as ProjectBadge | "") || undefined })}>
            {BADGES.map((b) => <option key={b || "nenhum"} value={b}>{b || "— Nenhum —"}</option>)}
          </select>
        </Field>
        <Field label="Ícone principal do card">
          <select className="inp" value={draft.icon} onChange={(e) => setDraft({ ...draft, icon: e.target.value })}>
            {ICON_OPTIONS.map((i) => <option key={i.key} value={i.key}>{i.label}</option>)}
          </select>
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Tone / cor predominante (faixa + sombra)">
          <select className="inp" value={draft.tone} onChange={(e) => setDraft({ ...draft, tone: e.target.value as ProjectTone })}>
            {TONES.map((t) => <option key={t} value={t}>{t.replace("tech-", "")}</option>)}
          </select>
        </Field>
        <Field label="Destaque? (card grande no topo)">
          <label className="h-10 inp flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" checked={!!draft.featured} onChange={(e) => setDraft({ ...draft, featured: e.target.checked })} className="w-4 h-4" />
            <span className="text-xs">Sim, colocar em Projetos em destaque</span>
          </label>
        </Field>
      </div>
      <ImageUploader
        customIconUrl={draft.customIconUrl}
        onChange={(url) => setDraft({ ...draft, customIconUrl: url })}
        label="Imagem / Logotipo Personalizado do Projeto (opcional)"
      />
      <Field label="Descrição completa (texto do card)" span={2}>
        <textarea rows={4} className="inp" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
      </Field>
      <Field label="Prévia do ícone / tone" span={2}>
        <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 border ${draft.tone}`} style={{ background: "color-mix(in srgb, var(--tech-color,#fff) 12%, #101117)", boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--tech-color,#fff) 35%, transparent)" }}>
          <IconByKey k={draft.icon} customUrl={draft.customIconUrl} size={22} />
          <div>
            <div className="text-white text-sm font-bold">{draft.title}</div>
            <div className="text-[10.5px] font-mono" style={{ color: "var(--tech-color,#fff)" }}>{draft.subtitle}</div>
          </div>
          {draft.badge && <span className="ml-3 px-2 py-0.5 rounded-md bg-[#6db33f]/15 border border-[#6db33f]/40 text-[10px] font-bold text-[#9ed866]">{draft.badge}</span>}
        </div>
      </Field>

      <div className="md:col-span-2 flex items-center justify-end gap-2 pt-1">
        <button type="button" onClick={onCancel} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#44475a]/70 text-muted-foreground hover:text-white hover:border-white/40">Cancelar</button>
        <button type="button" onClick={onSave} className="neo-button px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5">
          <Save size={13} /> {saving ? "Salvar no portfólio" : "Atualizar no portfólio"}
        </button>
      </div>
    </div>
  );
}

function Field({ label, children, span = 1 }: { label: string; children: React.ReactNode; span?: 1 | 2 }) {
  return (
    <div className={span === 2 ? "md:col-span-2" : ""}>
      <label className="block text-[10.5px] uppercase tracking-wider font-mono text-muted-foreground mb-1">{label}</label>
      <style>{`.inp{width:100%;padding:8px 10px;border-radius:.5rem;background:#101117;border:1px solid #44475a80;color:#f8f8f2;font:inherit;outline:none}.inp:focus{border-color:rgba(109,179,63,.7);box-shadow:0 0 0 3px rgba(109,179,63,.18)}.inp::placeholder{color:#6272a4}`}</style>
      {children}
    </div>
  );
}

/* ---------------- EXPERIENCIAS ---------------- */

function ExperiencesTab({ done, data, update }: { done: (m: string) => void; data: any; update: any }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<AdminExperience | null>(null);

  function startAdd() {
    const e: AdminExperience = {
      id: uid(), company: "Nova Empresa", role: "Cargo / Função",
      period: "jan/2024 – atual", location: "Cidade / UF",
      description: "Descreva o que você fez nesta empresa...",
      tags: [{ name: "Java", tone: "tech-java" }, { name: "Spring Boot", tone: "tech-spring" }, { name: "Kotlin", tone: "tech-kotlin" }],
    };
    setEditingId(e.id); setDraft(e);
  }
  function startEdit(e: AdminExperience) { setEditingId(e.id); setDraft({ ...e, tags: e.tags.map((t) => ({ ...t })) }); }
  function cancel() { setEditingId(null); setDraft(null); }
  function persist() {
    if (!draft) return;
    const exists = data.experiences.some((x: AdminExperience) => x.id === draft.id);
    const next = exists ? data.experiences.map((x: AdminExperience) => (x.id === draft.id ? draft : x)) : [...data.experiences, draft];
    update({ experiences: next });
    done(exists ? "Experiência profissional atualizada." : "Experiência profissional adicionada.");
    cancel();
  }
  function remove(id: string) {
    if (!confirm("Remover esta experiência?")) return;
    update({ experiences: data.experiences.filter((x: AdminExperience) => x.id !== id) });
    done("Experiência removida.");
    if (editingId === id) cancel();
  }
  function move(id: string, dir: -1 | 1) {
    const arr: AdminExperience[] = data.experiences.slice();
    const i = arr.findIndex((x) => x.id === id); if (i < 0) return;
    const j = i + dir; if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    update({ experiences: arr });
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-white font-bold">💼 Experiências Profissionais (ordem da mais recente para a mais antiga)</h3>
        <button type="button" onClick={startAdd} className="inline-flex items-center gap-1.5 neo-button rounded-lg px-3 py-1.5 text-xs font-semibold"><Plus size={13} /> Nova experiência</button>
      </div>

      {data.experiences.length === 0 && <EmptyHint text="Sem experiências cadastradas." onAdd={startAdd} />}

      {draft && editingId && !data.experiences.some((x: AdminExperience) => x.id === editingId) && (
        <div className="border border-dashed border-[#2f855a]/50 rounded-xl p-3 bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff]">
          <div className="text-xs font-bold text-[#2f855a] mb-2 font-mono uppercase">⬇ Rascunho — nova experiência</div>
          <ExperienceForm draft={draft} setDraft={setDraft} onCancel={cancel} onSave={persist} />
        </div>
      )}

      {data.experiences.map((e: AdminExperience, idx: number) => (
        <div key={e.id} className="border border-white/80 bg-[#e0e5ec] shadow-[6px_6px_14px_#b8c1ec,-6px_-6px_14px_#ffffff] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-border/40 bg-white/30">
            <div className="min-w-0">
              <div className="text-foreground font-semibold truncate">
                <span className="text-[10.5px] font-mono text-muted-foreground mr-2">#{String(idx + 1).padStart(2, "0")}</span>
                {e.role}
              </div>
              <div className="text-[11.5px] text-[#2f855a] font-semibold truncate">{e.company} · <span className="text-muted-foreground font-normal">{e.period} · {e.location}</span></div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button type="button" onClick={() => move(e.id, -1)} disabled={idx === 0} className="w-7 h-7 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 disabled:opacity-30"><ArrowUp size={14} /></button>
              <button type="button" onClick={() => move(e.id, +1)} disabled={idx === data.experiences.length - 1} className="w-7 h-7 grid place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 disabled:opacity-30"><ArrowDown size={14} /></button>
              <button type="button" onClick={() => startEdit(e)} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold border border-[#0284c7]/60 text-[#0284c7] hover:bg-[#0284c7]/10">Editar</button>
              <button type="button" onClick={() => remove(e.id)} className="w-7 h-7 grid place-items-center rounded-md text-[#dc2626] hover:bg-[#dc2626]/10"><Trash2 size={14} /></button>
            </div>
          </div>
          {editingId === e.id && draft ? (
            <div className="p-3"><ExperienceForm draft={draft} setDraft={setDraft} onCancel={cancel} onSave={persist} /></div>
          ) : (
            <div className="p-3 text-[12.5px]">
              <p className="text-[#d9dae0] leading-relaxed whitespace-pre-wrap">{e.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {e.tags.map((t, i) => (
                  <span key={`${t.name}-${i}`} className={`px-2 py-0.5 rounded border text-[10.5px] font-mono ${t.tone}`} style={{ background: "color-mix(in srgb, var(--tech-color,#fff) 18%, transparent)", borderColor: "color-mix(in srgb, var(--tech-color,#fff) 40%, transparent)", color: "var(--tech-color,#fff)" }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ExperienceForm({
  draft, setDraft, onCancel, onSave,
}: { draft: AdminExperience; setDraft: (d: AdminExperience) => void; onCancel: () => void; onSave: () => void }) {
  function setTag(i: number, patch: Partial<{ name: string; tone: ProjectTone }>) {
    const tags = draft.tags.slice();
    tags[i] = { ...tags[i], ...patch };
    setDraft({ ...draft, tags });
  }
  function removeTag(i: number) { setDraft({ ...draft, tags: draft.tags.filter((_, k) => k !== i) }); }
  function addTag() { setDraft({ ...draft, tags: [...draft.tags, { name: "Nova tech", tone: "tech-spring" }] }); }

  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Field label="Empresa"><input className="inp" value={draft.company} onChange={(e) => setDraft({ ...draft, company: e.target.value })} /></Field>
      <Field label="Cargo / Função"><input className="inp" value={draft.role} onChange={(e) => setDraft({ ...draft, role: e.target.value })} /></Field>
      <Field label="Período (ex: mar/2024 – set/2024)"><input className="inp" value={draft.period} onChange={(e) => setDraft({ ...draft, period: e.target.value })} /></Field>
      <Field label="Localização (ex: Salvador / BA)"><input className="inp" value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })} /></Field>
      <Field label="Descrição das atividades" span={2}>
        <textarea rows={5} className="inp" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
      </Field>
      <Field label="Tags de tecnologias (com tom / cor própria)" span={2}>
        <div className="space-y-2">
          {draft.tags.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <input className="inp" style={{ maxWidth: "45%" }} value={t.name} onChange={(e) => setTag(i, { name: e.target.value })} placeholder="Nome da tech" />
              <select className="inp" style={{ maxWidth: "35%" }} value={t.tone} onChange={(e) => setTag(i, { tone: e.target.value as ProjectTone })}>
                {TONES.map((x) => <option key={x} value={x}>{x.replace("tech-", "")}</option>)}
              </select>
              <button type="button" onClick={() => removeTag(i)} className="w-9 h-9 shrink-0 grid place-items-center rounded-lg text-[#e44857] hover:bg-[#7f52ff]/10 border border-[#7f52ff]/35"><Trash2 size={14} /></button>
            </div>
          ))}
          <button type="button" onClick={addTag} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#44475a]/70 text-xs font-semibold text-muted-foreground hover:text-white hover:border-white/40"><Plus size={12} /> Adicionar tag de tecnologia</button>
        </div>
      </Field>
      <div className="md:col-span-2 flex items-center justify-end gap-2 pt-1">
        <button type="button" onClick={onCancel} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#44475a]/70 text-muted-foreground hover:text-white hover:border-white/40">Cancelar</button>
        <button type="button" onClick={onSave} className="neo-button px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5"><Save size={13} /> Salvar experiência</button>
      </div>
    </div>
  );
}

/* ---------------- SOBRE ---------------- */

function AboutTab({ done, data, update }: { done: (m: string) => void; data: any; update: any }) {
  const about: AdminAbout = data.about;
  const [skillsCsv, setSkillsCsv] = useState(about.skills.map((s: any) => `${s.name}|${s.level}|${s.color}|${s.icon}`).join("\n"));
  const [methodsText, setMethodsText] = useState(about.methodologies.join(", "));
  const [practicesText, setPracticesText] = useState(about.practices.join(", "));

  function saveAbout() {
    const skills = skillsCsv
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line) => {
        const [name, levelS, color, icon] = line.split("|").map((s) => s.trim());
        const level = Math.max(0, Math.min(100, Number(levelS) || 0));
        return {
          name: name || "Skill",
          level,
          color: color || "#6db33f",
          icon: icon || "spring",
        };
      });
    const methodologies = methodsText.split(",").map((s) => s.trim()).filter(Boolean);
    const practices = practicesText.split(",").map((s) => s.trim()).filter(Boolean);
    update({ about: { ...about, skills, methodologies, practices } });
    done("Seção Sobre atualizada no portfólio.");
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Field label="Resumo profissional (sobre você)" span={2}>
        <textarea rows={4} className="inp" value={about.summary} onChange={(e) => update({ about: { ...about, summary: e.target.value } })} />
      </Field>
      <Field label="Objetivo profissional" span={2}>
        <textarea rows={2} className="inp" value={about.objective} onChange={(e) => update({ about: { ...about, objective: e.target.value } })} />
      </Field>
      <Field label="Habilidades técnicas (formato: Nome | Nível % | Cor Hex | Ícone)" span={2}>
        <textarea rows={10} className="inp font-mono text-[11.5px]" spellCheck={false}
          value={skillsCsv} onChange={(e) => setSkillsCsv(e.target.value)} />
        <p className="mt-1 text-[11px] text-muted-foreground">
          Um por linha. Exemplos de ícone válido: java, spring, kotlin, flutter, postgres, react, docker, mysql, redis, openapi, etc.
        </p>
      </Field>
      <Field label="Metodologias (separadas por vírgula)">
        <input className="inp" value={methodsText} onChange={(e) => setMethodsText(e.target.value)} />
      </Field>
      <Field label="Práticas de engenharia (MVC, TDD...)">
        <input className="inp" value={practicesText} onChange={(e) => setPracticesText(e.target.value)} />
      </Field>
      <div className="md:col-span-2 flex justify-end gap-2">
        <button type="button" onClick={saveAbout} className="neo-button px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5"><Save size={13} /> Salvar seção Sobre</button>
      </div>
    </div>
  );
}

/* ---------------- STACK ---------------- */

function StackTab({ done, data, update }: { done: (m: string) => void; data: any; update: any }) {
  const stack: AdminStackItem[] = data.stack;
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<AdminStackItem | null>(null);

  function startAdd() {
    const s: AdminStackItem = { id: uid(), name: "Nova Tecnologia", icon: "spring", tone: "tech-spring", level: 80 };
    setEditingId(s.id); setDraft(s);
  }
  function startEdit(s: AdminStackItem) { setEditingId(s.id); setDraft({ ...s }); }
  function cancel() { setEditingId(null); setDraft(null); }
  function persist() {
    if (!draft) return;
    const exists = stack.some((x) => x.id === draft.id);
    const next = exists ? stack.map((x) => (x.id === draft.id ? draft : x)) : [...stack, draft];
    update({ stack: next });
    done(exists ? "Tecnologia atualizada." : "Tecnologia adicionada à Stack.");
    cancel();
  }
  function remove(id: string) {
    if (!confirm("Remover tecnologia da stack?")) return;
    update({ stack: stack.filter((x) => x.id !== id) });
    done("Tecnologia removida.");
    if (editingId === id) cancel();
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold">🧱 Stack de Tecnologias (cards com símbolos / ícones verdadeiros)</h3>
        <button type="button" onClick={startAdd} className="neo-button rounded-lg px-3 py-1.5 text-xs font-semibold inline-flex items-center gap-1.5"><Plus size={13} /> Nova tecnologia</button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {stack.map((s, i) => (
          <div key={s.id} className="border border-[#44475a]/50 bg-[#191a21] rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-3">
              <div className={`w-12 h-12 shrink-0 rounded-xl grid place-items-center ${s.tone}`} style={{ background: "color-mix(in srgb, var(--tech-color,#fff) 14%, #101117)", boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--tech-color,#fff) 35%, transparent)" }}>
                <IconByKey k={s.icon} customUrl={s.customIconUrl} size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white font-semibold truncate">#{String(i + 1).padStart(2, "0")} {s.name}</div>
                <div className="text-[11px] text-muted-foreground font-mono">{s.tone.replace("tech-", "")} · ícone {s.icon} {s.customIconUrl ? "· (custom)" : ""} · nível {s.level}%</div>
                <div className="mt-2 h-1.5 rounded-full bg-[#101117] overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${s.level}%`, background: "var(--tech-color,#6db33f)" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <button type="button" onClick={() => startEdit(s)} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold border border-[#007396]/60 text-[#42a5f5] hover:bg-[#007396]/12">Editar</button>
                <button type="button" onClick={() => remove(s.id)} className="w-full grid place-items-center py-1 rounded-md text-[#e44857] text-[11px] font-semibold hover:bg-[#7f52ff]/10 border border-transparent hover:border-[#7f52ff]/35">Remover</button>
              </div>
            </div>
            {editingId === s.id && draft && (
              <div className="p-3 border-t border-[#44475a]/50 grid grid-cols-2 gap-3">
                <Field label="Nome"><input className="inp" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} /></Field>
                <Field label="Ícone padrão">
                  <select className="inp" value={draft.icon} onChange={(e) => setDraft({ ...draft, icon: e.target.value })}>
                    {ICON_OPTIONS.map((i) => <option key={i.key} value={i.key}>{i.label}</option>)}
                  </select>
                </Field>
                <ImageUploader
                  customIconUrl={draft.customIconUrl}
                  onChange={(url) => setDraft({ ...draft, customIconUrl: url })}
                  label="Upload do Ícone Verdadeiro da Tecnologia (opcional)"
                />
                <Field label="Tone / cor predominante">
                  <select className="inp" value={draft.tone} onChange={(e) => setDraft({ ...draft, tone: e.target.value as ProjectTone })}>
                    {TONES.map((t) => <option key={t} value={t}>{t.replace("tech-", "")}</option>)}
                  </select>
                </Field>
                <Field label={`Nível de domínio (${draft.level}%)`}>
                  <input type="range" min={0} max={100} value={draft.level} onChange={(e) => setDraft({ ...draft, level: Number(e.target.value) })} className="w-full mt-3" />
                </Field>
                <div className="col-span-2 flex justify-end gap-2">
                  <button type="button" onClick={cancel} className="px-2.5 py-1 rounded-md text-[11px] font-semibold border border-[#44475a]/70 text-muted-foreground hover:text-white">Cancelar</button>
                  <button type="button" onClick={persist} className="neo-button px-2.5 py-1 rounded-md text-[11px] font-semibold inline-flex items-center gap-1"><Save size={12} /> Salvar</button>
                </div>
              </div>
            )}
          </div>
        ))}
        {editingId && draft && !stack.some((x) => x.id === editingId) && (
          <div className="md:col-span-2 border border-dashed border-[#84cc16]/50 rounded-xl p-3 bg-[#10140e]">
            <div className="text-xs font-bold text-[#84cc16] mb-2 font-mono uppercase">⬇ Rascunho — nova tecnologia</div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nome"><input className="inp" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} /></Field>
              <Field label="Ícone padrão">
                <select className="inp" value={draft.icon} onChange={(e) => setDraft({ ...draft, icon: e.target.value })}>
                  {ICON_OPTIONS.map((i) => <option key={i.key} value={i.key}>{i.label}</option>)}
                </select>
              </Field>
              <ImageUploader
                customIconUrl={draft.customIconUrl}
                onChange={(url) => setDraft({ ...draft, customIconUrl: url })}
                label="Upload do Ícone Verdadeiro da Tecnologia (opcional)"
              />
              <Field label="Tone / cor predominante">
                <select className="inp" value={draft.tone} onChange={(e) => setDraft({ ...draft, tone: e.target.value as ProjectTone })}>
                  {TONES.map((t) => <option key={t} value={t}>{t.replace("tech-", "")}</option>)}
                </select>
              </Field>
              <Field label={`Nível (${draft.level}%)`}>
                <input type="range" min={0} max={100} value={draft.level} onChange={(e) => setDraft({ ...draft, level: Number(e.target.value) })} className="w-full mt-3" />
              </Field>
              <div className="col-span-2 flex justify-end gap-2">
                <button type="button" onClick={cancel} className="px-2.5 py-1 rounded-md text-[11px] font-semibold border border-[#44475a]/70 text-muted-foreground hover:text-white">Cancelar</button>
                <button type="button" onClick={persist} className="neo-button px-2.5 py-1 rounded-md text-[11px] font-semibold inline-flex items-center gap-1"><Save size={12} /> Criar tecnologia</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
