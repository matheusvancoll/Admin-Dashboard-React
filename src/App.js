import {useState} from 'react';
import './App.css';

import Sidebar from './components/Sidebar'

function App() {

  const [SidebarOpen, setSidebarOpen] = useState(false)
  
  function openSidebar() { setSidebarOpen(true) }
  function closeSidebar() { setSidebarOpen(false) }


  return (
    <div className="container">
      {/* <Navbar /> */}
      <Sidebar />
      {/* teste */}
    </div>
  );
}

export default App;
