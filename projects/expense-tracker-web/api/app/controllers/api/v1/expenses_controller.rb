module Api
  module V1
    class ExpensesController < ApplicationController
      before_action :set_expense, only: %i[show update destroy]

      # GET /api/v1/expenses
      def index
        @expenses = Expense.order(date: :desc, created_at: :desc)
        render json: @expenses
      end

      # GET /api/v1/expenses/:id
      def show
        render json: @expense
      end

      # POST /api/v1/expenses
      def create
        @expense = Expense.new(expense_params)
        if @expense.save
          render json: @expense, status: :created
        else
          render json: { errors: @expense.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/expenses/:id
      def update
        if @expense.update(expense_params)
          render json: @expense
        else
          render json: { errors: @expense.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/expenses/:id
      def destroy
        @expense.destroy
        head :no_content
      end

      # GET /api/v1/summary
      def summary
        total     = Expense.sum(:amount)
        by_cat    = Expense.group(:category).sum(:amount)
        last_7    = (0..6).map do |i|
          date = i.days.ago.to_date
          { date: date, total: Expense.where(date: date).sum(:amount) }
        end

        render json: { total: total, by_category: by_cat, last_7_days: last_7 }
      end

      private

      def set_expense
        @expense = Expense.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Expense not found" }, status: :not_found
      end

      def expense_params
        params.require(:expense).permit(:description, :amount, :category, :date)
      end
    end
  end
end
