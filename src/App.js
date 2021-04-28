import {useState} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import RouterPages from './pages/Router'

function App() {

  const [SidebarOpen, setSidebarOpen] = useState(true)
  function toggleSidebar() { setSidebarOpen(!SidebarOpen) }
  
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
        <Sidebar toggleState={SidebarOpen} toggleMove={toggleSidebar} />
        <div className="main">
          <RouterPages toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
