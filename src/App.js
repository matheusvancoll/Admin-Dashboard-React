import {useState} from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {

  const [SidebarOpen, setSidebarOpen] = useState(true)
  function toggleSidebar() { setSidebarOpen(!SidebarOpen) 
  console.log(SidebarOpen) }
  
  return (
    <div className="container">
      <Navbar toggleState={SidebarOpen} toggleMove={toggleSidebar}/>
      <Sidebar toggleState={SidebarOpen} toggleMove={toggleSidebar} />
    </div>
  );
}

export default App;
