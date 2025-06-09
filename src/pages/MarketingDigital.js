import React, { useState } from 'react';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const MarketingDigital = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  return (
    <div style={{ background: '#dcedc8', padding: 30, borderRadius: 8, minHeight: 400 }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Marketing digital" style={{ width: 350, height: 250, objectFit: 'cover', borderRadius: 8, marginRight: 30, marginBottom: 20 }} />
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>MARKETING DIGITAL</h2>
          <p style={{ fontSize: 22, textAlign: 'justify', marginBottom: 30 }}>
            Estrategias y contenido visual para potenciar tu marca en redes sociales. Creamos campañas, fotografía y video para que tu negocio destaque en el mundo digital.
          </p>
          <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 30 }}>
            PARA MÁS INFORMACIÓN, ESCRÍBENOS AL<br />9333251889.
          </h3>
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <button onClick={() => setMostrarFormulario(true)} style={{ padding: '12px 30px', borderRadius: 6, background: '#3498db', color: '#fff', fontWeight: 'bold', border: 'none', fontSize: 18, cursor: 'pointer' }}>
              Adquirir producto
            </button>
          </div>
        </div>
      </div>
      {mostrarFormulario && (
        <div style={{ marginTop: 30, background: '#fff', borderRadius: 8, boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
          <FormularioAdquisicion producto="Marketing digital" onClose={() => setMostrarFormulario(false)} />
        </div>
      )}
    </div>
  );
};

export default MarketingDigital;
