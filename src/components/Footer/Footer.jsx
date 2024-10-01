import React from 'react'
import { FaCopyright } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";

import './Footer.css'


function Footer() {


  return (
    <div>
        <div className="copyright">


        <p>ALL right reserved. <i><FaCopyright /></i> @ABG 2024. Made with <i ><FaRegHandshake /></i></p>
      </div>
    </div>
  )
}

export default Footer
