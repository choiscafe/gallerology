class ShowArtworkSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :year, :gallery, :exhibition, :notes, :seenDate, :artist_id, :user_id, :artist
  belongs_to :artist
end
