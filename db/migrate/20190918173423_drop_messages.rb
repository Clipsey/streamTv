class DropMessages < ActiveRecord::Migration[5.2]
  def change
    drop_table :messages
  end
end
