class Api::Follow < ApplicationRecord
  belongs_to :followers_users,
  foreign_key: :follower_id,
  class_name: 'User'

  belongs_to :followees_users,
  foreign_key: :followee_id,
  class_name: 'User'
end
