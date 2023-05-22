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
    `<h1>Eu te amo porque</h1><h2>Você me transmite a maior segurança do mundo!</h2>`
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
            <h2>Finalmente a espera acabou, seu presente está aqui!</h2>
            <h3>Lembra da dica do Bereal ? <br />
              Esse é o Beloved, todo dia ele vai te mandar uma mensagem proce vir aqui.
              Quero que você lembre como eu te amo, então diariamente eu vou te dizer um motivo pelo qual te amo!
            </h3>
            <h5>Também teremos algumas surpresas nesse app aqui rs</h5>
            <h6>Agora clica no card pra ver um motivo pelo qual te amo</h6>
        </div>
    </div>
  )
}

export default Card
