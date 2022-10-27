class User < ApplicationRecord
  has_secure_password

  has_many :artworks
  has_many :artists, through: :artworks

  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
end
