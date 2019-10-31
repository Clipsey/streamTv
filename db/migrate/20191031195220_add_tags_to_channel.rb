class AddTagsToChannel < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :tags, :text, array: true, default: []
  end
end
