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
    ` <h1>Shed a tear 'cause I'm missing you
I'm still alright to smile
Girl, I think about you every day now
Was a time when I wasn't sure
But you set my mind at ease
There is no doubt you're in my heart now

Said: Woman, take it slow
And it'll work itself out fine
All we need is just a little patience
Said: Sugar, make it slow
And we'll come together fine
All we need is just a little patience
Patience</h1>`
    
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
            <h2>Oiva una musga...</h2>
        </div>
    </div>
  )
}

export default Card
