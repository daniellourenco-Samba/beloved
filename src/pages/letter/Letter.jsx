import React from "react";
import './Letter.css'

const Letter = () => {
    
    const abrirCarta = () =>{
        document.querySelector('.letter').classList.remove('letter--close');
        document.querySelector('.letter').classList.add('letter--open');
    }

    const fecharCarta = () =>{
      document.querySelector('.letter').classList.remove('letter--open');
      document.querySelector('.letter').classList.add('letter--close');
    }

    
  return (
    <div className="letter" style={{position:'absolute'}}>
      <div className="envelope" onClick={(e) => {abrirCarta()}}>
        <div className="envelope-flap"></div>
        <div className="envelope-paper"></div>
        <div className="envelope-detail"></div>
      </div>
      <div className="paper">
        <div className="paper-content">
          <div className="paper-close" onClick={(e) => {fecharCarta()}}>x</div>
          <p>Feliz dia 12 mozinho!!</p>
          <p>Sou muito feliz por te ter ao meu lado. Quero que nossos dias 12 sejam infinitos e eternos. Eu te amo muito, te quero para sempre. Te amo mais que onti e menos que amanhã!</p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
