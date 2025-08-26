import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './Component/SideNav';
import IconSidebar from './Component/IconSidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex">
        {/* Sidebar stays always visible */}
        <IconSidebar />

        {/* Main content changes with route */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<SideNav />} />
            <Route path="/sidenav" element={<SideNav />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
