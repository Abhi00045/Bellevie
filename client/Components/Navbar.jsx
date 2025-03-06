import React from 'react'
import '../styles/Navbar.css'
import {assets} from '../assets/frontend_assets/assets'


const Navbar = () => {
  return (
    <>
    <div id='mainBar'>
      <div className="mainLogo">
      <img src={assets.bellevie} id='lofgo'/>
      </div>
      <div className="maintwo">
        <h1>hii</h1>
      </div>
      <div className="mainthree"></div>
    </div>
    </>
  )
}

export default Navbar