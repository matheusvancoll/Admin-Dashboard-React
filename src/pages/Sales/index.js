import React from 'react'

function SalesPage(props){
  return(
    <div id={props.toggleState ? "" : "close-sidebar"}>
      <h1>Sales!</h1>
    </div>
  )
}

export default SalesPage