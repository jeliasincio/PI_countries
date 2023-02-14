import React from 'react'
import {NavLink} from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className='principal'>
      <div className='acceso'>
          <h1>Countries</h1>
          <NavLink  to={'/home'}><button>Acceder</button></NavLink>
          <br></br>
          <p><h4>Todos los Derechos Reservados - 2023</h4> </p>       
      </div>            
      
    </div>
  )
}