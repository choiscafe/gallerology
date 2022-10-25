# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

  User.create(name: "Cho", username: "choiscafe", password_digest: "123A")
  User.create(name: "Rafia", username: "Raf", password_digest: "123B")
  User.create(name: "Logan", username: "Meister", password_digest: "123C")

