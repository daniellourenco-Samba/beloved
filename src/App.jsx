import { useState } from 'react';
import './App.css';
import axios from "axios";

import Card from './components/Card'

function App() {

  const url = "https://apiu.vercel.app/";  
  const [noticia, setNoticia] = useState([]);


  const carregaNoticia = async () => {
      setNoticia([])
      await axios({
          method: "get",
            url: url
          }).then(function (response) {
            let dado = response.data
            carregaDadoNaTela(dado)
          });
  }

  const carregaDadoNaTela = (dado)=>{
    setTimeout(2000)
    setNoticia(dado)
  }

  const limpar = () => {
    setNoticia([])
  }
  
  setInterval(carregaNoticia, 4200000)

  return (
    <div className="App">
      <Card texto="Noticia" noticia={noticia.Noticia} buscaNoticia={carregaNoticia}></Card>
      <button onClick={limpar}> Limpar </button>
  </div>
  );
}

export default App;

    
