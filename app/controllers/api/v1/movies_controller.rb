class  Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    saved_movies = Movie.where("display_title like ?", "%#{params[:format]}%")

    if saved_movies
      movies_array = []
      saved_movies.each do |movie|
        movies_array.push(movie)
      end
    end

    searchTerm = params[:format]

    fetched_movies = HTTParty.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + searchTerm + '&api-key=' + ENV["MOVIE_KEY"]).parsed_response["results"]

    parsed_movies = []

    fetched_movies.each do |movie|
      parsed_movies.push(movie)
    end

    def compare_lists(primary_movie, secondary_list)
      secondary_list.each do |movie|
        if primary_movie["display_title"] == movie["display_title"]
          return movie
        end
      end
      return primary_movie
    end

    return_array = []

    if movies_array
      parsed_movies.each do |movie|
        return_array.push(compare_lists(movie, movies_array))
      end
      render json: return_array
    else
      render json: parsed_movies
    end
  end

  def show
    render json: Movie.find(params[:id])
  end

  def update
    # if movie is in database, update upvotes/downvotes
    updated_movie = Movie.find(params[:id])

    if updated_movie.update(movie_update_params)
      render json: [updated_movie,]
    else
          render json: { errors: updated_movie.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  def create
    new_saved_movie = Movie.new(movie_create_params)

    if new_saved_movie.save
      render json: new_saved_movie
    else
      render json: { errors: new_saved_movie.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def movie_update_params
    params.require(:movie).permit(:upvotes, :downvotes)
  end

  def movie_create_params
    params.require(:movie).permit(:display_title, :headline, :publication_date, :upvotes, :downvotes)
  end
end
