import React from 'react'
import {NavLink} from 'react-router-dom'
import './Card.css'

function Card({flag, name, continent, id}) {
  return (
    <div className='template'>
      {
        !flag ? '':<img className='paises'  src={flag} alt={'Flag of Country'}  />
      }
      
        <h2>{name}</h2>
      <h4>{continent}</h4>
      {
        !continent ? '' : <NavLink className={'card-detail'} to={`/detail/${id}`} >
        Detalle
      </NavLink> 
      }
      
    </div>
  )
}

export default Card