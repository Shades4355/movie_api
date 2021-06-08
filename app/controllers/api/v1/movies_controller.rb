class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    movies = Movie.all

    render json: movies
  end
  
end
