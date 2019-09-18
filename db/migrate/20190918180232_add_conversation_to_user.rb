class AddConversationToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :conversation_id, :integer
  end
end
