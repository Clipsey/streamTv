class AddUsernameToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :username, :string
  end
end
