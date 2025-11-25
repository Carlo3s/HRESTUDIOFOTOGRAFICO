import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';
import ServicioImage from '../components/ServicioImage';
import FeatureList from '../components/FeatureList';
import './Servicios.css';

const ManglarRojo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    { icon: '🔗', title: 'Colaboración con creador', desc: 'Trabaja directamente con un creador de contenido.' },
    { icon: '📈', title: 'Marketing digital avanzado', desc: 'Estrategias de marketing digital para maximizar el alcance.' },
    { icon: '📸', title: 'Fotografía (30 PZ)', desc: '30 fotografías profesionales para tu negocio.' },
    { icon: '🎥', title: 'Videos (15 PZ)', desc: '15 videos cortos para redes sociales.' },
    { icon: '📢', title: '5 menciones y promoción', desc: 'Promoción garantizada a través de menciones.' }
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
              <ServicioImage variant="rojo" label="Manglar Rojo" />

              <div className="servicio-content">
                <h2>Máxima exposición y alcance</h2>
                <p className="muted">Campañas con creador y contenido de gran volumen para escalado rápido.</p>

                <ul className="features">
                  {caracteristicas.map((c, i) => (
                    <li key={i}><span className="dot dot--red" />{c.title}</li>
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
            </div>

            <div className="servicio-card-right">
              <div className="badge badge--red">Top</div>
              <div className="price">$4,000</div>
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
            <FormularioAdquisicion producto="Manglar Rojo" onClose={() => setMostrarFormulario(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManglarRojo;
