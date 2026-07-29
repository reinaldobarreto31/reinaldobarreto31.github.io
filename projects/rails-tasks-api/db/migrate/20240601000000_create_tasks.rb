class CreateTasks < ActiveRecord::Migration[7.2]
  def change
    create_table :tasks do |t|
      t.string  :title,       null: false
      t.text    :description
      t.boolean :done,        default: false, null: false
      t.string  :priority,    default: "medium"

      t.timestamps
    end

    add_index :tasks, :done
    add_index :tasks, :priority
  end
end
