import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import './Card.css'

const Card = (props) => {
  const url = "https://apiu.vercel.app/";  
  const [razao, setRazao] = useState([]);

  const carregaRazao = async () => {
    setRazao([])
    let infos = document.querySelector('.card')
    infos.innerHTML = 
    ` <h1>Oce cuida di eu (i eu sempe vo cuidar do ce)</h1>`
    
    await axios({
        method: "get",
          url: url
        }).then(function (response) {
          let dado = response.data
          setRazao(dado)
        });
  }     
  return (
    <div>
        <div className="card" onClick={(e) => {carregaRazao()}}>
            <h2>Oi Mo!</h2>
            <h2>Eu te amo puque...</h2>
        </div>
    </div>
  )
}

export default Card
