import React from 'react'
import './Admin.css'
import { useState } from 'react'

const Admin = () => {

  const [opt, setOpt] = useState('msg')

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
 

    </div>
  )
}

export default Admin