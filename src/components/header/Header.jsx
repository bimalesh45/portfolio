import React from 'react'
import CTA from './CTA'
import './header.css'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Bimalesh Kumar Yadav</h1>  
        <h5 className='text-light'>Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="Bimalesh Kumar Yadav" />  
        </div>
      </div>
        
    </header>
  )
}

export default Header