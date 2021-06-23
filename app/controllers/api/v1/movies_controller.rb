class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    movies = Movie.where("title like ?", "%#{params[:format]}%")

    render json: movies
  end

  def show
    render json: Movie.find(params[:id])
  end

  def update
    # if movie is in database, update upvotes/downvotes
    if params[:id] != -1
        updated_movie = Movie.find(params[:id])

      if updated_movie.update(movie_update_params)
        render json: [updated_movie,]
      else
            render json: { errors: updated_movie.errors.full_messages.to_sentence }, status: :unprocessable_entity
      end
    else
      # if movie isn't in database, add movie to database

    end
  end

  private

  def movie_update_params
    params.require(:movie).permit(:upvotes, :downvotes)
  end

  def movie_create_params
    params.require(:movie).permit(:title, :description, :year, :director, :upvotes, :downvotes)
  end
end
