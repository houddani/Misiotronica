import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"


export default function NotFound() {
  return (
      <div className='error'>
          <h1>Ups! Parece que te perdiste.</h1>
          <p>Aquí hay algunos links que te pueden servir:</p>
          <Link to='/' className='error-links'>Inicio</Link>
          <Link to='/contact' className='error-links'>Contacto</Link>
      </div>
  )
}