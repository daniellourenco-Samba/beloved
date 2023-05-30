import './App.css';

import Card from './components/Card'
import Logo from './data/logo.svg'

function App() {
  
  return (
    <div className="App">
      <img src={Logo} alt="Beloved." className='logo'/>
      <Card></Card>
  </div>
  );
}

export default App;

    
