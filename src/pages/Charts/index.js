import React from 'react'

function ChartsPage(props){
  return(
    <div id={props.toggleState ? "" : "close-sidebar"}>
      <h1>Charts!</h1>
    </div>
  )
}

export default ChartsPage