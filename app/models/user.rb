class User < ApplicationRecord
  #SPIRE
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, presence: true, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user 
      if user.is_password?(password)
        return user
      else
        return "That Password was incorrect."
      end
    else
      return "Can't find that Username."
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  has_many :followees_link,
  foreign_key: :followee_id,
  class_name: 'Api::Follow'

  has_many :followers_link,
  foreign_key: :follower_id,
  class_name: 'Api::Follow'

  has_many :followers,
  through: :followers_link,
  source: :followers_users

  has_many :followees,
  through: :followees_link,
  source: :followees_users

  has_one_attached :photo

  belongs_to :category,
  foreign_key: :category_id,
  class_name: 'Category'

end
