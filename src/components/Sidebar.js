import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import ExportarAdquisiciones from './ExportarAdquisiciones';





const ADMIN_KEY = 'CARLOS123'; // Cambia esto por tu clave secreta

function isAdmin() {
  // 1. Verifica si ya está en localStorage
  if (localStorage.getItem('isAdmin') === 'true') return true;
  // 2. Verifica si la clave está en la URL
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
    <aside style={{ width: 260, padding: 16, background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, position: 'relative' }}>
        <h3 style={{ marginBottom: 12, fontWeight: 'bold', fontSize: 18, lineHeight: 1.1 }}>Cangrejito Creativo</h3>
        {typeof onCloseSidebar === 'function' && (
          <button
            className="sidebar-toggle-btn"
            style={{ position: 'absolute', top: 8, right: 0, left: 'auto', width: 32, height: 32, fontSize: 18, background: '#f44336', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onClick={onCloseSidebar}
            aria-label="Ocultar menú"
            title="Cerrar tabla de contenido"
          >
            <span style={{ fontSize: 18, fontWeight: 'bold' }}>✕</span>
          </button>
        )}
      </div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>🏠</span> Inicio
            </Link>
          </li>
          <li>
            <Link to="/quienes-somos" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>ℹ️</span> Quiénes Somos
            </Link>
          </li>
          <li>
            <Link to="/acerca-de" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>📘</span> Acerca de
            </Link>
          </li>
          <li>
            <Link to="/contacto" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>✉️</span> Contacto
            </Link>
          </li>
        </ul>
      </nav>
      {admin && (
        <>
          <div className="sidebar-footer">
            <Link to="/agregar-producto" className="create-button">Agregar Nuevo Producto</Link>
          </div>
          <div style={{ marginTop: 20 }}>
            <ExportarAdquisiciones />
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;