import React from "react";
import './Letter.css'

const Letter = () => {
    
    const abrirCarta = () =>{
        document.querySelector('.letter').classList.remove('letter--close');
        document.querySelector('.letter').classList.add('letter--open');
    }

    const fecharCarta = () =>{
        document.querySelector('.letter').classList.add('letter--close');
      setTimeout(function(){
        document.querySelector('.letter').classList.remove('letter--close');
      }, 600);
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
          <p>Sua eloquencia!</p>
          <p>TIAMO!</p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
