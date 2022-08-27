import React from 'react'
import '../css/header.css'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header>
        <img src={logo} className='logo' alt=""/>
        <nav>
            <ul>
                <li><a href="/" className='active__page'>HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
                <li><button><a href="/compose">NEW POST</a></button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header