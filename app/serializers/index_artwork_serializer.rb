class IndexArtworkSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :year, :gallery, :exhibition, :seenDate, :artist
  belongs_to :artist
end
