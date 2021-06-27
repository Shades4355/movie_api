import React, { useState } from 'react'

export const MovieTile = (props) => {
  const [visibility, setVisibility] = useState(false)

  let details = ""
  let id
  let upvotes
  let downvotes

  let fetchPostData = (post) => {
      fetch('/api/v1/movies/', post)
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
  let fetchPatchData = (patch, movieID) => {
      fetch('/api/v1/movies/' + movieID, patch)
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

  if (props.id) {
    id = props.id
  } else {
    id = -1
  }

  if (props.upvotes) {
    upvotes = props.upvotes
  } else {
    upvotes = 0
  }

  if (props.downvotes) {
    downvotes = props.downvotes
  } else {
    downvotes = 0
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
    let newUpvotes = upvotes + 1

    const patch = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'PATCH',
      credentials:'same-origin',
      body: JSON.stringify({ display_title: props.title, headline: props.desc, publication_date: props.year, upvotes: newUpvotes, downvotes: downvotes })
    }

    const post = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'POST',
      credentials:'same-origin',
      body: JSON.stringify({ display_title: props.title, headline: props.desc, publication_date: props.year, upvotes: newUpvotes, downvotes: downvotes })
    }

    if (id === -1) {
      fetchPostData(post)
    } else {
      fetchPatchData(patch, id)
    }
  }

  const incrementDownVotes = () => {
    let newDownvotes = downvotes + 1

    const patch = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'PATCH',
      credentials:'same-origin',
      body: JSON.stringify({ display_title: props.title, headline: props.desc, publication_date: props.year, downvotes: newDownvotes, upvotes: upvotes })
    }

    const post = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'POST',
      credentials:'same-origin',
      body: JSON.stringify({ display_title: props.title, headline: props.desc, publication_date: props.year, downvotes: newDownvotes, upvotes: upvotes })
    }

    if (id === -1) {
      fetchPostData(post)
    } else {
      fetchPatchData(patch, id)
    }
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
        {upvotes}
      </div>
      <div className='small-1 cursor-pointer'
           onClick={incrementUpVotes}
      >
        [x]
      </div>
      <div className='small-2'>
      </div>
      <div className='small-1'>
        {downvotes}
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
