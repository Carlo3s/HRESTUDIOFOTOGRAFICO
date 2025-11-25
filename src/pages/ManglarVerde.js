import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';
import './Servicios.css';

const ManglarVerde = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Activación / streaming de tu negocio',
    'Fotografía profesional (10 PZ)',
    'Video corto (4PZ)',
    '1 mención en nuestras plataformas',
    'Asesoría para redes'
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
              <div className="servicio-media">
                <img src="C:\Users\carlo\OneDrive\Desktop\paginaweb_cangrejito creativo\public\manglar-verde.png" alt="Manglar Verde" className="servicio-image" />
              </div>

              <div className="servicio-content">
                <h2>Perfecto para proyectos ecológicos</h2>
                <p className="muted">Impulsa tu marca con contenido sostenible y alcance orgánico.</p>

                <ul className="features">
                  {caracteristicas.map((c, i) => (
                    <li key={i}><span className="dot dot--green" />{c}</li>
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
              <div className="illustration">🟢</div>
            </div>
          </div>

          {mostrarDetalles && (
            <div className="detalles">
              <h3>Detalle del plan</h3>
              <p>El plan incluye producción, postproducción y publicación. Se entrega material optimizado para redes.</p>
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
