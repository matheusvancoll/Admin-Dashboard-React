import './Sidebar.css'
import logo from '../../assets/img/photo.jpeg'
function Sidebar(SidebarOpen, closeSidebar) {
  return(
    <section className={SidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      {/* Sidebar TÍTULO */}
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Vancoll Studios</h1>
        </div>
        <i
          onClick={ closeSidebar }
          className="fa fa-times"
          id="sidebar-icon"
          arial-hidden="true"
        ></i>
      </div>

      {/* Sidebar OPÇÕES */}
      <div className="sidebar__menu">
        <div className="sidebar__item active">
          <a href="#">
            <i className="fa fa-tachometer"></i>
            <span>Dashboard</span>
          </a>
        </div>

        <div className="sidebar__item">
          <a href="#">
            <i className="fa fa-barcode"></i>
            <span>Produtos</span>
          </a>
        </div>

        <div className="sidebar__item">
          <a href="#">
            <i className="fa fa-users"></i>
            <span>Clientes</span>
          </a>
        </div>

        <div className="sidebar__item">
          <a href="#">
            <i className="fa fa-calculator"></i>
            <span>Vendas</span>
          </a>
        </div>
        <div className="sidebar__item">
          <a href="#">
            <i className="fa fa-chart-line"></i>
            <span>Relatórios</span>
          </a>
        </div>

        <div className="sidebar__item logout">
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