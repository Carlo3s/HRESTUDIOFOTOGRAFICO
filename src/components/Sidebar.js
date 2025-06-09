import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>HR ESTUDIO FOTOGRAFICO</h2>
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
      <div className="sidebar-footer">
        <Link to="/agregar-producto" className="create-button">Agregar Nuevo Producto</Link>
      </div>
    </div>
  );
};

export default Sidebar;