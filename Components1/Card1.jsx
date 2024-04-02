import React from 'react'
import "./Card1.css"

const Card1 = (props) => {
  return (
    <>
    <div className="card">
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </div>
    </>
    
  )
}

export default Card1