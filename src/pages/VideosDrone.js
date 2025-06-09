import React, { useState } from 'react';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const VideosDrone = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  return (
    <div style={{ background: '#e3f2fd', padding: 30, borderRadius: 8, minHeight: 400 }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <img src="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg" alt="Videos con drone" style={{ width: 350, height: 250, objectFit: 'cover', borderRadius: 8, marginRight: 30, marginBottom: 20 }} />
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>VIDEOS CON DRONE</h2>
          <p style={{ fontSize: 22, textAlign: 'justify', marginBottom: 30 }}>
            Videos aéreos de alta calidad para eventos, promociones y proyectos especiales. Captura perspectivas únicas y espectaculares con nuestro equipo profesional de drones.
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
          <FormularioAdquisicion producto="Videos con drone" onClose={() => setMostrarFormulario(false)} />
        </div>
      )}
    </div>
  );
};

export default VideosDrone;
