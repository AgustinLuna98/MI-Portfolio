import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import GB from '../../assets/Goku-Black.png'

const Header = () => {
  return (
    <header id="">
      <div className="conteiner header-container">
        
        <h5>Hola yo soy</h5>
        <h1>Agustín Luna</h1>
        <h5 className="text-light">Desarrollador FullStak</h5>
        <CTA />
        <HeaderSocial />
        <a href="#contact" className="scroll-down">Scroll down</a>
        <div className="gbImag">
          <img src={GB} className="img-fluid" alt=""/>
        </div>
        
      </div>
    </header>
  )
}

export default Header