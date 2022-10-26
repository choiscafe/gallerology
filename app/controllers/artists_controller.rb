class ArtistsController < ApplicationController
  def index
    artists = Artist.all
    render json: artists
  end

  def create
    artist = Artist.create(artist_params)
    if artist.valid?
      render json: artist, status: :created
    else
      render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def artist_params
    params.permit(:name, :birthPlace, :activeYears)
  end

end
