import './App.css';
import Logo from './data/logo.svg'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home'
import Card from './components/card/Card'
import Player from './components/player/player';


function App() {
  
  return (
    <div className="App">
      <img src={Logo} alt="Beloved." className='logo'/>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
          <Route path='/music' element={<Player/>}></Route>
         </Routes>
       </BrowserRouter>
  </div>
  );
}

export default App;

    
