import './Sidebar.css'
import logo from '../../assets/img/photo.jpeg'

function Sidebar(toggleState) {

  return(
    <section className="sidebar" id={toggleState.toggleState ? "" : "responsive-sidebar"}>
      {/* Sidebar TÍTULO */}
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo"/>
          <h1>Vancoll Studios</h1>
        </div>
      </div>

      {/* Sidebar OPÇÕES */}
      <div className="sidebar__menu">
        <div className={toggleState.toggleState ? "sidebar__item active" : "sidebar__item responsive"}>
          <a href="#">
            <i className="fa fa-tachometer"></i>
            <span>Dashboard</span>
          </a>
        </div>

        <div className={toggleState.toggleState ? "sidebar__item" : "sidebar__item responsive"}>
          <a href="#">
            <i className="fa fa-barcode"></i>
            <span>Produtos</span>
          </a>
        </div>

        <div className={toggleState.toggleState ? "sidebar__item" : "sidebar__item responsive"}>
          <a href="#">
            <i className="fa fa-users"></i>
            <span>Clientes</span>
          </a>
        </div>

        <div className={toggleState.toggleState ? "sidebar__item" : "sidebar__item responsive"}>
          <a href="#">
            <i className="fa fa-calculator"></i>
            <span>Vendas</span>
          </a>
        </div>
        <div className={toggleState.toggleState ? "sidebar__item" : "sidebar__item responsive"}>
          <a href="#">
            <i className="fa fa-chart-line"></i>
            <span>Relatórios</span>
          </a>
        </div>

        <div className={toggleState.toggleState ? "sidebar__item logout" : "sidebar__item logout responsive"}>
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