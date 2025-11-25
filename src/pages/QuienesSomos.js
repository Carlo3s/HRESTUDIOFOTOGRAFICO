import React from 'react';

const QuienesSomos = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60, color: '#fff' }}>
          <h1 style={{ fontSize: 56, fontWeight: 800, marginBottom: 10, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Quiénes Somos
          </h1>
          <div style={{ width: 80, height: 4, background: '#ffd700', margin: '0 auto 20px', borderRadius: 2 }}></div>
          <p style={{ fontSize: 20, fontStyle: 'italic', opacity: 0.95 }}>
            Tu agencia creativa 360° nacida en el paraíso
          </p>
        </div>

        {/* Contenido Principal */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 40, boxShadow: '0 10px 40px rgba(0,0,0,0.2)', marginBottom: 40 }}>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: '#333', marginBottom: 30, textAlign: 'justify' }}>
            Somos <span style={{ fontWeight: 800, color: '#667eea' }}>Cangrejito Creativo 360</span>, un estudio creativo nacido en el paraíso dedicado a la producción audiovisual, estrategias digitales y experiencias que conectan marcas con su audiencia. Nuestro equipo combina creatividad, técnica y compromiso con el medio ambiente para entregar proyectos con impacto.
          </p>

          {/* Misión y Visión */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 30 }}>
            {/* Misión */}
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: 24, borderRadius: 12, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>🎯</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Misión</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>
                Crear contenidos y soluciones estratégicas que ayuden a crecer marcas de forma sostenible y memorable.
              </p>
            </div>

            {/* Visión */}
            <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: '#fff', padding: 24, borderRadius: 12, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>🌟</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Visión</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>
                Ser referente local en producción 360° y soluciones creativas para negocios y proyectos culturales.
              </p>
            </div>

            {/* Valores */}
            <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: '#fff', padding: 24, borderRadius: 12, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>💎</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Valores</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>
                Creatividad, compromiso, calidad y sostenibilidad en cada proyecto que realizamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;