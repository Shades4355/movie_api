import React from 'react'

export const MovieTile = (props) => {

  return(
    <div className='grid-x small-12'>
      <div className='small-4'>
        {props.name}
      </div>
      <div className='small-4'>
        {props.upvotes}
      </div>
      <div className='small-4'>
        {props.downvotes}
      </div>
    </div>
  )
}

export default MovieTile
