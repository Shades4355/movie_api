import React, { useState } from 'react'

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

  const incrementUpVotes = () => { // TODO: make this increment the correct value
    let newUpvotes = props.upvotes + 1

    const post = {
      method:'POST',
      credentials:'same-origin',
      body: JSON.parse({ upvotes: newUpvotes })
    };

    fetch('/api/v1/movies/' + props.id, post)
    console.log('/api/v1/movies/' + props.id)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.statuse} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })

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
