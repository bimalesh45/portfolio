import React from 'react'
import './footer.css'
import {BsInstagram, BsFacebook, BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Bimalesh Kumar Yadav</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonals</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/yadav.vimalesh.9' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/bimalesh07/?hl=en' target='_blank'><BsInstagram/></a>
        <a href='https://github.com/bimalesh07?tab=repositories' target='_blank'><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Bimalesh Kumar Yadav. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer