class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthPlace, :activeYears
  has_many :users
end
