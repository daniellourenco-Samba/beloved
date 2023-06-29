import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
    
  return (
    <div className="card" onClick= {() => navigate('/player')} >
            <h2>Oi Mo!</h2>
            <h2>Oce é my sunshine in a cloudy day</h2>
    </div>
  )
}

export default Home