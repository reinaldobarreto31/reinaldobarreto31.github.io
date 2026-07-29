export type Category =
  | "alimentacao"
  | "transporte"
  | "moradia"
  | "saude"
  | "lazer"
  | "educacao"
  | "outros";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: Category;
  date: string;
}

export const CATEGORIES: { value: Category; label: string; color: string }[] = [
  { value: "alimentacao", label: "🍽️ Alimentação",  color: "#f97316" },
  { value: "transporte",  label: "🚌 Transporte",   color: "#3b82f6" },
  { value: "moradia",     label: "🏠 Moradia",      color: "#8b5cf6" },
  { value: "saude",       label: "💊 Saúde",        color: "#22c55e" },
  { value: "lazer",       label: "🎮 Lazer",        color: "#eab308" },
  { value: "educacao",    label: "📚 Educação",     color: "#06b6d4" },
  { value: "outros",      label: "📦 Outros",       color: "#6b7280" },
];

export function categoryLabel(cat: Category): string {
  return CATEGORIES.find((c) => c.value === cat)?.label ?? cat;
}
export function categoryColor(cat: Category): string {
  return CATEGORIES.find((c) => c.value === cat)?.color ?? "#6b7280";
}
