import React from 'react'
import { EMAIL, GITHUB, LINKEDIN } from '../../utils/constants/socialLinks'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials= () => {
  return (
    <div className='header_socials'>
      <a href={LINKEDIN} target='_blank'><BsLinkedin /></a> 
      <a href={GITHUB} target='_blank'><FaGithub /></a> 
    </div>
  )
}

export default HeaderSocials