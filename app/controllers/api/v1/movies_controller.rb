class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    movies = Movie.where("name like ?", "%#{params[:format]}%")

    render json: movies
  end

  def update
    # if movie is in database, update upvotes/downvotes
    if params[:id] != -1
      updated_movie = Movie.where(name: params[:format])

      if updated_movie.update(movie_params)
        render json: updated_movie
      else
        render json: { errors: updated_movie.errors.full_messages.to_sentence }, status: :unprocessable_entity
      end
    else
      # if movie isn't in database, add movie to database

    end
  end

  private

  def movie_params
    params.require(:movie).permit(:upvotes, :downvotes)
  end
end
