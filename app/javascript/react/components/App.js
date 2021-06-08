import React, { useState, useEffect } from 'react'

import MovieTile from "./MovieTile"

export const App = (props) => {
  const [movies, setMovies] = useState(null)

  // TODO: fetch movie data from backend

  if (movies) {
    movieTile = movies.map(movie => {
      return(
        <MovieTile
          name={movie.title}
          upvotes={movie.upvotes}
          downvotes={movie.downvotes}
        />
      )
    })

    return (
      <div className='grid-container'>
        <div className='grid-x grid-margin-x'>
          <h1 className='small-12'>
            Welcome to Shades' Movie Search
          </h1>

          <div className='small-4'>
          Movie Title
          </div>
          <div className='small-4'>
          Thumps Up
          </div>
          <div className='small-4'>
          Thumbs Down
          </div>

          <div className='small-12'>
            {movieTile}
          </div>

        </div>
      </div>
    )
  } else {
    return (
      <h3>
        Loading . . .
      </h3>
    )
  }
}

export default App
