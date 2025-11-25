import React, { useState } from 'react';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarBlanco = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 50 }}>
          <h1 style={{ fontSize: 56, fontWeight: 900, marginBottom: 10, textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}>
            ⚪ Manglar Blanco
          </h1>
          <div style={{ width: 100, height: 4, background: '#ffd700', margin: '0 auto 20px', borderRadius: 2 }}></div>
          <p style={{ fontSize: 20, opacity: 0.95, fontStyle: 'italic' }}>
            Elegancia y durabilidad en cada proyecto
          </p>
        </div>

        {/* Contenido Principal */}
        <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.2)', marginBottom: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', padding: 40 }}>
            {/* Imagen */}
            <div>
              <img
                src="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg"
                alt="Manglar Blanco"
                style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              />
            </div>

            {/* Contenido */}
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#6b7280', marginBottom: 20 }}>
                Producto Premium Versátil
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: '#333', marginBottom: 25 }}>
                Manglar Blanco es la solución perfecta para paisajismo profesional y proyectos ambientales de gran envergadura. Combina elegancia y resistencia en un único producto.
              </p>

              {/* Características */}
              <div style={{ marginBottom: 30 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#4b5563', marginBottom: 15 }}>
                  ✓ Características Principales
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Diseño Premium', 'Altamente Resistente', 'Soluciones Ambientales', 'Consultoría Incluida'].map((item, idx) => (
                    <li key={idx} style={{ fontSize: 16, color: '#555', marginBottom: 10, paddingLeft: 30, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#6b7280', fontWeight: 900 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacto y CTA */}
              <div style={{ background: '#f3f4f6', padding: 20, borderRadius: 12, marginBottom: 20, borderLeft: '4px solid #6b7280' }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#4b5563', margin: 0 }}>
                  📞 Para más información: <span style={{ fontWeight: 900 }}>9333251889</span>
                </p>
              </div>

              <button
                onClick={() => setMostrarFormulario(true)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                  color: '#fff',
                  fontWeight: 900,
                  border: 'none',
                  fontSize: 18,
                  cursor: 'pointer',
                  borderRadius: 8,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 10px 30px rgba(107, 114, 128, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Adquirir Producto 🛒
              </button>
            </div>
          </div>
        </div>

        {/* Formulario */}
        {mostrarFormulario && (
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
            <FormularioAdquisicion producto="Manglar Blanco" onClose={() => setMostrarFormulario(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManglarBlanco;
