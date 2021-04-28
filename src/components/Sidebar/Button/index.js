import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

function ButtonItem(props) {
  return(
    <div>
      <div className={props.toggleState ? "sidebar__item" : "sidebar__item responsive"} id={props.active ? "active" : ""}>
        <Link to={props.link}>
          <i className={"fa fa-" +props.icon}></i>
          <span>{props.btnName}</span>
        </Link>
        </div>
    </div>
  )
}

export default ButtonItem