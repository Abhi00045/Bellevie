import React from 'react'
import '../styles/Navbar.css'
import {assets} from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div id='mainBar'>
      <div className="mainLogo">
      <img src={assets.bellevie} id='lofgo'/>
      </div>
      <div className="maintwo">
        <ul>
          <li><NavLink to="/"><p>Home</p></NavLink></li>
          <li><NavLink to="/collection"><p>Collection</p></NavLink></li>
          <li><NavLink to="/about"><p>About</p></NavLink></li>
          <li><NavLink to="/contact"><p>Contact</p></NavLink></li>
        </ul>
      </div>
      <div className="mainthree">
        <ul>
        <div className="searchbar">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder='Search' className='hoveredbar' />

        </div>
        <div className="cart">
          <img src={assets.cart_icon} alt="" />
          <div className="cartNum">
            <p>0</p>
          </div>
        </div>
          <div className="group-relative">
            <img src={assets.profile_icon} alt="" />
            <div className="dropdown">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          </div>
          <div className="menubar">
            <img src={assets.menu_icon} alt="" />
            {/* <div className="menubarDropdown">
              <p>Collection</p>
              <p>About</p>
              <p>Contact</p
              ><p>My Profile</p
              ><p>Orders</p>
              <p>Logout</p>
            </div> */}
          </div>
          </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar

// jai bhavani jai bhadrakhali matha 