# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
  User.destroy_all
  date_value = "1-1-1990".to_date
  stream_key = SecureRandom::hex(20)
  TestUser = User.create(username: "TestUser", password: "123456", dob: date_value, email: "TestUser@TestingMail.com", stream_key: stream_key)
end
