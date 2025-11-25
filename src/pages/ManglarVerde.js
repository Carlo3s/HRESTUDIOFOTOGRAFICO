import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';
import ServicioImage from '../components/ServicioImage';
import FeatureList from '../components/FeatureList';
import './Servicios.css';

const ManglarVerde = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    { icon: 'stream', title: 'Activación / streaming', desc: 'Retransmisión en vivo para eventos o promociones; incluye montaje de escena y gráficos básicos.' },
    { icon: 'camera', title: 'Fotografía profesional (10 PZ)', desc: 'Selección y retoque de 10 fotografías optimizadas para redes y web.' },
    { icon: 'video', title: 'Video corto (4PZ)', desc: '4 clips cortos editados listos para Reels / TikTok con sonido y subtítulos.' },
    { icon: 'mention', title: '1 mención en nuestras plataformas', desc: 'Publicación y mención en nuestras redes con enlace a tu negocio.' },
    { icon: 'advice', title: 'Asesoría para redes', desc: '30 minutos de consultoría para calendario de publicaciones y hashtags.' }
  ];

  return (
    <div className="servicio-page">
      <div className="servicio-hero servicio-hero--verde">
        <div className="servicio-hero-inner">
          <Link to="/" className="back-link">← Volver</Link>
          <h1 className="servicio-title">Manglar Verde</h1>
          <p className="servicio-sub">Plan quincenal — resumen</p>

          <div className="servicio-card">
            <div className="servicio-card-left">
              <ServicioImage variant="verde" label="Manglar Verde" />

              <div className="servicio-content">
                <h2>Perfecto para proyectos ecológicos</h2>
                <p className="muted">Impulsa tu marca con contenido sostenible y alcance orgánico.</p>

                <ul className="features">
                  {caracteristicas.map((c, i) => (
                    <li key={i}><span className="dot dot--green" />{c.title}</li>
                  ))}
                </ul>

                <div className="card-actions">
                  <button className="btn btn-outline" onClick={() => setMostrarDetalles(s => !s)}>
                    {mostrarDetalles ? 'Ocultar Detalles' : 'Ver Más'}
                  </button>
                  <button className="btn btn-solid btn-green" onClick={() => setMostrarFormulario(true)}>
                    Adquirir — $1,600
                  </button>
                </div>
              </div>
            </div>

            <div className="servicio-card-right">
              <div className="badge">Quincenal</div>
              <div className="price">$1,600</div>
            </div>
          </div>

          {mostrarDetalles && (
            <div style={{ marginTop: 18 }}>
              <h3>Detalle del plan</h3>
              <FeatureList features={caracteristicas} />
            </div>
          )}
        </div>
      </div>

      {mostrarFormulario && (
        <div className="modal-overlay" onClick={() => setMostrarFormulario(false)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <FormularioAdquisicion producto="Manglar Verde" onClose={() => setMostrarFormulario(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManglarVerde;
