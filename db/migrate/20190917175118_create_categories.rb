class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.integer :id
      t.string :title
      t.viewers :viewers
      t.timestamps
    end
  end
end
