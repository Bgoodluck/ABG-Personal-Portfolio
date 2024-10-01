import React from 'react'
import './App.css'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Themes from './components/Themes/Themes'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom';




function App() {

  const location = useLocation();

  return (
    
    <div>
      <>
            <Navbar />
            <Themes />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
          {location.pathname !== '/' && <Footer />}  
      </>
       
    </div>
  )
}

export default App
