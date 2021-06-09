import React from 'react'

export const MovieTile = (props) => {

  const increment = props => { // TODO: make this increment the correct value
    console.log("click")
    console.log("Props: ", props)
  }

  const reveal = () => {
    // TODO: make this reveal the description
    console.log(props.name, "clicked")
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
           onClick={increment}
      >
        [x]
      </div>
      <div className='small-2'>
      </div>
      <div className='small-1'>
        {props.downvotes}
      </div>
      <div className='small-1 cursor-pointer'
           onClick={increment}
      >
        [x]
      </div>
      <div className='small-2'>
      </div>
      <div className='small-12'>
        <p><b>Release Year:</b> {props.year}</p>
        <p><b>Director:</b> {props.director}</p>
        <p><b>Description:</b> {props.desc}</p>
      </div>
    </ul>
  )
}

export default MovieTile
