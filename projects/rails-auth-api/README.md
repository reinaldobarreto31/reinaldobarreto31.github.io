# rails-auth-api — API de Autenticação JWT 🔐

> **Em português:** API de autenticação completa — cadastro, login e rotas protegidas por token JWT.

RESTful API with **authentication and authorization** built with Ruby on Rails 7, Devise + JWT and PostgreSQL.  
Demonstrates the complete auth flow: registration, login, token refresh and protected routes.

---

## O que este projeto faz?

É uma API REST com sistema completo de autenticação. O usuário se cadastra, faz login e recebe um **token JWT**.  
Com esse token ele acessa rotas protegidas. Sem o token, recebe erro 401 (não autorizado).

**Fluxo de autenticação:**
1. `POST /signup` → cadastra usuário → recebe token
2. `POST /login` → autentica → recebe token JWT
3. `GET /posts` com `Authorization: Bearer <token>` → acessa dados protegidos
4. `DELETE /logout` → invalida o token

---

## Stack
- Ruby 3.3
- Ruby on Rails 7.2
- PostgreSQL
- Devise + devise-jwt (autenticação stateless)
- Rack-CORS (permite chamadas do frontend)
- RSpec + FactoryBot (testes automatizados)

## Endpoints

| Método | Rota | Autenticado? | Descrição |
|--------|------|:---:|-----------|
| POST | `/api/v1/auth/signup` | ❌ | Cadastro de usuário |
| POST | `/api/v1/auth/login` | ❌ | Login → retorna JWT |
| DELETE | `/api/v1/auth/logout` | ✅ | Logout (revoga token) |
| GET | `/api/v1/profile` | ✅ | Perfil do usuário logado |
| GET | `/api/v1/posts` | ✅ | Lista posts (rota protegida) |
| POST | `/api/v1/posts` | ✅ | Cria post |
| PUT | `/api/v1/posts/:id` | ✅ | Edita (somente dono) |
| DELETE | `/api/v1/posts/:id` | ✅ | Remove (somente dono) |

## Exemplo de uso

```bash
# 1. Cadastrar
curl -X POST http://localhost:3000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"user": {"name": "Reinaldo", "email": "re@example.com", "password": "123456"}}'

# 2. Login → guarda o token retornado
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"user": {"email": "re@example.com", "password": "123456"}}'
# → { "token": "eyJhbGci..." }

# 3. Acessar rota protegida
curl http://localhost:3000/api/v1/posts \
  -H "Authorization: Bearer eyJhbGci..."
```

## Como rodar localmente

```bash
git clone https://github.com/reinaldobarreto31/rails-auth-api
cd rails-auth-api
bundle install
rails db:create db:migrate db:seed
rails server
```

---
Feito por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
