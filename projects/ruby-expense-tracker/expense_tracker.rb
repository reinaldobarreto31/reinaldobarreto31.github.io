#!/usr/bin/env ruby
# frozen_string_literal: true

# ============================================================
#  Ruby Expense Tracker — CLI simples para controle de gastos
# ============================================================

require "json"
require "date"
require "fileutils"

DATA_FILE = File.expand_path("~/.expense_tracker.json")

CATEGORIES = %w[alimentacao transporte moradia saude lazer educacao outros].freeze

def load_expenses
  return [] unless File.exist?(DATA_FILE)

  JSON.parse(File.read(DATA_FILE), symbolize_names: true)
rescue JSON::ParserError
  []
end

def save_expenses(expenses)
  File.write(DATA_FILE, JSON.pretty_generate(expenses))
end

def add_expense(description, amount, category)
  expenses = load_expenses
  expense = {
    id: expenses.size + 1,
    description: description,
    amount: amount.to_f.round(2),
    category: category,
    date: Date.today.to_s
  }
  expenses << expense
  save_expenses(expenses)
  puts "\n✅ Gasto adicionado: #{description} — R$ #{"%.2f" % expense[:amount]} (#{category})"
end

def list_expenses(filter_month: nil)
  expenses = load_expenses

  if filter_month
    expenses = expenses.select { |e| e[:date].start_with?(filter_month) }
    puts "\n📋 Gastos de #{filter_month}:"
  else
    puts "\n📋 Todos os gastos:"
  end

  if expenses.empty?
    puts "  Nenhum gasto encontrado."
    return
  end

  puts "-" * 60
  expenses.each do |e|
    puts "  [#{e[:id]}] #{e[:date]} | #{e[:category].ljust(15)} | R$ #{"%.2f" % e[:amount]} — #{e[:description]}"
  end
  puts "-" * 60

  total = expenses.sum { |e| e[:amount] }
  puts "  TOTAL: R$ #{"%.2f" % total}"
end

def summary_by_category(filter_month: nil)
  expenses = load_expenses
  expenses = expenses.select { |e| e[:date].start_with?(filter_month) } if filter_month

  grouped = expenses.group_by { |e| e[:category] }
  totals  = grouped.transform_values { |list| list.sum { |e| e[:amount] } }
  total   = expenses.sum { |e| e[:amount] }

  puts "\n📊 Resumo por categoria#{filter_month ? " (#{filter_month})" : ""}:"
  puts "-" * 40
  totals.sort_by { |_, v| -v }.each do |cat, amt|
    pct = total > 0 ? (amt / total * 100).round(1) : 0
    bar = "█" * (pct / 5).to_i
    puts "  #{cat.ljust(15)} R$ #{"%.2f" % amt}  #{bar} #{pct}%"
  end
  puts "-" * 40
  puts "  TOTAL: R$ #{"%.2f" % total}"
end

def remove_expense(id)
  expenses = load_expenses
  before   = expenses.size
  expenses.reject! { |e| e[:id] == id.to_i }

  if expenses.size < before
    save_expenses(expenses)
    puts "🗑️  Gasto ##{id} removido."
  else
    puts "❌ Gasto ##{id} não encontrado."
  end
end

def print_help
  puts <<~HELP

    💰 Ruby Expense Tracker

    Uso:
      ruby expense_tracker.rb <comando> [argumentos]

    Comandos:
      add <descrição> <valor> <categoria>   Adiciona um gasto
      list [YYYY-MM]                         Lista gastos (opcional: filtrar por mês)
      summary [YYYY-MM]                      Resumo por categoria
      remove <id>                            Remove um gasto

    Categorias válidas: #{CATEGORIES.join(", ")}

    Exemplos:
      ruby expense_tracker.rb add "Almoço" 35.50 alimentacao
      ruby expense_tracker.rb list 2024-06
      ruby expense_tracker.rb summary
      ruby expense_tracker.rb remove 3

  HELP
end

# ── Main ──────────────────────────────────────────────────
command = ARGV[0]

case command
when "add"
  if ARGV.size < 4
    puts "❌ Uso: add <descrição> <valor> <categoria>"
    exit 1
  end
  description = ARGV[1]
  amount      = ARGV[2].to_f
  category    = ARGV[3].downcase

  unless CATEGORIES.include?(category)
    puts "❌ Categoria inválida. Use: #{CATEGORIES.join(", ")}"
    exit 1
  end

  add_expense(description, amount, category)

when "list"
  list_expenses(filter_month: ARGV[1])

when "summary"
  summary_by_category(filter_month: ARGV[1])

when "remove"
  if ARGV[1].nil?
    puts "❌ Informe o ID do gasto a remover."
    exit 1
  end
  remove_expense(ARGV[1])

else
  print_help
end
