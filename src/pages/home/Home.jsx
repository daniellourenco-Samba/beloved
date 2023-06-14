import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
    
  return (
    <div className="card" onClick= {() => navigate('/message')} >
            <h2>Oi Mo!</h2>
            <h2>Eu muito grato...</h2>
    </div>
  )
}

export default Home