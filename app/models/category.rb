class Category < ApplicationRecord
  has_many :users,
  foreign_key: :category_id,
  class_name: 'User'

  has_one_attached :photo
end
