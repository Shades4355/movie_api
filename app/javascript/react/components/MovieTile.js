import React from 'react'

export const MovieTile = (props) => {

  const increment = props => { // TODO: make this increment the correct value
    console.log("click")
    console.log("Props: ", props)
  }

  const reveal = () => {
    console.log(props.name, "clicked")
  }

  return(
    <div className='grid-x small-12'>
      <div className='small-4 cursor-pointer'
           onClick={reveal}>
        {props.name}
      </div>
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
      <div >
      </div>
    </div>
  )
}

export default MovieTile
