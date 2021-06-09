class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    movies = Movie.all

    render json: movies
  end

  def show
    render json: Movie.find(params[:id])
  end

end
