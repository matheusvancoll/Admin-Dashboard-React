import React from 'react'
import './Products.css'

function ProductsPage(props){
  return(
    <div id={props.toggleState ? "" : "close-sidebar"}>
      <h1>Products!</h1>
    </div>
  )
}

export default ProductsPage