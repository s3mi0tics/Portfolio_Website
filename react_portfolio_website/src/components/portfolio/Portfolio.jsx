import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/MERN_NETFLIX_CLONE_SCREENSHOT.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt='Netflix Clone' />
          </div>
          <h3>MERN Netflix Clone</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/s3mi0tics/MERN-NETFLIX-CLONE" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt='Netflix Clone' />
          </div>
          <h3>MERN Netflix Clone</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/s3mi0tics/MERN-NETFLIX-CLONE" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt='Netflix Clone' />
          </div>
          <h3>MERN Netflix Clone</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/s3mi0tics/MERN-NETFLIX-CLONE" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
                  </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt='Netflix Clone' />
          </div>
          <h3>MERN Netflix Clone</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/s3mi0tics/MERN-NETFLIX-CLONE" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt='Netflix Clone' />
          </div>
          <h3>MERN Netflix Clone</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/s3mi0tics/MERN-NETFLIX-CLONE" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt='Netflix Clone' />
          </div>
          <h3>MERN Netflix Clone</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com/s3mi0tics/MERN-NETFLIX-CLONE" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio