import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
    
  return (
    <div className="card" onClick= {() => navigate('/music')} >
            <h2>Oi Mo!</h2>
            <h2>Ainda pensando em você ouvindo essa direto...</h2>
    </div>
  )
}

export default Home