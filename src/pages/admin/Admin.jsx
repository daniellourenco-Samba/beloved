import React from 'react'
import './Admin.css'
import { useState } from 'react'
import axios from 'axios'

const Admin = () => {

  const [opt, setOpt] = useState('msg')

  const handleSave = async() => {
    try {
      await axios.get("https://kcsbjxukps3wy6qikqz2u32egm0eqakn.lambda-url.us-east-1.on.aws/")
      alert('Request successful')
    } catch (error) {
      console.error('Error during request:', error)
    }
  }

  return (
    <div className='adm'>
      <h1>ADMIN PANEL</h1>
      <div className="form">
      <select name="mode" value={opt} onChange={(e) => {setOpt(e.target.value)}}>
        <option value="msg">Carta</option>
        <option value="msg">Mensagem</option>
        <option value="msc">Musga</option>
        <option value="glr">Galeria</option>
      </select>
      {opt === 'msg' && <input placeholder='Mensagem'></input>}
      {opt === 'msc' && <input placeholder='URL'></input>}
      {opt === 'glr' && <p>Lembre de subir as fotos no formato certo</p>}

      </div>
 
      <button onClick={handleSave}>Save and Send</button>
    </div>
  )
}

export default Admin