class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :gallery, :exhibition, :notes, :seenDate, :artist_id, :user_id
end
