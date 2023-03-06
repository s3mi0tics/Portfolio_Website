import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { LINKEDIN, WHATSAPP, EMAIL } from '../../utils/constants/socialLinks'


const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Tough</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

      {/* Contact Options */}
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>colby.kauk@gmail.com</h5>
            <a href={`mailto:${EMAIL}`} target='_blank' rel="noreferrer">Email Me</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>Colby Kauk</h5>
            <a href={ LINKEDIN } target='_blank' rel="noreferrer">Profile</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>Colby Kauk</h5>
            <a href={ WHATSAPP } target='_blank' rel="noreferrer">Send A Message</a>
          </article>
        </div>

        {/* Form */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact