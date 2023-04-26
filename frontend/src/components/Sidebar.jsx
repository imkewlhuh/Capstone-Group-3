import '/css/Sidebar.css'

const Sidebar = () => {

  return (
   <div className="sidebar">
    <nav>
      <ul className="directories">
        <li><a href="/dashboard"><i class="bi bi-pip" style={{transform: "scaleY(-1) translateY(-20%)"}}></i><span>Dashboard</span></a></li>
        <li><a href="/inventory"><i class="bi bi-clipboard-check"></i><span>Inventory</span></a></li>
        <li><a href="/orders"><i class="bi bi-shield-fill-check"></i><span>Orders</span></a></li>
        <li><a href="/suppliers"><i class="bi bi-building" style={{transform: "scaleX(-1)"}}></i><span>Suppliers</span></a></li>
        <li><a href="/sustainability"><i class="bi bi-globe"></i><span>Sustainability</span></a></li>
        <li><a href="/integrations"><i class="bi bi-columns-gap" style={{transform: "scaleY(-1) translateY(-20%)"}}></i><span>Integrations</span></a></li>
        <li><a href="/analytics"><i class="bi bi-file-bar-graph"></i><span>Analytics</span></a></li>
        <li><a href="/teams"><i class="bi bi-people"></i><span>Teams</span></a></li>
      </ul>
      <ul className="settings">
      <li><a href="/settings"><i class="bi bi-gear"></i><span>Settings</span></a></li>
      <li><a href="/help"><i class="bi bi-question-circle"></i><span>Help Center</span></a></li>
      </ul>
    </nav>
   </div>
  );
};

export default Sidebar;