import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarBlanco = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Activación ó Transmisión streaming de tu negocio',
    'Fotografía profesional de producto o servicio (20 PZ)',
    'Página web (Subdominio)',
    'Flyers para tus redes sociales (2 PZ)',
    'Video de producto o servicio (8 PZ)',
    'Menciones en nuestras plataformas de Cangrejito Creativo y socios (3 MENCIONES)',
    'Asesoramiento para optimizar tus redes sociales'
  ];

  if (mostrarDetalles) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', minHeight: '100vh', padding: '40px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          {/* Header */}
          <button
            onClick={() => setMostrarDetalles(false)}
            style={{
              padding: '10px 20px',
              background: '#fff',
              color: '#6b7280',
              border: 'none',
              borderRadius: 8,
              fontWeight: 800,
              cursor: 'pointer',
              marginBottom: 30,
              fontSize: 14,
            }}
          >
            ← Volver
          </button>

          <div style={{ background: '#fff', borderRadius: 16, padding: 40, boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h1 style={{ fontSize: 48, fontWeight: 900, color: '#6b7280', marginBottom: 10 }}>
                ⚪ Manglar Blanco
              </h1>
              <p style={{ fontSize: 20, color: '#666', fontStyle: 'italic', marginBottom: 20 }}>
                Plan Quincenal Profesional
              </p>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', color: '#fff', padding: '16px 32px', borderRadius: 8, fontSize: 28, fontWeight: 900 }}>
                $3200
              </div>
            </div>

            {/* Descripción */}
            <p style={{ fontSize: 18, lineHeight: 1.8, color: '#555', marginBottom: 40, textAlign: 'justify' }}>
              El Manglar Blanco es nuestro plan profesional con todas las herramientas necesarias para establecer una presencia digital sólida. Incluye tu propia página web, contenido visual premium y una estrategia integral de marketing digital.
            </p>

            {/* Qué incluye */}
            <h2 style={{ fontSize: 32, fontWeight: 900, color: '#6b7280', marginBottom: 25 }}>
              ✓ Qué Incluye
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 40 }}>
              {caracteristicas.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f3f4f6',
                    padding: 20,
                    borderRadius: 12,
                    borderLeft: '4px solid #6b7280',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={{ fontSize: 24, marginBottom: 10 }}>✨</div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#6b7280', lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Beneficios */}
            <h2 style={{ fontSize: 32, fontWeight: 900, color: '#6b7280', marginBottom: 25 }}>
              🎯 Beneficios Principales
            </h2>

            <div style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', color: '#fff', padding: 30, borderRadius: 12, marginBottom: 40 }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Página web propia con subdominio',
                  'Contenido visual de calidad premium',
                  'Mayor visibilidad en redes',
                  'Presencia profesional online',
                  'Asesoramiento integral'
                ].map((beneficio, idx) => (
                  <li key={idx} style={{ fontSize: 18, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 24 }}>→</span> {beneficio}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => setMostrarFormulario(true)}
              style={{
                width: '100%',
                padding: '18px 32px',
                background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                color: '#fff',
                fontWeight: 900,
                border: 'none',
                fontSize: 20,
                cursor: 'pointer',
                borderRadius: 8,
                transition: 'transform 0.2s, box-shadow 0.2s',
                textTransform: 'uppercase',
                letterSpacing: 2,
                marginBottom: 20,
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
              Adquirir Ahora 🛒
            </button>

            {/* Formulario */}
            {mostrarFormulario && (
              <div style={{ background: '#f3f4f6', padding: 24, borderRadius: 12, borderTop: '4px solid #6b7280', marginTop: 20 }}>
                <FormularioAdquisicion producto="Manglar Blanco" onClose={() => setMostrarFormulario(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

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

              {/* Precio */}
              <div style={{ background: '#f3f4f6', padding: 20, borderRadius: 12, marginBottom: 20, borderLeft: '4px solid #6b7280' }}>
                <p style={{ fontSize: 24, fontWeight: 900, color: '#6b7280', margin: 0 }}>
                  💰 Precio: $3200
                </p>
              </div>

              {/* Contacto y CTA */}
              <div style={{ background: '#f3f4f6', padding: 20, borderRadius: 12, marginBottom: 20, borderLeft: '4px solid #6b7280' }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#4b5563', margin: 0 }}>
                  📞 Para más información: <span style={{ fontWeight: 900 }}>9333251889</span>
                </p>
              </div>

              <button
                onClick={() => setMostrarDetalles(true)}
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
                Ver Más Detalles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManglarBlanco;
