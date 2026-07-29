import { useState, useEffect, useRef } from "react";
import {
  PlusCircle, Trash2, BarChart3, List, Github, ExternalLink,
  Download, RotateCcw, Save, AlertTriangle,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";
import { Expense, Category, CATEGORIES, categoryLabel, categoryColor } from "./types";

// ── localStorage helpers ─────────────────────────────────────────────────────
const STORAGE_KEY = "expense_tracker_data";

function loadExpenses(): Expense[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); }
  catch { return []; }
}
function saveExpenses(list: Expense[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
function storageBytes(): number {
  try { return new Blob([localStorage.getItem(STORAGE_KEY) ?? ""]).size; }
  catch { return 0; }
}

// ── seed demo data ───────────────────────────────────────────────────────────
const SEED: Expense[] = [
  { id: 1, description: "Almoço restaurante",  amount: 45.00,  category: "alimentacao", date: "2026-07-01" },
  { id: 2, description: "Uber para trabalho",  amount: 18.50,  category: "transporte",  date: "2026-07-02" },
  { id: 3, description: "Livro Ruby on Rails", amount: 89.90,  category: "educacao",    date: "2026-07-03" },
  { id: 4, description: "Academia mensal",      amount: 120.00, category: "saude",       date: "2026-07-04" },
  { id: 5, description: "Netflix",              amount: 39.90,  category: "lazer",       date: "2026-07-05" },
  { id: 6, description: "Supermercado",         amount: 210.00, category: "alimentacao", date: "2026-07-06" },
  { id: 7, description: "Ônibus mensal",        amount: 150.00, category: "transporte",  date: "2026-07-07" },
  { id: 8, description: "Curso Udemy Rails",    amount: 67.90,  category: "educacao",    date: "2026-07-08" },
];

type Tab = "list" | "charts";
type SaveState = "idle" | "saving" | "saved";

export default function App() {
  const [expenses, setExpenses]     = useState<Expense[]>(() => {
    const stored = loadExpenses();
    return stored.length > 0 ? stored : SEED;
  });
  const [tab, setTab]               = useState<Tab>("list");
  const [form, setForm]             = useState({ description: "", amount: "", category: "alimentacao" as Category });
  const [error, setError]           = useState("");
  const [saveState, setSaveState]   = useState<SaveState>("idle");
  const [confirmClear, setConfirmClear] = useState(false);
  const saveTimer                   = useRef<ReturnType<typeof setTimeout>>();

  // ── persist to localStorage ────────────────────────────────────────────────
  useEffect(() => {
    setSaveState("saving");
    clearTimeout(saveTimer.current);
    saveExpenses(expenses);
    saveTimer.current = setTimeout(() => setSaveState("saved"), 400);
    const reset = setTimeout(() => setSaveState("idle"), 2000);
    return () => { clearTimeout(saveTimer.current); clearTimeout(reset); };
  }, [expenses]);

  // ── derived ────────────────────────────────────────────────────────────────
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  const pieData = CATEGORIES
    .map((c) => ({
      name: c.label,
      value: expenses.filter((e) => e.category === c.value).reduce((s, e) => s + e.amount, 0),
      color: c.color,
    }))
    .filter((d) => d.value > 0);

  const barData = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const ds = d.toISOString().slice(0, 10);
    return {
      day: d.toLocaleDateString("pt-BR", { weekday: "short" }),
      total: expenses.filter((e) => e.date === ds).reduce((s, e) => s + e.amount, 0),
    };
  });

  // ── actions ────────────────────────────────────────────────────────────────
  function addExpense(e: React.FormEvent) {
    e.preventDefault();
    if (!form.description.trim()) { setError("Informe a descrição."); return; }
    if (!form.amount || +form.amount <= 0) { setError("Informe um valor válido."); return; }
    setError("");
    setExpenses((prev) => [{
      id: Date.now(),
      description: form.description.trim(),
      amount: parseFloat(form.amount),
      category: form.category,
      date: new Date().toISOString().slice(0, 10),
    }, ...prev]);
    setForm({ description: "", amount: "", category: "alimentacao" });
  }

  function removeExpense(id: number) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(expenses, null, 2)], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `gastos-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function clearAll() {
    setExpenses([]);
    setConfirmClear(false);
  }

  const kbUsed = (storageBytes() / 1024).toFixed(1);

  // ── render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-ruby-500 text-xl font-bold">💰</span>
          <span className="font-mono font-bold text-lg">
            expense<span className="text-ruby-500">_tracker</span>
          </span>
          <span className="hidden sm:inline text-xs text-zinc-500 ml-2 border border-zinc-700 px-2 py-0.5 rounded">
            Rails API + React Vite
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Save state indicator */}
          <span className={`flex items-center gap-1 text-xs font-mono transition-all duration-300 ${
            saveState === "saving" ? "text-yellow-400" :
            saveState === "saved"  ? "text-green-400"  : "text-zinc-600"
          }`}>
            <Save size={12} />
            {saveState === "saving" ? "salvando…" :
             saveState === "saved"  ? "salvo ✓"  : `localStorage · ${kbUsed} KB`}
          </span>
          <a href="https://github.com/reinaldobarreto31/ruby-expense-tracker"
             target="_blank" rel="noopener noreferrer"
             className="hidden sm:flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors">
            <Github size={13} /> CLI
          </a>
          <a href="https://github.com/reinaldobarreto31/expense-tracker-web"
             target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors">
            <ExternalLink size={13} /> Source
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Total card */}
        <div className="bg-zinc-900 border border-ruby-500/30 rounded-xl p-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-400 font-mono mb-1">total_expenses</p>
            <p className="text-3xl font-bold text-ruby-500">
              R$ {total.toFixed(2).replace(".", ",")}
            </p>
            <p className="text-xs text-zinc-500 mt-1">{expenses.length} lançamentos salvos no navegador</p>
          </div>
          <div className="hidden sm:flex gap-4">
            {CATEGORIES.slice(0, 3).map((c) => {
              const cat_total = expenses
                .filter((e) => e.category === c.value)
                .reduce((s, e) => s + e.amount, 0);
              return (
                <div key={c.value} className="text-center">
                  <p className="text-xs text-zinc-500">{c.label.split(" ")[1]}</p>
                  <p className="text-sm font-mono" style={{ color: c.color }}>
                    R$ {cat_total.toFixed(0)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* localStorage info banner */}
        <div className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-400">
          <Save size={13} className="text-green-500 shrink-0" />
          <span>
            Seus dados são salvos automaticamente no{" "}
            <span className="text-white font-mono">localStorage</span>{" "}
            do seu navegador — ficam aqui mesmo após fechar a aba.
          </span>
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <button
              onClick={exportJSON}
              className="flex items-center gap-1 text-zinc-400 hover:text-green-400 transition-colors font-mono"
              title="Exportar como JSON"
            >
              <Download size={12} /> exportar
            </button>
            <span className="text-zinc-700">|</span>
            <button
              onClick={() => setConfirmClear(true)}
              className="flex items-center gap-1 text-zinc-400 hover:text-red-400 transition-colors font-mono"
              title="Limpar todos os dados"
            >
              <RotateCcw size={12} /> limpar
            </button>
          </div>
        </div>

        {/* Confirm clear dialog */}
        {confirmClear && (
          <div className="flex items-center gap-3 bg-red-950/40 border border-red-800/60 rounded-lg px-4 py-3">
            <AlertTriangle size={15} className="text-red-400 shrink-0" />
            <span className="text-sm text-red-300 flex-1">
              Apagar todos os {expenses.length} lançamentos do localStorage?
            </span>
            <button
              onClick={clearAll}
              className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white text-xs font-mono rounded transition-colors"
            >
              Apagar
            </button>
            <button
              onClick={() => setConfirmClear(false)}
              className="px-3 py-1 border border-zinc-700 hover:border-zinc-500 text-zinc-400 text-xs font-mono rounded transition-colors"
            >
              Cancelar
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={addExpense} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
          <p className="text-xs text-zinc-400 font-mono mb-2">// POST /api/v1/expenses</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              className="sm:col-span-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm
                         focus:outline-none focus:border-ruby-500 transition-colors"
              placeholder="Descrição"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              type="number" step="0.01" min="0"
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm
                         focus:outline-none focus:border-ruby-500 transition-colors"
              placeholder="Valor (R$)"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <select
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm
                         focus:outline-none focus:border-ruby-500 transition-colors"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button type="submit"
            className="flex items-center gap-2 bg-ruby-500 hover:bg-ruby-400 text-white
                       px-5 py-2 rounded-lg text-sm font-mono font-medium transition-colors">
            <PlusCircle size={16} /> Adicionar gasto
          </button>
        </form>

        {/* Tabs */}
        <div className="flex gap-1 bg-zinc-900 border border-zinc-800 p-1 rounded-lg w-fit">
          {(["list", "charts"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-mono transition-colors ${
                tab === t ? "bg-ruby-500 text-white" : "text-zinc-400 hover:text-white"
              }`}>
              {t === "list" ? <><List size={14} /> Lista</> : <><BarChart3 size={14} /> Gráficos</>}
            </button>
          ))}
        </div>

        {/* List */}
        {tab === "list" && (
          <div className="space-y-2">
            {expenses.length === 0 && (
              <div className="text-center text-zinc-600 py-16">
                <p className="text-4xl mb-2">💰</p>
                <p className="text-sm font-mono">Nenhum gasto registrado.</p>
                <p className="text-xs text-zinc-700 mt-1">Adicione um gasto acima — ele será salvo automaticamente.</p>
              </div>
            )}
            {expenses.map((exp) => (
              <div key={exp.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3
                           flex items-center justify-between hover:border-zinc-600 transition-colors group">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: categoryColor(exp.category) }} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{exp.description}</p>
                    <p className="text-xs text-zinc-500">{categoryLabel(exp.category)} · {exp.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-sm font-bold text-ruby-500">
                    R$ {exp.amount.toFixed(2).replace(".", ",")}
                  </span>
                  <button onClick={() => removeExpense(exp.id)}
                    className="text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Charts */}
        {tab === "charts" && (
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <p className="text-xs text-zinc-400 font-mono mb-4">por_categoria</p>
              {pieData.length > 0 ? (
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85}
                         dataKey="value" paddingAngle={3}>
                      {pieData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => `R$ ${v.toFixed(2)}`}
                             contentStyle={{ background: "#18181b", border: "1px solid #CC0000", borderRadius: 8, fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-zinc-600 text-sm py-16">Sem dados</p>
              )}
              <div className="grid grid-cols-2 gap-1 mt-2">
                {pieData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                    {d.name.split(" ")[1]} R$ {d.value.toFixed(0)}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <p className="text-xs text-zinc-400 font-mono mb-4">ultimos_7_dias</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis dataKey="day" tick={{ fill: "#71717a", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#71717a", fontSize: 11 }} axisLine={false} tickLine={false} width={45}
                         tickFormatter={(v) => `R$${v}`} />
                  <Tooltip formatter={(v: number) => [`R$ ${v.toFixed(2)}`, "Total"]}
                           contentStyle={{ background: "#18181b", border: "1px solid #CC0000", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="total" fill="#CC0000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center text-xs text-zinc-700 py-8 font-mono">
        Built with{" "}
        <span className="text-ruby-500">Ruby on Rails</span> API +{" "}
        <span className="text-blue-400">React Vite</span> · dados salvos no{" "}
        <span className="text-zinc-500">localStorage</span> · by{" "}
        <a href="https://github.com/reinaldobarreto31" className="text-zinc-500 hover:text-white transition-colors">
          reinaldobarreto31
        </a>
      </footer>
    </div>
  );
}
