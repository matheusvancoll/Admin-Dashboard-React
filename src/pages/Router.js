import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Dashboard from './Dashboard'
import Products from './Products'
import Clients from './Clients'
import Sales from './Sales'
import Charts from './Charts'

function RouterDirection(props){
  return(
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard toggleState={props.toggleState}/>
      </Route>

      <Route exact path="/products">
        <Products toggleState={props.toggleState}/>
      </Route>

      <Route exact path="/clients">
        <Clients toggleState={props.toggleState} />
      </Route>

      <Route exact path="/sales">
        <Sales toggleState={props.toggleState} />
      </Route>

      <Route exact path="/charts">
        <Charts toggleState={props.toggleState} />
      </Route>
    </Switch>
  )
}

export default RouterDirection