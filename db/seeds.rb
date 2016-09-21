# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = Admin.find_or_create_by(full_name: "admin")
admin.email ||= "admin@devbootcamp.com"
admin.password ||= "password"
admin.save

students= [
  {full_name: "Rubiksdude", email: "rubiks@dude.wow", password: "password"},
  {full_name: "Henri", email: "henri@gmail.com", password: "password"},
  {full_name: "fluffy", email: "fluffy@email.com", password: "password"},
  {full_name: "pig wilson", email: "spittler@gmail.com", password: "password"}
]
Student.create(students)


pitches= [
  {title: "Where is my owner?", description: "Halp, my ownr disapear 5ever plz halp", author_id: 2},
  {title: "What's that smell?", description: "I JUSS WANNA SMEL IT", author_id: 2},
  {title: "Why won't the dog on the tv answer me?", description: "HEY, HEY, HEY!!! NOTICE ME! GRRRRRRRRR",author_id: 3},
  {title: "What are zebras?", description: "R they like us but bigger?", author_id: 4},
  {title: "wolves??", description: "r we rly descendants of these JERKS?!?!", author_id: 5}
]
Pitch.create(pitches)
