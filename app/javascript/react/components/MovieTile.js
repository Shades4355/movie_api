import React, { useState, useEffect } from 'react'

export const MovieTile = (props) => {
  const [visibility, setVisibility] = useState(false)

  let details = ""

  if (visibility) {
    details =
      <div>
        <p><b>Release Year:</b> {props.year}</p>
        <p><b>Director:</b> {props.director}</p>
        <p><b>Description:</b> {props.desc}</p>
      </div>
  } else {
    details =  ""
  }

  const incrementUpVotes = () => {
    let newUpvotes = parseInt(props.upvotes) + 1

    const post = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'PATCH',
      credentials:'same-origin',
      body: JSON.stringify({ upvotes: newUpvotes })
    };

    useEffect(() => {
      fetch('/api/v1/movies/' + props.id, post)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.statuse} (${response.statusText})`,
          error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => {
        console.log("response:", response)
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
        props.setMovies(...props.movies, body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    },[])
  }

  const incrementDownVotes = () => { // TODO: make this increment the correct value
    console.log("click")
    console.log("ID: ", props.id)
    console.log("up/down: Down")
  }

  const reveal = () => {
    if (visibility) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }

  return(
    <ul className='grid-x small-12'>
      <h3 className='small-4 cursor-pointer'
           onClick={reveal}>
        {props.name}
      </h3>
      <div className='small-1'>
        {props.upvotes}
      </div>
      <div className='small-1 cursor-pointer'
           onClick={incrementUpVotes}
      >
        [x]
      </div>
      <div className='small-2'>
      </div>
      <div className='small-1'>
        {props.downvotes}
      </div>
      <div className='small-1 cursor-pointer'
           onClick={incrementDownVotes}
      >
        [x]
      </div>
      <div className='small-2'>
      </div>
      <div className='small-12'>
        {details}
      </div>
    </ul>
  )

}
export default MovieTile
