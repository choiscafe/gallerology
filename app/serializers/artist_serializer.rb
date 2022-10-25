class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthPlace, :activeYears
end
