import React from 'react'
import { portfolio } from '../../data'
import './Portfolio.Css'
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem'



function Portfolio() {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>


      <div className="portfolio__container container grid">
          {
            portfolio.map((item)=> {
              return <PortfolioItem key={item.id} {...item}/>
            })
          }
      </div>
      <div className='btn'>
      <a href="https://github.com/Bgoodluck?tab=repositories" target="_blank" rel="noreferrer" className="btn">See more</a>
      </div>
    </section>
  )
}

export default Portfolio
