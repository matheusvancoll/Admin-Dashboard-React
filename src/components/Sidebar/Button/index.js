import './Button.css'

function ButtonItem(props) {
  return(
    <div>
      <div className={props.toggleState ? "sidebar__item" : "sidebar__item responsive"} id={props.active ? "active" : ""}>
          <a href="#">
            <i className={"fa fa-" +props.icon}></i>
            <span>{props.btnName}</span>
          </a>
        </div>
    </div>
  )
}

export default ButtonItem