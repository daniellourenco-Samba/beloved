import { useState } from 'react';
import './App.css';
import img1 from './data/foto1.png'

function App() {

  const url = "https://apiu-daniellotorres.vercel.app/";  
  const [razao, setRazao] = useState([]);


  const click = 
    async function fetchData() {
      console.log('buscando')
      const res = await fetch(url);

      const data = await res.json();
      setRazao(data);
  }

  const limpar = () => {
      setRazao([]);
  }


  return (
    <div className="App">
     <h1>Aqui será o app</h1>
      <h2>Eu te amo porque</h2>
      <h2>{razao}</h2>
      <button onClick={click}>Clique aqui</button>
      <button onClick={limpar}>Limpar</button>
    </div>
  );
}

export default App;

    
