import React from 'react';

const AcercaDe = () => {
  const servicios = [
    { icon: '🎬', titulo: 'Producción Audiovisual', desc: 'Video profesional, drone, streaming y edición' },
    { icon: '📸', titulo: 'Fotografía Profesional', desc: 'Estudio, eventos, retratos y fotografía creativa' },
    { icon: '📱', titulo: 'Marketing Digital', desc: 'Estrategia, redes sociales y community management' },
    { icon: '💡', titulo: 'Consultoría Creativa', desc: 'Activaciones de marca y experiencias memorables' },
  ];

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{ fontSize: 56, fontWeight: 800, color: '#2c3e50', marginBottom: 10 }}>
            Acerca de Nosotros
          </h1>
          <div style={{ width: 80, height: 4, background: '#ffd700', margin: '0 auto', borderRadius: 2 }}></div>
        </div>

        {/* Introducción */}
        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: 40, borderRadius: 16, marginBottom: 50, textAlign: 'center' }}>
          <p style={{ fontSize: 22, lineHeight: 1.8, fontStyle: 'italic' }}>
            Somos un equipo apasionado por crear experiencias audiovisuales únicas que transforman marcas en historias memorables.
          </p>
        </div>

        {/* Servicios Grid */}
        <div style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#2c3e50', marginBottom: 30, textAlign: 'center' }}>
            Lo que Hacemos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {servicios.map((servicio, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  padding: 32,
                  borderRadius: 12,
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>{servicio.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#2c3e50', marginBottom: 10 }}>
                  {servicio.titulo}
                </h3>
                <p style={{ fontSize: 16, color: '#666', lineHeight: 1.6 }}>
                  {servicio.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div style={{ background: '#fff', padding: 40, borderRadius: 16, boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#2c3e50', marginBottom: 20, textAlign: 'center' }}>
            Nuestro Equipo
          </h2>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.8, textAlign: 'justify' }}>
            Contamos con profesionales especializados en producción audiovisual, diseño gráfico, fotografía y marketing digital. Cada miembro del equipo aporta su experiencia y creatividad para garantizar proyectos de calidad excepcional adaptados a tus necesidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;