import React from 'react'
import {NavLink} from 'react-router-dom'
import './SearchBar.css'

function NavBar() {
  return (
    <div className='container'>
        <NavLink className='activity' to={'/home'}>HOME</NavLink>
    </div>
  )
}

export default NavBar