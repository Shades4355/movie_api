import React, { useState, useEffect } from 'react'

import MovieTile from "./MovieTile"

export const App = (props) => {
  const [movies, setMovies] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // search button's function
  const searchClick = () => {
    console.log("click")

    // fetch movie data from backend
    useEffect(() => {
      fetch('/api/v1/movies/' + searchTerm,
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
  }

  let handleSearchChange = event => {
    console.log(event.currentTarget.value)
    setSearchTerm(event.currentTarget.value)
  }

  let page =
    <div className='grid-container'>
      <div className='grid-x grid-margin-x'>
        <h1 className='small-12'>
          Welcome to Shades' Movie Search
        </h1>
        <input
          type='text'
          placeholder='Search...'
          className='small-10'
          onChange={handleSearchChange}/>
        <div
          className='small-2 button'
          onClick={searchClick}>
          Search
        </div>
        <div className='small-4 bold'>
        Movie Title
        </div>
        <div className='small-4 bold'>
        Thumps Up
        </div>
        <div className='small-4 bold'>
        Thumbs Down
        </div>
      </div>
    </div>

  // display if fetch request finished
  if (movies) {
    //sort 'movies' by name, then map over sorted 'movies'
    let movieTile = movies.sort((a,b) => (a.name > b.name) ? 1 : -1).map(movie => {
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
          {page}
          {movieTile}
        </div>
      </div>
    )
  } else { // display if fetch request fails
    return (
      <div>
        {page}
      </div>
    )
  }
}

export default App
