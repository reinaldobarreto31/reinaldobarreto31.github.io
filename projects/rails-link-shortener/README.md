# rails-link-shortener 🔗

Encurtador de URLs construído com **Ruby on Rails 7** + **Tailwind CSS** + **Stimulus JS**.  
Interface moderna, contador de cliques em tempo real e painel de analytics.

## Stack
- Ruby 3.3
- Ruby on Rails 7.2
- PostgreSQL
- Tailwind CSS 3
- Stimulus JS (Hotwire)
- Turbo (Hotwire)

## Funcionalidades
- ✅ Encurtar qualquer URL com código único
- ✅ Redirecionamento com registro de cliques
- ✅ Painel de links com contador de acessos
- ✅ Copiar link com um clique (Stimulus JS)
- ✅ Interface responsiva com Tailwind CSS

## Como rodar

```bash
git clone https://github.com/reinaldobarreto31/rails-link-shortener
cd rails-link-shortener
bundle install
yarn install
rails db:create db:migrate db:seed
./bin/dev
```

Acesse em: `http://localhost:3000`

## Screenshots

| Página inicial | Painel de links |
|---|---|
| Formulário para encurtar URLs | Lista com contadores de cliques |

---
Desenvolvido por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
