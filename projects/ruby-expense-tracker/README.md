# ruby-expense-tracker 💰

Controle de gastos pessoais via linha de comando, escrito em **Ruby puro** (sem gems externas).  
Os dados ficam salvos em `~/.expense_tracker.json`.

## Requisitos
- Ruby 3.x

## Instalação

```bash
git clone https://github.com/reinaldobarreto31/ruby-expense-tracker
cd ruby-expense-tracker
chmod +x expense_tracker.rb
```

## Uso

```bash
# Adicionar gasto
ruby expense_tracker.rb add "Almoço" 35.50 alimentacao

# Listar todos
ruby expense_tracker.rb list

# Listar por mês
ruby expense_tracker.rb list 2024-06

# Resumo por categoria
ruby expense_tracker.rb summary 2024-06

# Remover gasto
ruby expense_tracker.rb remove 3
```

## Exemplo de saída

```
📋 Gastos de 2024-06:
------------------------------------------------------------
  [1] 2024-06-01 | alimentacao    | R$ 35.50 — Almoço
  [2] 2024-06-02 | transporte     | R$ 12.00 — Uber
------------------------------------------------------------
  TOTAL: R$ 47.50

📊 Resumo por categoria (2024-06):
----------------------------------------
  alimentacao     R$ 35.50  ███████ 74.7%
  transporte      R$ 12.00  ██ 25.3%
----------------------------------------
  TOTAL: R$ 47.50
```

## Categorias

`alimentacao` · `transporte` · `moradia` · `saude` · `lazer` · `educacao` · `outros`

---
Desenvolvido por [Reinaldo Barreto](https://github.com/reinaldobarreto31)
