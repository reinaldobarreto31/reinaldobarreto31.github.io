# rails-tasks-api — API de Tarefas 📋

> **Em português:** API de gerenciamento de tarefas — cria, lista, edita e apaga tarefas via HTTP.

RESTful API built with **Ruby on Rails 7** and **PostgreSQL**.  
Demonstrates full CRUD with validations, scopes, and proper JSON responses.

---

## O que este projeto faz?

É uma API REST para gerenciar tarefas (to-do list). Você envia requisições HTTP e recebe respostas em JSON.  
Pense nele como o "backend" de um aplicativo de lista de tarefas.

**Operações disponíveis:**
- ✅ Criar uma nova tarefa
- ✅ Listar todas as tarefas (com filtro por status)
- ✅ Ver detalhes de uma tarefa específica
- ✅ Editar título, descrição ou marcar como concluída
- ✅ Deletar uma tarefa

---

## Stack
- Ruby 3.3
- Ruby on Rails 7.2 (API mode)
- PostgreSQL
- RSpec (testes)

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/tasks` | Lista todas as tarefas |
| GET | `/api/v1/tasks/:id` | Detalhe de uma tarefa |
| POST | `/api/v1/tasks` | Cria nova tarefa |
| PUT | `/api/v1/tasks/:id` | Atualiza tarefa |
| DELETE | `/api/v1/tasks/:id` | Remove tarefa |

## Exemplo de uso

```bash
# Criar tarefa
curl -X POST http://localhost:3000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"task": {"title": "Estudar Ruby on Rails", "done": false}}'

# Listar tarefas pendentes
curl http://localhost:3000/api/v1/tasks?status=pending
```

## Como rodar localmente

```bash
git clone https://github.com/reinaldobarreto31/rails-tasks-api
cd rails-tasks-api
bundle install
rails db:create db:migrate db:seed
rails server
# API disponível em http://localhost:3000
```

---
Feito por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
