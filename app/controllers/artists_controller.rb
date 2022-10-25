class ArtistsController < ApplicationController
  def index
    artists = Artist.all
    render json: artists
  end

  def create
    artist = Artist.create(artist_params)
  end

  def artist_params
    params.permit(:title, :year, :gallery, :exhibition, :notes, :seenDate, :artist_id, :user_id)
  end

end
