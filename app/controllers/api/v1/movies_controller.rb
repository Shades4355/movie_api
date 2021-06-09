class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    movies = Movie.all

    render json: movies
  end

  def show
    render json: Movie.find(params[:id])
  end

  def update
    updated_movie = Movie.find(params[:id])
    if updated_movie.update(params[:movie])
      render json: updated_movie
    else
      render json: { errors: updated_movie.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

end
