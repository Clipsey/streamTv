class AddDate < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :dob, :date
  end
end
