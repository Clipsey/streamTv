# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.transaction do 
  User.destroy_all
  Api::Follow.destroy_all

  require 'open-uri'

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg')
  date_value0 = "1-1-1990".to_date
  stream_key0 = SecureRandom::hex(20)
  TestUser = User.create(username: "TestUser", password: "123456", dob: date_value0, email: "TestUser@TestingMail.com", stream_key: stream_key0, stream_title: "Super Special Awesome Stream Time", stream_category: "Super Special Awesome Activities", category_id: 0)
  TestUser.photo.attach(io: file, filename: '27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/103373.png')
  date_value1 = "1-1-1990".to_date
  stream_key1 = SecureRandom::hex(20)
  joe1 = User.create(username: "joe1", password: "123456", dob: date_value1, email: "joe1@TestingMail.com", stream_key: stream_key1, stream_title: "Joe's Rapping Stream", stream_category: "Rapping", category_id: 0)
  joe1.photo.attach(io: file, filename: '103373.png')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/118898.png')
  date_value2 = "1-1-1990".to_date
  stream_key2 = SecureRandom::hex(20)
  joe2 = User.create(username: "joe2", password: "123456", dob: date_value2, email: "joe2@TestingMail.com", stream_key: stream_key2, stream_title: "Joe's Dancing Stream", stream_category: "Dancing", category_id: 0)
  joe2.photo.attach(io: file, filename: '118898.png')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/125171.png')
  date_value3 = "1-1-1990".to_date
  stream_key3 = SecureRandom::hex(20)
  joe3 = User.create(username: "joe3", password: "123456", dob: date_value3, email: "joe3@TestingMail.com", stream_key: stream_key3, stream_title: "Joe's Cooking Stream", stream_category: "Cooking", category_id: 0)
  joe3.photo.attach(io: file, filename: '125171.png')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/129077.jpg')
  date_value4 = "1-1-1990".to_date
  stream_key4 = SecureRandom::hex(20)
  joe4 = User.create(username: "joe4", password: "123456", dob: date_value4, email: "joe4@TestingMail.com", stream_key: stream_key4, stream_title: "Joe's Gaming Stream", stream_category: "General Gaming", category_id: 0)
  joe4.photo.attach(io: file, filename: '129077.jpg')
  
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/148845.jpg')
  date_value100 = "1-1-1990".to_date
  stream_key100 = SecureRandom::hex(20)
  MissJoi = User.create(username: "MissJoi", password: "123456", dob: date_value100, email: "MissJoi@TestingMail.com", stream_key: stream_key100, stream_title: "League of Legends", stream_category: "League of Legends", category_id: 0)
  MissJoi.photo.attach(io: file, filename: '148845.jpg')


  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/94705.jpg')
  stream_key5 = SecureRandom::hex(20)
  JumpMan = User.create(username: "jumpman", password: "123456", dob: date_value0, email: "jumpman@TestingMail.com", stream_key: stream_key5, stream_title: "Doin' the JumpMan -- Donate to Join!", stream_category: "Jumping", category_id: 0)
  JumpMan.photo.attach(io: file, filename: '94705.jpg')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/161679.jpg')
  stream_key6 = SecureRandom::hex(20)
  runner33 = User.create(username: "runner33", password: "123456", dob: date_value1, email: "runner33@TestingMail.com", stream_key: stream_key6, stream_title: "The Real JumpMan -- Don't even need to donate!", stream_category: "Jumping", category_id: 0)
  runner33.photo.attach(io: file, filename: '161679.jpg')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/8947.jpg')
  stream_key7 = SecureRandom::hex(20)
  eJayZ = User.create(username: "eJayZ", password: "123456", dob: date_value2, email: "eJayZ@TestingMail.com", stream_key: stream_key7, stream_title: "NBA 2K25", stream_category: "NBA 2K25", category_id: 0)
  eJayZ.photo.attach(io: file, filename: '8947.jpg')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/1143.jpg')
  stream_key8 = SecureRandom::hex(20)
  bobbyMarks = User.create(username: "bobbyMarks", password: "123456", dob: date_value3, email: "bobbyMarks@TestingMail.com", stream_key: stream_key8, stream_title: "Run it back | I'm da bes", stream_category: "NBA 2K21", category_id: 0)
  bobbyMarks.photo.attach(io: file, filename: '1143.jpg')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/1483.jpg')
  stream_key9 = SecureRandom::hex(20)
  sniperPro = User.create(username: "sniperpro", password: "123456", dob: date_value4, email: "sniperPro@TestingMail.com", stream_key: stream_key9, stream_title: "Music Times", stream_category: "Music", category_id: 0)
  sniperPro.photo.attach(io: file, filename: '1483.jpg')


  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/151223.png')
  stream_key = SecureRandom::hex(20)
  bluegrass = User.create(username: "bluegrass", password: "123456", dob: date_value4, email: "bluegrass@TestingMail.com", stream_key: stream_key, stream_title: "No more donations!", stream_category: "League Of Legends", category_id: 0)
  bluegrass.photo.attach(io: file, filename: '151223.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/54078.jpg')
  stream_key = SecureRandom::hex(20)
  Yuppie_King = User.create(username: "Yuppie_King", password: "123456", dob: date_value4, email: "Yuppie_King@TestingMail.com", stream_key: stream_key, stream_title: "floatting to activities", stream_category: "NBA 2K25", category_id: 0)
  Yuppie_King.photo.attach(io: file, filename: '54078.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/71684.jpg')
  stream_key = SecureRandom::hex(20)
  Gummy = User.create(username: "Gummy", password: "123456", dob: date_value4, email: "Gummy@TestingMail.com", stream_key: stream_key, stream_title: "Going for world record!", stream_category: "League of Legends", category_id: 0)
  Gummy.photo.attach(io: file, filename: '71684.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/82166.png')
  stream_key = SecureRandom::hex(20)
  Lucky77 = User.create(username: "Lucky77", password: "123456", dob: date_value4, email: "Lucky77@TestingMail.com", stream_key: stream_key, stream_title: "Tournament -- Kings of All Hills", stream_category: "Madden NFL 25", category_id: 0)
  Lucky77.photo.attach(io: file, filename: '82166.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/90589.png')
  stream_key = SecureRandom::hex(20)
  Dongle = User.create(username: "Dongle", password: "123456", dob: date_value4, email: "Dongle@TestingMail.com", stream_key: stream_key, stream_title: "Trying for rank 7", stream_category: "Madden NFL 25", category_id: 0)
  Dongle.photo.attach(io: file, filename: '90589.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/968.jpg')
  stream_key = SecureRandom::hex(20)
  Donkeykong = User.create(username: "Donkeykong", password: "123456", dob: date_value4, email: "Donkeykong@TestingMail.com", stream_key: stream_key, stream_title: "Horror/Shock Games", stream_category: "Overwatch", category_id: 0)
  Donkeykong.photo.attach(io: file, filename: '968.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/148526.png')
  stream_key = SecureRandom::hex(20)
  WestStreet = User.create(username: "WestStreet", password: "123456", dob: date_value4, email: "WestStreet@TestingMail.com", stream_key: stream_key, stream_title: "Ranked Comp", stream_category: "Overwatch", category_id: 0)
  WestStreet.photo.attach(io: file, filename: '148526.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/70381.jpg')
  stream_key = SecureRandom::hex(20)
  JimmyG = User.create(username: "JimmyG", password: "123456", dob: date_value4, email: "Garappollo@TestingMail.com", stream_key: stream_key, stream_title: "4th Day in a row! Less'go", stream_category: "Overwatch", category_id: 0)
  JimmyG.photo.attach(io: file, filename: '70381.jpg')
  
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg')
  stream_key = SecureRandom::hex(20)
  LBJoverMJ = User.create(username: "LBJoverMJ", password: "123456", dob: date_value4, email: "LBJoverMJ@TestingMail.com", stream_key: stream_key, stream_title: "Back to Save the Universe", stream_category: "Dota 2", category_id: 0)
  LBJoverMJ.photo.attach(io: file, filename: '27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg')
  
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/86518.png')
  stream_key = SecureRandom::hex(20)
  PetersPan = User.create(username: "PetersPan", password: "123456", dob: date_value4, email: "PetersPan@TestingMail.com", stream_key: stream_key, stream_title: "Back to raise the dead", stream_category: "Dota 2", category_id: 0)
  PetersPan.photo.attach(io: file, filename: '86518.png')
 
 

  #////////////////////////////////////////////////////////////////////////////////

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204090.jpg')
  stream_key = SecureRandom::hex(20)
  UniVerse = User.create(username: "UniVerse", password: "123456", dob: date_value4, email: "UniVerse@TestingMail.com", stream_key: stream_key, stream_title: "Glory to me", stream_category: "Dota 2", category_id: 0)
  UniVerse.photo.attach(io: file, filename: '204090.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204092.jpg')
  stream_key = SecureRandom::hex(20)
  QueenA = User.create(username: "QueenA", password: "123456", dob: date_value4, email: "QueenA@TestingMail.com", stream_key: stream_key, stream_title: "Give me Money! Please...", stream_category: "Fortnite", category_id: 0)
  QueenA.photo.attach(io: file, filename: '204092.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204153.jpg')
  stream_key = SecureRandom::hex(20)
  Numbers = User.create(username: "Numbers", password: "123456", dob: date_value4, email: "Numbers@TestingMail.com", stream_key: stream_key, stream_title: "Saturdays - 1-5, Weekdays - Everytime", stream_category: "Fortnite", category_id: 0)
  Numbers.photo.attach(io: file, filename: '204153.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204304.jpg')
  stream_key = SecureRandom::hex(20)
  GoGo = User.create(username: "GoGo", password: "123456", dob: date_value4, email: "GoGo@TestingMail.com", stream_key: stream_key, stream_title: "RANK 9 coming", stream_category: "PUBG", category_id: 0)
  GoGo.photo.attach(io: file, filename: '204304.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204368.jpg')
  stream_key = SecureRandom::hex(20)
  FortyNiners = User.create(username: "FortyNiners", password: "123456", dob: date_value4, email: "FortyNiners@TestingMail.com", stream_key: stream_key, stream_title: "Madden God | Nobody better", stream_category: "PUBG", category_id: 0)
  FortyNiners.photo.attach(io: file, filename: '204368.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204369.png')
  stream_key = SecureRandom::hex(20)
  Functional = User.create(username: "Functional", password: "123456", dob: date_value4, email: "Functional@TestingMail.com", stream_key: stream_key, stream_title: "I exist on another plain of mortals", stream_category: "PUBG", category_id: 0)
  Functional.photo.attach(io: file, filename: '204369.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/201382.jpg')
  stream_key = SecureRandom::hex(20)
  NeverMore22 = User.create(username: "NeverMore22", password: "123456", dob: date_value4, email: "NeverMore22@TestingMail.com", stream_key: stream_key, stream_title: "I'm here, I'm good, we go.", stream_category: "PUBG", category_id: 0)
  NeverMore22.photo.attach(io: file, filename: '201382.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204432.jpg')
  stream_key = SecureRandom::hex(20)
  WestSideAllDay = User.create(username: "WestSideAllDay", password: "123456", dob: date_value4, email: "WestSideAllDay@TestingMail.com", stream_key: stream_key, stream_title: "Eat that sandwich bruh", stream_category: "Dota 2", category_id: 0)
  WestSideAllDay.photo.attach(io: file, filename: '204432.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204442.jpg')
  stream_key = SecureRandom::hex(20)
  GloryGirl = User.create(username: "GloryGirl", password: "123456", dob: date_value4, email: "GloryGirl@TestingMail.com", stream_key: stream_key, stream_title: "Back as a champ", stream_category: "General General Gaming", category_id: 0)
  GloryGirl.photo.attach(io: file, filename: '204442.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/204455.jpg')
  stream_key = SecureRandom::hex(20)
  ApplesToPears = User.create(username: "ApplesToPears", password: "123456", dob: date_value4, email: "ApplesToPears@TestingMail.com", stream_key: stream_key, stream_title: "Fluffy Day", stream_category: "General Gaming", category_id: 0)
  ApplesToPears.photo.attach(io: file, filename: '204455.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/200681.jpg')
  stream_key = SecureRandom::hex(20)
  MeAboveYou = User.create(username: "MeAboveYou", password: "123456", dob: date_value4, email: "MeAboveYou@TestingMail.com", stream_key: stream_key, stream_title: "I suck, what's new", stream_category: "General Gaming", category_id: 0)
  MeAboveYou.photo.attach(io: file, filename: '200681.jpg')

  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/200979.jpg')
  stream_key = SecureRandom::hex(20)
  SeedData = User.create(username: "SeedData", password: "123456", dob: date_value4, email: "SeedData@TestingMail.com", stream_key: stream_key, stream_title: "Got Em' | Poker King Running it Once Again", stream_category: "Poker", category_id: 0)
  SeedData.photo.attach(io: file, filename: '200681.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/203912.jpg')
  stream_key = SecureRandom::hex(20)
  PhysicsTree = User.create(username: "PhysicsTree", password: "123456", dob: date_value4, email: "PhysicsTree@TestingMail.com", stream_key: stream_key, stream_title: "Reducing all the messy stuff over and over", stream_category: "General Gaming", category_id: 0)
  PhysicsTree.photo.attach(io: file, filename: '203912.jpg')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/201447.png')
  stream_key = SecureRandom::hex(20)
  YarnSpinner = User.create(username: "YarnSpinner", password: "123456", dob: date_value4, email: "YarnSpinner@TestingMail.com", stream_key: stream_key, stream_title: "Totally doing all the things right", stream_category: "General Gaming", category_id: 0)
  YarnSpinner.photo.attach(io: file, filename: '201447.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/200747.png')
  stream_key = SecureRandom::hex(20)
  RegularGuy = User.create(username: "RegularGuy", password: "123456", dob: date_value4, email: "RegularGuy@TestingMail.com", stream_key: stream_key, stream_title: "Why I never...", stream_category: "General Gaming", category_id: 0)
  RegularGuy.photo.attach(io: file, filename: '200747.png')
 
  file = open('https://twitch-name-dev.s3-us-west-1.amazonaws.com/201079.jpg')
  stream_key = SecureRandom::hex(20)
  UpsideDown = User.create(username: "UpsideDown", password: "123456", dob: date_value4, email: "UpsideDown@TestingMail.com", stream_key: stream_key, stream_title: "Computer Champ | Console Queen", stream_category: "General Gaming", category_id: 0)
  UpsideDown.photo.attach(io: file, filename: '201079.jpg')
 
  relations = Hash.new {|h, k| h[k] = Hash.new(false) }
  (0...250).each do |count|
    follower = User.find(User.pluck(:id).sample)
    followee = User.find(User.pluck(:id).sample)
    while follower.id == followee.id || relations[follower.id][followee.id] == true
      follower = User.find(User.pluck(:id).sample)
      followee = User.find(User.pluck(:id).sample)
    end

    relations[follower.id][followee.id] = true
    follow = Api::Follow.create(followee_id: followee.id, follower_id: follower.id)
  end
  

# end