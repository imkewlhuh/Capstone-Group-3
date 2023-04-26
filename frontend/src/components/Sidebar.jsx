import '/css/Sidebar.css'

const Sidebar = () => {

  return (
   <div className="sidebar">
    <nav>
      <ul className="directories">
        <li><a href='#'><i class="bi bi-pip"></i><span>Dashboard</span></a></li>
        <li><a href='#'><i class="bi bi-clipboard-check"></i><span>Inventory</span></a></li>
        <li><a href='#'><i class="bi bi-shield-fill-check"></i><span>Orders</span></a></li>
        <li><a href='#'><i class="bi bi-building"></i><span>Suppliers</span></a></li>
        <li><a href='#'><i class="bi bi-globe"></i><span>Sustainability</span></a></li>
        <li><a href='#'><i class="bi bi-columns-gap"></i><span>Integrations</span></a></li>
        <li><a href='#'><i class="bi bi-file-bar-graph"></i><span>Analytics</span></a></li>
        <li><a href='#'><i class="bi bi-people"></i><span>Teams</span></a></li>
      </ul>
      <ul className="settings">
      <li><a href='#'><i class="bi bi-gear"></i><span>Settings</span></a></li>
      <li><a href='#'><i class="bi bi-question-circle"></i><span>Help Center</span></a></li>
      </ul>
    </nav>
   </div>
  );
};

export default Sidebar;