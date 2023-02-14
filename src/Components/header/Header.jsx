import React from 'react'
import './header.css'
import CTA from './CTA'
import {AiFillCaretDown} from "react-icons/ai";
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola me llamo</h5>
        <h1>Lautaro Maza</h1>
        <h5 className="text-light">Desarrollador Frontend</h5>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className='scroll__down'>{AiFillCaretDown} </a>
      </div>
    </header>
  )
}

export default Header
