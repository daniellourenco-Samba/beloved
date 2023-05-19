import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const url = "https://apiu-daniellotorres.vercel.app/";  
  const [razao, setRazao] = useState([]);


  const carregaRazao = async () => {
      setRazao([])
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
    setRazao(dado)
  }
  
  setInterval(carregaRazao, 4200000)

  return (
    <div className="App">
      <div className="card">
        <h2>Eu te amo porque</h2>
        <h2>{razao.Reason}</h2>
      </div>
      <button onClick={carregaRazao}></button>
  </div>
  );
}

export default App;

    
