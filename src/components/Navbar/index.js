import {React, useState} from 'react'
import './Navbar.css'


function Navbar({toggleState, toggleMove}) {
  return(
    <nav className="navbar" id={toggleState ? "" : "max-responsive"}>
      <div className="navbar__toggle">
        <i 
          className="fa fa-bars" 
          onClick={toggleMove}>
        </i>
      </div>
      <div className="navbar__icons">
        <a>
          <i className="fa fa-cog"></i>
        </a>
      </div>
    </nav>
  )
}

export default Navbar