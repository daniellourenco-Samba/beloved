import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
    
  return (
    <div className="card" onClick= {() => navigate('/photos')} >
            <h2>Oi Mo!</h2>
            <h2>Oia, uma fotinha favorita minha para cada mês nosso junto...</h2>
    </div>
  )
}

export default Home