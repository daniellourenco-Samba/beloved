import { useState } from 'react';
import './App.css';
import img1 from './data/foto1.png'

function App() {

  const url = "https://gift-repo-eurawdqtt-daniellotorres.vercel.app/razoes";  
  const [razoes, setrazoes] = useState([]);


  const click = 
    async function fetchData() {
      console.log('buscando')
      const res = await fetch(url);

      const data = await res.json();
      setrazoes(data);
  }

  const limpar = () => {
      setrazoes([]);
  }


  return (
    <div className="App">
     <h1>Aqui será o app</h1>
      <img src={img1} alt="imagem1" />
      <ul>
        {razoes.map((razao) => (
          <li key={razao.id}>{razao.texto}</li>
        ))}
      </ul>
      <button onClick={click}>Clique aqui</button>
      <button onClick={limpar}>Limpar</button>
    </div>
  );
}

export default App;

    