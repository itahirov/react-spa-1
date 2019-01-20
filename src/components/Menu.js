import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/commonStyle.css'

const Menu = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/fees">Fees</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default Menu