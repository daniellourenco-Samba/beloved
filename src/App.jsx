import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const url = "https://apiu-daniellotorres.vercel.app/";  
  const [razao, setRazao] = useState([]);


  const carregaRazao = async () => {
      console.log('requisitando' + url)
      await axios({
          method: "get",
            url: url
          }).then(function (response) {
            setRazao(response.data)
          });
      console.log(razao);
  }


  const limpar = () => {
      setRazao([]);
  }
  
  setInterval(carregaRazao, 30 * 1000 )

  return (
    <div className="App">
      <div className="card">
        <h2>texto estara aqui</h2>
        <h2>{razao.Num}</h2>
        <h2>{razao.Reason}</h2>
        <button onClick={carregaRazao}></button>
        <button onClick={limpar}>Limpar</button>
      </div>
  </div>
  );
}

export default App;

    
