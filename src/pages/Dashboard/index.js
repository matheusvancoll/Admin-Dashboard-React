import React from 'react'

function DashboardPage(props){
  return(
    <div id={props.toggleState ? "" : "close-sidebar"}>
      <h1>Dashboard!</h1>
    </div>
  )
}

export default DashboardPage