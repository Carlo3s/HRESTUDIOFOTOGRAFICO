import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';
import './Servicios.css';

const ManglarRojo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Colaboración con creador',
    'Marketing digital avanzado',
    'Fotografía (30 PZ)',
    'Videos (15 PZ)',
    '5 menciones y promoción'
  ];

  return (
    <div className="servicio-page">
      <div className="servicio-hero servicio-hero--rojo">
        <div className="servicio-hero-inner">
          <Link to="/" className="back-link">← Volver</Link>
          <h1 className="servicio-title">Manglar Rojo</h1>
          <p className="servicio-sub">Plan quincenal — completo</p>

          <div className="servicio-card">
            <div className="servicio-card-left">
              <h2>Máxima exposición y alcance</h2>
              <p className="muted">Campañas con creador y contenido de gran volumen para escalado rápido.</p>

              <ul className="features">
                {caracteristicas.map((c, i) => (
                  <li key={i}><span className="dot dot--red" />{c}</li>
                ))}
              </ul>

              <div className="card-actions">
                <button className="btn btn-outline" onClick={() => setMostrarDetalles(s => !s)}>
                  {mostrarDetalles ? 'Ocultar Detalles' : 'Ver Más'}
                </button>
                <button className="btn btn-solid btn-red" onClick={() => setMostrarFormulario(true)}>
                  Adquirir — $4,000
                </button>
              </div>
            </div>

            <div className="servicio-card-right">
              <div className="badge badge--red">Top</div>
              <div className="price">$4,000</div>
              <div className="illustration">🔴</div>
            </div>
          </div>

          {mostrarDetalles && (
            <div className="detalles">
              <h3>Detalle del plan</h3>
              <p>Estrategia avanzada, gestión de campañas y optimización continua.</p>
            </div>
          )}
        </div>
      </div>

      {mostrarFormulario && (
        <div className="modal-overlay" onClick={() => setMostrarFormulario(false)}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <FormularioAdquisicion producto="Manglar Rojo" onClose={() => setMostrarFormulario(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManglarRojo;
