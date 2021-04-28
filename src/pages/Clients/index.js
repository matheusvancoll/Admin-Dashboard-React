import React from 'react'

function ClientsPage(props){
  return(
    <div id={props.toggleState ? "" : "close-sidebar"}>
      <h1>Clientes!</h1>
    </div>
  )
}

export default ClientsPage