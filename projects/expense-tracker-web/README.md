# expense-tracker-web — Controle de Gastos Web 💰

> **Em português:** Controle de gastos pessoais com interface web — adiciona gastos por categoria e visualiza gráficos.

Full-stack expense tracker — **Ruby on Rails API** backend + **React Vite** frontend.  
The frontend is deployed on **GitHub Pages** with dark Ruby on Rails theme.

---

## O que este projeto faz?

É um aplicativo web para controlar seus gastos pessoais. Você adiciona um gasto (ex: "Almoço - R$ 45,00 - Alimentação"),  
e o sistema mostra gráficos de quanto você gastou por categoria e nos últimos 7 dias.

**Funcionalidades:**
- ✅ Adicionar gasto com descrição, valor e categoria
- ✅ Remover gastos
- ✅ Gráfico de pizza por categoria (Alimentação, Transporte, Lazer, etc.)
- ✅ Gráfico de barras dos últimos 7 dias
- ✅ Tema escuro estilo Ruby on Rails (vermelho #CC0000)
- ✅ Funciona no navegador sem backend (localStorage)

---

## 🌐 Demo ao vivo

**[reinaldobarreto31.github.io/expense-tracker-web](https://reinaldobarreto31.github.io/expense-tracker-web/)**

---

## Arquitetura

```
expense-tracker-web/
├── web/          → Frontend (React Vite) — roda no GitHub Pages
│   └── src/
│       ├── App.tsx        → componente principal
│       └── types.ts       → categorias e tipos
├── api/          → Backend (Ruby on Rails API)
│   ├── app/controllers/api/v1/expenses_controller.rb
│   └── config/routes.rb
└── .github/workflows/deploy.yml  → deploy automático para GitHub Pages
```

## Stack

| Camada | Tecnologia |
|--------|------------|
| Backend (API) | Ruby on Rails 7 · PostgreSQL · Rack-CORS |
| Frontend | React 18 · Vite · TypeScript · Tailwind CSS |
| Gráficos | Recharts |
| Deploy | GitHub Pages (frontend) |

## Como rodar localmente

```bash
# Frontend
cd web
npm install
npm run dev
# Acesse http://localhost:5173/expense-tracker-web/

# Backend Rails (opcional)
cd api
bundle install
rails db:create db:migrate
rails server
```

---
Feito por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
