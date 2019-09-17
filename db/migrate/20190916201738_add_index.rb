class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :api_follows, [:follower_id, :followee_id], unique: true
  end
end
