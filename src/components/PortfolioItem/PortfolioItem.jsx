import React, { useState } from 'react'
import Close from '../../assets/close.svg'
import { Link } from 'react-router-dom'



const urlRegex = /(https?:\/\/[^\s]+)/g;

function PortfolioItem({ img, title, details, vid }) {

  const [modal, setModal] = useState(false);


  const toggleModal = ()=>{
    setModal(!modal);
  }


  const isValidUrl = (string) => {
    return urlRegex.test(string);
  };


  return (
    <div className='portfolio__item'>
        <img src={img} alt="" className="portfolio__img" />

        <div className="portfolio__hover" onClick={toggleModal}>
          <h3 className='portfolio__title'>{title}</h3>          
        </div>

        {
          modal && (
            <div className="portfolio__modal">
           <div className="portfolio__modal-content">
              <img src={Close} alt="" className="modal__close" onClick={toggleModal} />

              <h3 className="modal__title">{title}</h3>

              <ul className="modal__list grid">
                {
                  details.map(({icon, title, desc}, index)=>{
                   return(
                    <li className="modal__item" key={index}>
                      <span className="item__icon">{icon}</span>

                      <div>
                         <span className="item__title">{title}</span>
                         {isValidUrl(desc) ? (
                            <a href={desc} target="_blank" rel="noopener noreferrer" className="item__details">
                              {desc}
                            </a>
                          ) : (
                            <span className="item__details">{desc}</span>
                          )}
                      </div>
                    </li>
                   ) 
                  })
                }
              </ul>

              {/* <img src={img} alt="" className="modal__img" /> */}
              <video src={vid} controls autoPlay loop muted className="modal__img"></video>
           </div>
        </div>
          )
        }
    </div>
  )
}

export default PortfolioItem
