import React from 'react'

import './Sidebar.css'
import logo from '../../assets/img/photo.jpeg'
import ButtonItem from './Button'

function Sidebar(props) {

  return(
    <section className="sidebar" id={props.toggleState ? "" : "responsive-sidebar"}>

      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo"/>
          <h1>Vancoll Studios</h1>
        </div>
      </div>

      <div className="sidebar__menu">
        <ButtonItem link="/dashboard" btnName="Dashboard" icon="tachometer" active={true} url="#" toggleState={props.toggleState}/>

        <ButtonItem link="/products"btnName="Produtos" icon="barcode" active={false} url="#" toggleState={props.toggleState}/>
        
        <ButtonItem link="/clients" btnName="Clientes" icon="users" active={false} url="#" toggleState={props.toggleState}/>

        <ButtonItem link="sales" btnName="Vendas" icon="calculator" active={false} url="#" toggleState={props.toggleState}/>
        
        <ButtonItem link="charts" btnName="Relatórios" icon="chart-line" active={false} url="#" toggleState={props.toggleState}/>

        <div className={props.toggleState ? "sidebar__item logout" : "sidebar__item logout responsive"}>
          <i className="fa fa-power-off"></i>
          <span>Sair</span>
        </div>
      </div>
    </section>
  )
}

export default Sidebar