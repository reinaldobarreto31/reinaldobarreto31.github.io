puts "Seeding tasks..."

Task.create!([
  { title: "Configurar ambiente Rails", description: "Instalar Ruby, Rails e PostgreSQL", done: true, priority: "high" },
  { title: "Estudar ActiveRecord", description: "Migrations, validações e associações", done: true, priority: "high" },
  { title: "Criar API RESTful", description: "Endpoints CRUD com JSON responses", done: true, priority: "high" },
  { title: "Adicionar autenticação JWT", description: "Devise + devise-jwt para auth stateless", done: false, priority: "medium" },
  { title: "Escrever testes RSpec", description: "Request specs para todos os endpoints", done: false, priority: "medium" },
  { title: "Deploy no Render.com", description: "Configurar PostgreSQL e variáveis de ambiente", done: false, priority: "low" }
])

puts "Created #{Task.count} tasks."
