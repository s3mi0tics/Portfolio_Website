import React from 'react'
import './portfolio.css'
import data from "../../data/data.js"



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.projects.map(({id, image, title, github, website}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  {github ? <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a> : null}
                  {website ? <a href={website} className="btn btn-primary" target='_blank' rel="noreferrer">Website</a> : null}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio