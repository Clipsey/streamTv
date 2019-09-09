# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
  bench1 = Api::Bench.create(lat: 37.770004, lng: -122.461964, description: "Golden Gate Park")
  bench2 = Api::Bench.create(lat: 37.726811, lng: -122.419823, description: "South")
  bench2 = Api::Bench.create(lat: 37.725325, lng: -122.370044, description: "Hunter's Point")
  bench2 = Api::Bench.create(lat: 37.711184, lng: -122.496484, description: "Lakeshore")
  bench2 = Api::Bench.create(lat: 37.713561, lng: -122.428426, description: "Crocker Amazon Fields")
  bench2 = Api::Bench.create(lat: 37.740724, lng: -122.443090, description: "Glen Canyon Parks")
end
