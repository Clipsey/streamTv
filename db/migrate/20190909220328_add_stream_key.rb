class AddStreamKey < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :stream_key, :string
  end
end
