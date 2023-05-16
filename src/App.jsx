import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [i, setI] = useState(0)
  const url = "https://apiu-daniellotorres.vercel.app/";  
  const [razao, setRazao] = useState([]);


  const mudaRazao = async () => {
      await axios({
          method: "get",
            url: url
          }).then(function (response) {
            setRazao(response.data)
          });
      i < 12 ? setI(i + 1) : setI(i)
    }


  const limpar = () => {
      setRazao([]);
  }
  
  setInterval(mudaRazao, 1 * 3 * 1000 )

  return (
    <div className="App">
     <h1>Aqui será o app</h1>
      <h2>Eu te amo porque</h2>
      <h2>{razao.texto}</h2>
      <button onClick={limpar}>Limpar</button>
    </div>
  );
}

export default App;

    
