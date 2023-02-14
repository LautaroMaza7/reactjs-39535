import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dicssar.jpg'
import IMG2 from '../../assets/janosblogmobile.jpg'
import IMG3 from '../../assets/janosmac.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dic Security Solutions',
    github: 'https://github.com',
    Link: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Janos Eventos BLOG',
    github: 'https://github.com',
    Link: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Janos Eventos Landing Page',
    github: 'https://github.com',
    Link: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis Recientes Trabajos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, Link}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={Link} className='btn btn-primary' target='_blank'>Link</a>
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