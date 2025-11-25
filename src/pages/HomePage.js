import React from 'react';
import { Link } from 'react-router-dom';

const servicios = [
  { id: 1, nombre: 'Manglar Verde', ruta: '/manglar-verde', descripcion: 'Producto ecológico de alta calidad, ideal para proyectos sustentables.', color: '#10b981' },
  { id: 2, nombre: 'Manglar Blanco', ruta: '/manglar-blanco', descripcion: 'Producto premium para soluciones ambientales y paisajismo.', color: '#6b7280' },
  { id: 3, nombre: 'Manglar Rojo', ruta: '/manglar-rojo', descripcion: 'Producto resistente, perfecto para restauración de ecosistemas.', color: '#ef4444' },
];

const HomePage = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 80 }}>
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 60 }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 15 }}>Bienvenidos a Cangrejito Creativo 360</h1>
          <p style={{ fontSize: 18, opacity: 0.95 }}>Tu agencia 360° nacida en el paraíso</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {servicios.map((servicio) => (
            <div key={servicio.id} style={{ background: '#fff', borderRadius: 16, border: `4px solid ${servicio.color}`, padding: 24 }}>
              <h3 style={{ color: servicio.color, fontWeight: 900 }}>{servicio.nombre}</h3>
              <p style={{ color: '#555' }}>{servicio.descripcion}</p>

              <Link to={servicio.ruta} style={{ textDecoration: 'none' }}>
                <button style={{
                  marginTop: 16,
                  background: `linear-gradient(135deg, ${servicio.color} 0%, ${servicio.color}cc 100%)`,
                  color: '#fff', padding: '12px 18px', border: 'none', borderRadius: 8, fontWeight: 800, cursor: 'pointer'
                }}>
                  Ver Más →
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;