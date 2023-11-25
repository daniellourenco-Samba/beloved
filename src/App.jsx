import './App.css';
import Logo from './data/logo.svg'


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home/Home'
import Message from './pages/message/Message'
import Player from './pages/player/Player'
import Gallery from './pages/gallery/Gallery'
import Letter from './pages/letter/Letter'
import Admin from './pages/admin/Admin'



function App() {
  return (
    <div className="App">
      <a href="/">
      <img src={Logo} alt="Beloved." className='logo'/></a>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/message' element={<Message/>}></Route>
          <Route path='/player' element={<Player/>}></Route>
          <Route path='/photos' element={<Gallery/>}></Route>
          <Route path='/letter' element={<Letter/>}></Route>
          <Route path='/adm' element={<Admin/>}></Route>
         </Routes>
       </BrowserRouter>
  </div>
  );
}

export default App;

    
