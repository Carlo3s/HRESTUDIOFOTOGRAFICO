import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/HomePage.css';

const servicios = [
  { id: 1, nombre: 'Manglar Verde', descripcion: 'Producto ecológico de alta calidad, ideal para proyectos sustentables.', color: '#10b981' },
  { id: 2, nombre: 'Manglar Blanco', descripcion: 'Producto premium para soluciones ambientales y paisajismo.', color: '#6b7280' },
  { id: 3, nombre: 'Manglar Rojo', descripcion: 'Producto resistente, perfecto para restauración de ecosistemas.', color: '#ef4444' },
];

const HomePage = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '60px 20px' }}>
      {/* Header Hero */}
      <div style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 80 }}>
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 60 }}>
          <h1 style={{ fontSize: 72, fontWeight: 900, marginBottom: 15, textShadow: '3px 3px 6px rgba(0,0,0,0.4)', lineHeight: 1.1 }}>
            Bienvenidos a<br />Cangrejito Creativo 360
          </h1>
          <div style={{ width: 100, height: 5, background: '#ffd700', margin: '20px auto 30px', borderRadius: 3 }}></div>
          <p style={{ fontSize: 24, opacity: 0.95, fontStyle: 'italic', marginBottom: 15 }}>
            Tu agencia 360° nacida en el paraíso
          </p>
          <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 800, margin: '0 auto 30px', lineHeight: 1.8 }}>
            Somos un equipo creativo especializado en producción audiovisual, fotografía profesional, marketing digital y experiencias que transforman marcas.
          </p>
        </div>

        {/* Imagen Banner */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <img
            src="/baner.png"
            alt="Bienvenidos a Cangrejito Creativo 360"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 16,
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              maxHeight: 400,
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Servicios/Productos Grid */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: 50, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Nuestros Productos
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {servicios.map((servicio) => (
              <Link to={`/${servicio.nombre.toLowerCase().replace(/\s+/g, '-')}`} key={servicio.id} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    border: `4px solid ${servicio.color}`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                  }}
                >
                  {/* Color bar top */}
                  <div style={{ background: `linear-gradient(90deg, ${servicio.color} 0%, ${servicio.color}dd 100%)`, height: 8 }}></div>

                  {/* Content */}
                  <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: 28, fontWeight: 900, color: servicio.color, marginBottom: 12 }}>
                        {servicio.nombre}
                      </h3>
                      <p style={{ fontSize: 18, color: '#555', lineHeight: 1.6, marginBottom: 20 }}>
                        {servicio.descripcion}
                      </p>
                    </div>

                    {/* Button */}
                    <div style={{ marginTop: 20 }}>
                      <div
                        style={{
                          display: 'inline-block',
                          background: `linear-gradient(135deg, ${servicio.color} 0%, ${servicio.color}cc 100%)`,
                          color: '#fff',
                          padding: '12px 24px',
                          borderRadius: 8,
                          fontWeight: 800,
                          fontSize: 14,
                          transition: 'transform 0.2s',
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        Ver Más →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 48, textAlign: 'center', boxShadow: '0 15px 40px rgba(0,0,0,0.2)', marginTop: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#2c3e50', marginBottom: 15 }}>
            ¿Listo para Transformar tu Marca?
          </h2>
          <p style={{ fontSize: 18, color: '#666', marginBottom: 30 }}>
            Contáctanos hoy y descubre cómo podemos llevar tu proyecto al siguiente nivel.
          </p>
          <Link to="/contacto" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                padding: '16px 40px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 900,
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Contáctanos Ahora ✉️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;