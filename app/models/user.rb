class User < ApplicationRecord
  has_secure_password
  
  has_many :artworks
  has_many :artists, through: :artworks
end
