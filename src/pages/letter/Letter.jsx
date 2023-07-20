import React from "react";
import './Letter.css'
import image1 from '../../data/aaaa.JPG'

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
          <p>Amo o seu crescimento, é gratificante assistir de pertinho. Te amo muito, tenho orgulho de você!</p>
          <p>sabia ?</p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
