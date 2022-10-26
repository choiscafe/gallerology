class Artwork < ApplicationRecord
  belongs_to :user
  belongs_to :artist

  validates :title, presence: true
  validates :gallery, presence: true
  validates :seenDate, presence: true
  validates :user_id, presence: true
  validates :artist_id, presence: true
end
