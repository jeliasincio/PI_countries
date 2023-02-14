import React from 'react'
import './Paginado.css'

function Paginado({countriesPerPage, allCountries, paginado}) {
    const pageNumbers = []
    for (let index = 1; index <= Math.ceil(allCountries/countriesPerPage); index++) {
        pageNumbers.push(index)
    }

  return (
    <nav className='nav'>
        <ul className='paginado'>           
                {
                    pageNumbers && pageNumbers.map(number =>(
                    <li  className='number'  key={number}>
                        <button className='paginado-a' onClick={() => paginado(number) }>{number}</button>
                    </li>
                    ))
                }
            
        </ul> 
    </nav>
  )
}

export default Paginado