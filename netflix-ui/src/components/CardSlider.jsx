import React from 'react'
import Card from "./Card";


function CardSlider(props) {
  return (
    <>
    <div className='flex column' >
  {props.data.map((movie, index)=>{
    return <Card movieData={movie} index={index} key={movie.id}/>
  })}
  </div>
    </>
  )
}

export default CardSlider