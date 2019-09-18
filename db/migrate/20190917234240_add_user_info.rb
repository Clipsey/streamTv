class AddUserInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :stream_title, :string
    add_column :users, :stream_category, :string
  end
end
