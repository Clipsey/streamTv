# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.transaction do 
  User.destroy_all
  
  date_value0 = "1-1-1990".to_date
  stream_key0 = SecureRandom::hex(20)
  TestUser = User.create(username: "TestUser", password: "123456", dob: date_value0, email: "TestUser@TestingMail.com", stream_key: stream_key0)

  date_value1 = "1-1-1990".to_date
  stream_key1 = SecureRandom::hex(20)
  joe1 = User.create(username: "joe1", password: "123456", dob: date_value1, email: "joe1@TestingMail.com", stream_key: stream_key1)

  date_value2 = "1-1-1990".to_date
  stream_key2 = SecureRandom::hex(20)
  joe2 = User.create(username: "joe2", password: "123456", dob: date_value2, email: "joe2@TestingMail.com", stream_key: stream_key2)
  
  date_value3 = "1-1-1990".to_date
  stream_key3 = SecureRandom::hex(20)
  joe3 = User.create(username: "joe3", password: "123456", dob: date_value3, email: "joe3@TestingMail.com", stream_key: stream_key3)
  
  date_value4 = "1-1-1990".to_date
  stream_key4 = SecureRandom::hex(20)
  joe4 = User.create(username: "joe4", password: "123456", dob: date_value4, email: "joe4@TestingMail.com", stream_key: stream_key4)
# end