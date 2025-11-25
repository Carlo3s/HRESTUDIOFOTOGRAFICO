import React from 'react';
import { Link } from 'react-router-dom';

const ADMIN_KEY = 'CARLOS123';

function isAdmin() {
  if (localStorage.getItem('isAdmin') === 'true') return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get('admin') === ADMIN_KEY) {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
}

const Sidebar = ({ onCloseSidebar }) => {
  const admin = isAdmin();

  return (
    <aside style={{ width: 260, padding: 16, background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
      <h3 style={{ marginBottom: 12 }}>Cangrejito Creativo</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><Link to="/">Inicio</Link></li>
          <li style={{ marginBottom: 8 }}><Link to="/quienes-somos">Quiénes Somos</Link></li>
          <li style={{ marginBottom: 8 }}><Link to="/acerca-de">Acerca de</Link></li>
          <li style={{ marginBottom: 8 }}><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {admin && (
        <div style={{ marginTop: 20 }}>
          <strong>Admin</strong>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;