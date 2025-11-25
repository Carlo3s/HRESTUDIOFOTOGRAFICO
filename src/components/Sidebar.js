import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

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

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [admin] = useState(isAdmin());

  useEffect(() => {
    // guarda preferencia simple
    const saved = localStorage.getItem('sidebar-collapsed') === 'true';
    setCollapsed(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', collapsed ? 'true' : 'false');
  }, [collapsed]);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-top">
        <div className="brand">
          <div className="logo">🦀</div>
          <div className="brand-text">
            <strong>Cangrejito</strong>
            <span>Creativo</span>
          </div>
        </div>

        <button
          className="toggle-btn"
          aria-label={collapsed ? 'Abrir sidebar' : 'Cerrar sidebar'}
          onClick={() => setCollapsed((s) => !s)}
        >
          {collapsed ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <span className="icon" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="label">Inicio</span>
            </Link>
          </li>

          <li>
            <Link to="/quienes-somos">
              <span className="icon" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3" stroke="#7c3aed" strokeWidth="1.6"/><path d="M5 20c1.5-4 6-6 7-6s5.5 2 7 6" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </span>
              <span className="label">Quiénes Somos</span>
            </Link>
          </li>

          <li>
            <Link to="/acerca-de">
              <span className="icon" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#7c3aed" strokeWidth="1.6"/></svg>
              </span>
              <span className="label">Acerca de</span>
            </Link>
          </li>

          <li>
            <Link to="/contacto">
              <span className="icon" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 8l9 6 9-6" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="label">Contacto</span>
            </Link>
          </li>
        </ul>
      </nav>

      {admin && (
        <div className="sidebar-footer">
          <span className="admin-badge">Admin</span>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;