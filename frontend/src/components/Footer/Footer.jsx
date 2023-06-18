import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div>
        <span className='logo'>Construction Materials</span>
        <ul className='nav'>
          <li><Link to={'/about'}>про нас</Link></li>
          <li><Link to={'/contacts'}>контакты</Link></li>
        </ul></div>
      <div className='prava'> все права защищенны &copy;</div>
    </footer>
  )
}
