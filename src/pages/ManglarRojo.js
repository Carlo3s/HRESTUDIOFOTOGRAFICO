import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarRojo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Activación ó Transmisión streaming de tu negocio, colaboración con creador de contenido conocido',
    'Marketing Digital en la web para tu marca',
    'Fotografía profesional de producto o servicio (30 PZ)',
    'Página web (Subdominio)',
    'Flyers y descripción copywriter para tus redes sociales (8 PZ)',
    'Video de producto o servicio (15 PZ)',
    'Menciones en nuestras plataformas de Cangrejito Creativo, socios y Creador de contenido conocido (5 MENCIONES)',
    'Asesoramiento para optimizar tus redes sociales y web'
  ];

  if (mostrarDetalles) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', minHeight: '100vh', padding: '40px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <button
            onClick={() => setMostrarDetalles(false)}
            style={{
              padding: '10px 20px',
              background: '#fff',
              color: '#ef4444',
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
              <h1 style={{ fontSize: 48, fontWeight: 900, color: '#ef4444', marginBottom: 10 }}>
                🔴 Manglar Rojo
              </h1>
              <p style={{ fontSize: 20, color: '#666', fontStyle: 'italic', marginBottom: 20 }}>
                Plan Quincenal Premium Completo
              </p>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: '#fff', padding: '16px 32px', borderRadius: 8, fontSize: 28, fontWeight: 900 }}>
                $4000
              </div>
            </div>

            <p style={{ fontSize: 18, lineHeight: 1.8, color: '#555', marginBottom: 40, textAlign: 'justify' }}>
              El Manglar Rojo es nuestro plan premium con el máximo alcance. Incluye colaboración con creadores de contenido, marketing digital integral, página web profesional y todas las herramientas necesarias para llevar tu negocio al siguiente nivel.
            </p>

            <h2 style={{ fontSize: 32, fontWeight: 900, color: '#ef4444', marginBottom: 25 }}>
              ✓ Qué Incluye
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 40 }}>
              {caracteristicas.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fef2f2',
                    padding: 20,
                    borderRadius: 12,
                    borderLeft: '4px solid #ef4444',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={{ fontSize: 24, marginBottom: 10 }}>✨</div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#ef4444', lineHeight: 1.6 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 32, fontWeight: 900, color: '#ef4444', marginBottom: 25 }}>
              🎯 Beneficios Principales
            </h2>

            <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: '#fff', padding: 30, borderRadius: 12, marginBottom: 40 }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Máxima visibilidad con creadores conocidos',
                  'Estrategia de marketing integral',
                  'Contenido visual premium y abundante',
                  'Página web profesional propia',
                  'Asesoramiento experto completo',
                  'Alcance garantizado'
                ].map((beneficio, idx) => (
                  <li key={idx} style={{ fontSize: 18, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 24 }}>→</span> {beneficio}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setMostrarFormulario(true)}
              style={{
                width: '100%',
                padding: '18px 32px',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
                e.target.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Adquirir Ahora 🛒
            </button>

            {mostrarFormulario && (
              <div style={{ background: '#fef2f2', padding: 24, borderRadius: 12, borderTop: '4px solid #ef4444', marginTop: 20 }}>
                <FormularioAdquisicion producto="Manglar Rojo" onClose={() => setMostrarFormulario(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 50 }}>
          <h1 style={{ fontSize: 56, fontWeight: 900, marginBottom: 10, textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}>
            🔴 Manglar Rojo
          </h1>
          <div style={{ width: 100, height: 4, background: '#ffd700', margin: '0 auto 20px', borderRadius: 2 }}></div>
          <p style={{ fontSize: 20, opacity: 0.95, fontStyle: 'italic' }}>
            Máxima resistencia para restauración de ecosistemas
          </p>
        </div>

        <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.2)', marginBottom: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', padding: 40 }}>
            <div>
              <img
                src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg"
                alt="Manglar Rojo"
                style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#ef4444', marginBottom: 20 }}>
                Producto de Máxima Resistencia
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: '#333', marginBottom: 25 }}>
                Manglar Rojo es nuestro producto más resistente, especialmente diseñado para proyectos de restauración de ecosistemas. Ideal para ambientes exigentes y de largo plazo.
              </p>

              <div style={{ background: '#fef2f2', padding: 20, borderRadius: 12, marginBottom: 20, borderLeft: '4px solid #ef4444' }}>
                <p style={{ fontSize: 24, fontWeight: 900, color: '#ef4444', margin: 0 }}>
                  💰 Precio: $4000
                </p>
              </div>

              <div style={{ background: '#fef2f2', padding: 20, borderRadius: 12, marginBottom: 20, borderLeft: '4px solid #ef4444' }}>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#dc2626', margin: 0 }}>
                  📞 Para más información: <span style={{ fontWeight: 900 }}>9333251889</span>
                </p>
              </div>

              <button
                onClick={() => setMostrarDetalles(true)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
                  e.target.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.4)';
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

export default ManglarRojo;
