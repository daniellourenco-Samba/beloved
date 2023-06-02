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
    ` <h1>"And I will love you, baby, always
    And I'll be there forever and a day, always
    I'll be there 'til the stars don't shine
    'Til the heavens burst and the words don't rhyme
    And I know when I die, you'll be on my mind
    And I'll love you, always"</h1>
    <h2>É essa agui mo <a href="https://open.spotify.com/intl-pt/track/2RChe0r2cMoyOvuKobZy44?autoplay=true">Musga</a></h2>`
    
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
            <h2>Hoje eu vou te dizer o trecho de uma musga...</h2>
        </div>
    </div>
  )
}

export default Card
