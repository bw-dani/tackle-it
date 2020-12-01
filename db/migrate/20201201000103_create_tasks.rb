class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :image_url
      t.text :description
      t.string :deadline
      t.boolean :completed
      t.string :category
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
2