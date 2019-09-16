class CreateApiFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :api_follows do |t|
      t.integer :follower_id
      t.integer :followee_id
      t.timestamps
    end
  end
end
