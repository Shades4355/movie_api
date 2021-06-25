class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    saved_movies = Movie.where("display_title like ?", "%#{params[:format]}%")

    movies_array = []
    saved_movies.each do |movie|
      movies_array.push(movie)
    end

    binding.pry # TODO: remove 

    searchTerm = params[:format]

    fetched_movies = HTTParty.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + searchTerm + '&api-key=' + ENV["MOVIE_KEY"]).parsed_response["results"]

    parsed_movies = []

    fetched_movies.each do |movie|
      parsed_movies.push(movie)
    end

    if movies_array
      parsed_movies.each do |movie|
        if not movies_array.include?(movie)
          movies_array.push(movie)
        end
      end
      render json: movies_array
    else
      render json: parsed_movies
    end
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
