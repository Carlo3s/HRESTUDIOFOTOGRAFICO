import React from 'react';
import { Link } from 'react-router-dom';

const servicios = [
  { id: 1, nombre: 'Manglar Verde', ruta: '/manglar-verde', descripcion: 'Producto ecológico...', color: '#10b981' },
  { id: 2, nombre: 'Manglar Blanco', ruta: '/manglar-blanco', descripcion: 'Producto premium...', color: '#6b7280' },
  { id: 3, nombre: 'Manglar Rojo', ruta: '/manglar-rojo', descripcion: 'Producto resistente...', color: '#ef4444' },
];

const HomePage = () => (
  <div style={{ padding: 40 }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
      {servicios.map(s => (
        <div key={s.id} style={{ background: '#fff', padding: 24, borderRadius: 12, border: `4px solid ${s.color}` }}>
          <h3 style={{ color: s.color }}>{s.nombre}</h3>
          <p>{s.descripcion}</p>
          <Link to={s.ruta} style={{ textDecoration: 'none' }}>
            <button style={{ padding: '12px 18px', background: s.color, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 800 }}>
              Ver Más →
            </button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;