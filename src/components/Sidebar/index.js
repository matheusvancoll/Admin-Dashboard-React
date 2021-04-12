import './Sidebar.css'
import logo from '../../assets/img/photo.jpeg'
import ButtonItem from './Button'

function Sidebar(props) {

  return(
    <section className="sidebar" id={props.toggleState ? "" : "responsive-sidebar"}>
      {/* Sidebar TÍTULO */}
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo"/>
          <h1>Vancoll Studios</h1>
        </div>
      </div>

      {/* Sidebar OPÇÕES */}
      <div className="sidebar__menu">

        <ButtonItem btnName="Dashboard" icon="tachometer" active={true} url="#" toggleState={props.toggleState}/>
        <ButtonItem btnName="Produtos" icon="barcode" active={false} url="#" toggleState={props.toggleState}/>
        <ButtonItem btnName="Clientes" icon="users" active={false} url="#" toggleState={props.toggleState}/>
        <ButtonItem btnName="Vendas" icon="calculator" active={false} url="#" toggleState={props.toggleState}/>
        <ButtonItem btnName="Relatórios" icon="chart-line" active={false} url="#" toggleState={props.toggleState}/>

        <div className={props.toggleState ? "sidebar__item logout" : "sidebar__item logout responsive"}>
          <a href="#">
            <i className="fa fa-power-off"></i>
            <span>Sair</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sidebar