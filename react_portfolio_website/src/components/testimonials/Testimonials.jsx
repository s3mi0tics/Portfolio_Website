import React from 'react'
import './testimonials.css'
import data from '../../data/data.js'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={ avatar } alt={`avatar for ${name}`} />
              </div>
              <h5 className="client_name">{ name }</h5>
              <small className="client_review">{ review }</small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials