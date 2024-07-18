import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
function Header() {
  return (
    <div className='header'>
        <NavLink to='/'>
        <img className='logo' src='./img/logo.png' alt='my logo img'/>
        </NavLink>
       <Navbar/> 
    </div>
  )
}

export default Header