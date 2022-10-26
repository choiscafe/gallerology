class Artist < ApplicationRecord
  has_many :artworks
  has_many :users, through: :artworks

  validates :name, presence: true
  validates :birthPlace, presence: true
  validates :activeYears, presence: true
end
