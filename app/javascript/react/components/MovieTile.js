import React, { useState, useEffect } from 'react'

export const MovieTile = (props) => {
  const [visibility, setVisibility] = useState(false)

  let details = ""

  let id
  if (!props.id) {
    id = -1
  } else {
    id = props.id
  }

  let fetchData = (post, movieID) => {
    fetch('/api/v1/movies/' + movieID, post)
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
      props.setMovies(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))


  }

  if (visibility) {
    details =
      <div>
        <p><b>Publication Date:</b> {props.year}</p>
        <p><b>Headline:</b> {props.desc}</p>
      </div>
  } else {
    details =  ""
  }

  const incrementUpVotes = () => {
    let newUpvotes = props.upvotes + 1

    const post = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'PATCH',
      credentials:'same-origin',
      body: JSON.stringify({ title: props.display_title, headline: props.desc, publication_date: props.year, upvotes: newUpvotes })
    }

    fetchData(post, id)
  }

  const incrementDownVotes = () => {
    let newDownvotes = props.downvotes + 1

    const post = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'PATCH',
      credentials:'same-origin',
      body: JSON.stringify({ title: props.display_title, headline: props.desc, publication_date: props.year, downvotes: newDownvotes })
    }

    fetchData(post, id)
  }

  const reveal = () => {
    if (visibility) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }

  return(
    <div className='grid-x small-12'>
      <h3 className='small-4 cursor-pointer'
           onClick={reveal}>
        {props.title}
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
    </div>
  )

}
export default MovieTile
