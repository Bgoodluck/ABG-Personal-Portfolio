import React from 'react'

function ThemeItem({color, img, toggleColor}) {
  return (
    <img src={img} alt="" className="theme__img" onClick={()=> {toggleColor(color)}} />
  )
}

export default ThemeItem
