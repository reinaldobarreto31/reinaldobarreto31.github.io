# rails-link-shortener 🔗

> **Encurtador de URLs** — transforma links longos em links curtos, com contador de cliques em tempo real.

Web application built with **Ruby on Rails 7**, Tailwind CSS, Hotwire (Turbo + Stimulus) — and a beautiful standalone **dark-mode frontend** in vanilla JS + Tailwind CDN.

---

## 🖥️ Frontend Moderno

O projeto inclui um frontend standalone (`frontend/index.html`) — dark mode, animações 3D, efeito shimmer nos textos Rails.

**Abra direto no browser — sem build, sem npm:**

```bash
open frontend/index.html
# ou arraste o arquivo para o Chrome/Firefox
```

**Funcionalidades do frontend:**
- ✅ Encurtar qualquer URL com validação
- ✅ Dashboard com estatísticas (total de links, cliques, links hoje)
- ✅ Copiar link curto com um clique
- ✅ QR Code gerado na hora
- ✅ Deletar links
- ✅ Filtro/busca em tempo real
- ✅ Auto-refresh a cada 30s (atualiza contadores)
- ✅ Modo Demo — funciona offline com dados fictícios
- ✅ Configuração da URL base da API (localStorage)
- ✅ Dark mode com tema Rails vermelho 🔴

---

## O que este projeto faz?

Você cola uma URL longa (ex: `https://www.google.com/search?q=ruby+on+rails+tutorial`) e o sistema gera um link curto (ex: `/go/abc123`).
Quando alguém acessa o link curto, é redirecionado para o original e o contador de cliques aumenta automaticamente.

---

## Stack

| Camada   | Tecnologia |
|----------|-----------|
| Backend  | Ruby on Rails 7.2 |
| Banco    | PostgreSQL |
| Frontend | Tailwind CSS · Hotwire · Stimulus |
| Frontend standalone | Vanilla JS · Tailwind CDN |
| Autenticação | — |
| Deploy   | GitHub Pages (frontend) / Heroku / Render (API) |

---

## Como rodar localmente

### 1. Clonar e instalar dependências

```bash
git clone https://github.com/reinaldobarreto31/rails-link-shortener
cd rails-link-shortener
bundle install
```

### 2. Banco de dados

```bash
rails db:create db:migrate
```

### 3. Rodar o servidor

```bash
rails server
# API disponível em http://localhost:3000
```

### 4. Abrir o frontend

```bash
open frontend/index.html
```

No modal de configuração, mantenha `http://localhost:3000` como URL da API.

---

## API Endpoints (JSON)

| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/short_links` | Lista todos os links |
| POST   | `/short_links` | Cria um link curto |
| DELETE | `/short_links/:id` | Remove um link |
| GET    | `/go/:code` | Redireciona e incrementa cliques |

**Exemplo de criação:**

```bash
curl -X POST http://localhost:3000/short_links \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"short_link":{"original_url":"https://guides.rubyonrails.org","title":"Rails Guides"}}'
```

**Resposta:**

```json
{
  "id": 1,
  "original_url": "https://guides.rubyonrails.org",
  "title": "Rails Guides",
  "code": "xk9mp2",
  "click_count": 0,
  "created_at": "2024-07-29T..."
}
```

---

## Como funciona

```
Usuário cola: https://exemplo.com/pagina-muito-longa
Sistema gera: http://localhost:3000/go/xK9mP2
Acesso ao /go/xK9mP2 → redireciona + incrementa cliques
Frontend auto-atualiza contador a cada 30s
```

---

## Autor

**Reinaldo Barreto da Silva** — Ruby on Rails Engineer  
🌐 [reinaldobarreto31.github.io](https://reinaldobarreto31.github.io)  
💼 [LinkedIn](https://www.linkedin.com/in/reinaldo-barreto-840896253)  
🐙 [GitHub](https://github.com/reinaldobarreto31)
