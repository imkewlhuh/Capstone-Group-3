import { useState } from 'react';
import  '../../css/Sidebar.css';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(sessionStorage.getItem("darkMode"));

  const handleDarkMode = e => {
    e.preventDefault();

    if (!darkMode) {
      document.querySelector("body").classList.add("dark");
      sessionStorage.setItem("darkMode", true);
    } else {
      document.querySelector("body").classList.remove("dark");
      sessionStorage.setItem("darkMode", false);
    }

    setDarkMode(!darkMode);
  }

  return (
    <div className="sidebar">
      <nav>
        <ul className="directories">
          <li><a href='/home' onClick={() => sessionStorage.clear()}><i className="bi bi-box-arrow-left mb-3" style={{ transform: "scale(1.1) translateX(-10%) translateY(-10%)"}}></i><span>Sign out</span></a></li>
          <li><a href="/dashboard"><i className="bi bi-pip" style={{ transform: "scaleY(-1) translateY(-20%)" }}></i><span>Dashboard</span></a></li>
          <li><a href="/inventory"><i className="bi bi-clipboard-check"></i><span>Inventory</span></a></li>
          <li><a href="/orders"><i className="bi bi-shield-fill-check"></i><span>Orders</span></a></li>
          <li><a href="/suppliers"><i className="bi bi-building" style={{ transform: "scaleX(-1)" }}></i><span>Suppliers</span></a></li>
          <li><a href="/sustainability"><i className="bi bi-globe"></i><span>Sustainability</span></a></li>
          <li><a href="/integrations"><i className="bi bi-columns-gap" style={{ transform: "scaleY(-1) translateY(-20%)" }}></i><span>Integrations</span></a></li>
          <li><a href="/analytics"><i className="bi bi-file-bar-graph"></i><span>Analytics</span></a></li>
          <li><a href="/teams"><i className="bi bi-people"></i><span>Teams</span></a></li>
        </ul>
        <ul className="settings">
          <li><a onClick={handleDarkMode} style={{ cursor: "pointer" }}>
            {darkMode ? <i className="bi bi-lightbulb-fill"></i> : <i className="bi bi-lightbulb-off"></i>}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </a></li>
          <li><a href="/settings"><i className="bi bi-gear"></i><span>Settings</span></a></li>
          <li><a href="/help"><i className="bi bi-question-circle"></i><span>Help Center</span></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;