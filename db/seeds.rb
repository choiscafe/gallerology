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

Artist.create(name: "Claude Monet", birthPlace: "France", activeYears: "1840-1926")
Artist.create(name: "Salvador Domingo Felipe Jacinto Dalí i Domènech", birthPlace: "Spain", activeYears: "1904-1989")

Artwork.create(image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Bridge_Over_a_Pond_of_Water_Lilies%2C_Claude_Monet_1899.jpg", title: "The Water Lily Pond", year: 1899, gallery: "Metropolitan Museum of Art", exhibition: "Impressionism", notes: "Dreamy like pond and bridge", seenDate: "2022-03-02", artist_id: 1, user_id: 1)
Artwork.create(image: "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg", title: "The Persistence of Memory", year: 1931, gallery: "The Museum of Modern Art", exhibition: "Surrealism", notes: "Melting down clocks", seenDate: "2021-04-22", artist_id: 2, user_id: 2)