class ArtistsController < ApplicationController
  def index
    artists = Artist.all
    render json: artists
  end

  def show
    artist = Artist.find_by(id: params[:id])
    if artist
      render json: artist, status: :ok
    else
      render json: { error: "Artist not found" }, status: :not_found
    end
  end

  def create
    artist = Artist.create(artist_params)
    if artist.valid?
      render json: artist, status: :created
    else
      render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    artist = Artist.find_by(id: params[:id])
    if artist
      artist.update(artist_params)
      if artist.valid?
        render json: artist, status: :accepted
      else
        render json: { errors: artist.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Artist not found" }, status: :not_found
    end 
  end

  def artist_params
    params.permit(:name, :birthPlace, :activeYears)
  end

end
