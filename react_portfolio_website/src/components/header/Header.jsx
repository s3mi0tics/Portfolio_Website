import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/meme.png'
import HeaderSocials from './HeaderSocials'
import { LINKEDIN } from '../../utils/constants/socialLinks'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="header-title">
          <a href={ LINKEDIN }>Colby Kauk</a>
        </h1>
        <h5 className="headline text-light ">Full-stack Developer</h5> 
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="head shot" />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header