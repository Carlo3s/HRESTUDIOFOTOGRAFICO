import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import ExportarAdquisiciones from './ExportarAdquisiciones';

const iconos = [
  '📷', // Sesiones para eventos
  '🚁', // Videos con drone
  '🏢', // Sesión de estudio
  '💻', // Marketing digital
  '🛒', // Promoción a productos
];

const productos = [
  { id: 1, nombre: 'Sesiones para eventos' },
  { id: 2, nombre: 'Videos con drone' },
  { id: 3, nombre: 'Sesión de estudio' },
  { id: 4, nombre: 'Marketing digital' },
  { id: 5, nombre: 'Promoción a productos' },
];

const ADMIN_KEY = 'CARLOS15'; // Cambia esto por tu clave secreta

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
    <div className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, position: 'relative' }}>
        <span style={{ fontSize: 26 }}>📷</span>
        <span style={{ fontWeight: 'bold', fontSize: 18, lineHeight: 1.1 }}>HR ESTUDIO<br/>FOTOGRAFICO</span>
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
      <ul>
        <li>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 22 }}>🏠</span> Inicio
          </Link>
        </li>
        {productos.map((producto, idx) => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>{iconos[idx]}</span> {producto.nombre}
            </Link>
          </li>
        ))}
      </ul>
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
    </div>
  );
};

export default Sidebar;