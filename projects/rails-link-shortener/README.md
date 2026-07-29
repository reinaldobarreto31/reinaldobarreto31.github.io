# rails-link-shortener — Encurtador de Links 🔗

> **Em português:** Encurtador de URLs — transforma links longos em links curtos, com contador de cliques.

Web application built with **Ruby on Rails 7**, Tailwind CSS and Hotwire (Turbo + Stimulus).

---

## O que este projeto faz?

Você cola uma URL longa (ex: `https://www.google.com/search?q=ruby+on+rails+tutorial`) e o sistema gera um link curto (ex: `/go/abc123`).  
Quando alguém acessa o link curto, é redirecionado para o original e o contador de cliques aumenta automaticamente — **sem recarregar a página** (Turbo Stream).

**Funcionalidades:**
- ✅ Encurtar qualquer URL com um clique
- ✅ Listar todos os links criados
- ✅ Ver quantas vezes cada link foi clicado
- ✅ Contador atualiza em tempo real com Hotwire/Turbo
- ✅ Interface escura com Tailwind CSS

---

## Stack
- Ruby 3.3
- Ruby on Rails 7.2
- PostgreSQL
- Tailwind CSS (interface dark)
- Hotwire: Turbo + Stimulus (sem JavaScript manual)

## Como funciona

```
Usuário cola: https://exemplo.com/pagina-muito-longa-aqui
Sistema gera: /go/xK9mP2
Acesso ao /go/xK9mP2 → redireciona + incrementa cliques
```

## Como rodar localmente

```bash
git clone https://github.com/reinaldobarreto31/rails-link-shortener
cd rails-link-shortener
bundle install
rails db:create db:migrate
rails server
# Acesse http://localhost:3000
```

---
Feito por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
