class ArtworksController < ApplicationController
  before_action :authorized

  def index
    artworks = Artwork.all
    render json: artworks, status: :ok, each_serializer: IndexArtworkSerializer
  end

  def show
    artwork = Artwork.find_by(id: params[:id])
    if artwork
      render json: artwork, status: :ok, serializer: ShowArtworkSerializer
    else
      render json: { error: "Artwork not found" }, status: :not_found
    end
  end

  def create
    artwork = Artwork.create!(artwork_params)
    render json: artwork, status: :created
  end

  def update
    artwork = Artwork.find_by(id: params[:id])
    if artwork
      artwork.update(artwork_params)
      if artwork.valid?
        render json: artwork, status: :accepted
      else
        render json: { errors: artwork.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Artwork not found" }, status: :not_found
    end 
  end

  def destroy
    artwork = Artwork.find_by(id: params[:id])
    if artwork
      artwork.destroy
      render json: {}, status: :ok
    else
      render json: { error: "Artwork not found" }, status: :not_found
    end
  end

  private

    def authorized
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def artwork_params
      params.permit(:image, :title, :year, :gallery, :exhibition, :notes, :seenDate, :artist_id, :user_id)
    end
end
