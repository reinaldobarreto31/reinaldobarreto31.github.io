# rails-tasks-api 🚂

API RESTful de gerenciamento de tarefas construída com **Ruby on Rails** e PostgreSQL.

## Stack
- Ruby 3.3
- Ruby on Rails 7.2
- PostgreSQL
- Devise (autenticação)
- Rack-CORS

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/v1/tasks` | Lista todas as tarefas |
| POST | `/api/v1/tasks` | Cria uma nova tarefa |
| GET | `/api/v1/tasks/:id` | Retorna uma tarefa |
| PUT | `/api/v1/tasks/:id` | Atualiza uma tarefa |
| DELETE | `/api/v1/tasks/:id` | Remove uma tarefa |

## Como rodar

```bash
git clone https://github.com/reinaldobarreto31/rails-tasks-api
cd rails-tasks-api
bundle install
rails db:create db:migrate db:seed
rails server
```

## Exemplo de uso

```bash
# Criar tarefa
curl -X POST http://localhost:3000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"task": {"title": "Estudar Ruby on Rails", "done": false}}'

# Listar tarefas
curl http://localhost:3000/api/v1/tasks
```

---
Desenvolvido por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
