import React from 'react'
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
          <i className="fa fa-cog"></i>
      </div>
    </nav>
  )
}

export default Navbar