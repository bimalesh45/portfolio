import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/bimalesh-yadav-00a484217/' target='_blank' ><BsLinkedin/></a>
        <a href='https://github.com/bimalesh07?tab=repositories' target='_blank' ><BsGithub/></a>
        <a href='https://www.facebook.com/yadav.vimalesh.9' target='_blank' ><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials