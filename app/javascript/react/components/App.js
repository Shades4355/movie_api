import React, { useState, useEffect } from 'react'

import MovieTile from "./MovieTile"

export const App = (props) => {
  const [movies, setMovies] = useState(null)

  // fetch movie data from backend
  useEffect(() => {
    fetch('/api/v1/movies',
      {credentials:'same-origin'})
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.statuse} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setMovies(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  // display if fetch request finished
  if (movies) {
    let movieTile = movies.map(movie => {
      return(
        <MovieTile
          key={movie.id}
          id={movie.id}
          name={movie.name}
          year={movie.release_year}
          director={movie.director}
          desc={movie.description}
          upvotes={movie.upvotes}
          downvotes={movie.downvotes}
          movies={movies}
          setMovies={setMovies}
        />
      )
    })

    // the page's actual contents
    return (
      <div className='grid-container'>
        <div className='grid-x grid-margin-x'>
          <h1 className='small-12'>
            Welcome to Shades' Movie Search
          </h1>

          <div className='small-4 bold'>
          Movie Title
          </div>
          <div className='small-4 bold'>
          Thumps Up
          </div>
          <div className='small-4 bold'>
          Thumbs Down
          </div>

            {movieTile}

        </div>
      </div>
    )
  } else { // display if fetch request fails
    return (
      <div>
        <h3>
          Loading...
        </h3>
        <div>
          If this message persists for more than a few seconds, please refresh.
        </div>
      </div>
    )
  }
}

export default App
