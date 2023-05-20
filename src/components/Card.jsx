import React from 'react'
import './Card.css'



const Card = (props) => {
  return (
    <div>
        <div className="card" onClick={(e) => {props.buscaNoticia()}}>
            <h4>{props.texto}</h4>
            <h1>{props.noticia} </h1>
        </div>
    </div>
  )
}

export default Card