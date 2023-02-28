import React from 'react'
import './about.css'
import MEME from '../../assets/meme2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={MEME} alt = "about head-shot" />
          </div>
        </div>

        <div className="about_content">

            <div className="about_cards">

              <article className='about_card'>
              <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>Coding Dojo</small>
              </article>

              <article className='about_card'>
              <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>Trusted By</small>
              </article>

              <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>Recent Work</small>
              </article>

              <p>
              I am a Dedicated full-stack developer on a journey to help improve the world through code. Focused on creating quality systems by using good habits and processes. Proficient in Python, Java, React, mySQL, and mongoDB. Gritty and diligent engineer focused on growth, with a  willingness to learn and a curiosity to gain a deeper understanding of coding. Skilled problem solver able to self-manage during independent projects and collaborate in a team setting. 
              </p>

              <a href='#contact' className='btn btn-primary'>Let's Talk</a>

            </div>

        </div>
      </div>
    </section>
  )
}

export default About