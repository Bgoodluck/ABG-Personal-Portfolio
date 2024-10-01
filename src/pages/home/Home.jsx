import React from 'react'
import './Home.css'
import Profile from "../../assets/ABG4.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Home() {
  return (
    <section className="home section grid">
       <img src={Profile} alt="" className="home__img" />

       <div className="home__content">
         <div className="home__data">
           <h1 className="home__title"> 
             <span>I'm Adebisi Bobby Goodluck.</span> <br /> Software Developer 
            </h1>

            <p className="home__description">
              I am a passionate, dedicated, and creative software engineer with a background in web development. I have a keen eye for detail and a strong understanding of user interactions. <br /> Skilled in both frontend and backend development, with expertise in React, React-Native, Node.js, Next.js, JavaScript, HTML, CSS, Styled Components, Gatsby and TypeScript, Passionate about creating seamless user experiences and writing clean, efficient code to bring innovative ideas to life.
            </p>

            <Link to='/about' className='button'>
               More About Me <span className='button__icon'>
                <FaArrowRight/>
               </span>
            </Link>
         </div>
       </div>

       <div className="color__block"></div>
    </section>
  )
}

export default Home
