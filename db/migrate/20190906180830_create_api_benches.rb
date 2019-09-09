class CreateApiBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :api_benches do |t|
      t.string :description
      t.float :lat
      t.float :lng
      t.timestamps
    end
  end
end
