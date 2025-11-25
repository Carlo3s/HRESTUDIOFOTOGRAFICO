import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';
import ServicioImage from '../components/ServicioImage';
import FeatureList from '../components/FeatureList';
import './Servicios.css';

const ManglarBlanco = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    { icon: 'camera', title: 'Fotografía profesional (20 PZ)', desc: '' },
    { icon: 'web', title: 'Página web (subdominio)', desc: '' },
    { icon: 'flyer', title: 'Flyers para redes (2 PZ)', desc: '' },
    { icon: 'video', title: 'Video (8 PZ)', desc: '' },
    { icon: 'mention', title: '3 menciones en plataformas', desc: '' }
  ];

  return (
    <div className="servicio-page">
      <div className="servicio-hero servicio-hero--gris">
        <div className="servicio-hero-inner">
          <Link to="/" className="back-link">← Volver</Link>
          <h1 className="servicio-title">Manglar Blanco</h1>
          <p className="servicio-sub">Plan quincenal — premium</p>

          <div className="servicio-card">
            <div className="servicio-card-left">
              <ServicioImage variant="blanco" label="Manglar Blanco" />

              <div className="servicio-content">
                <h2>Solución premium para visibilidad</h2>
                <p className="muted">Paquete completo para presencia profesional en web y redes.</p>

                <ul className="features">
                  {caracteristicas.map((c, i) => (
                    <li key={i}><span className="dot dot--gray" />{c.title}</li>
                  ))}
                </ul>

                <div className="card-actions">
                  <button className="btn btn-outline" onClick={() => setMostrarDetalles(s => !s)}>
                    {mostrarDetalles ? 'Ocultar Detalles' : 'Ver Más'}
                  </button>
                  <button className="btn btn-solid btn-gray" onClick={() => setMostrarFormulario(true)}>
                    Adquirir — $3,200
                  </button>
                </div>
              </div>
            </div>

            <div className="servicio-card-right">
              <div className="badge badge--dark">Premium</div>
              <div className="price">$3,200</div>
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
            <FormularioAdquisicion producto="Manglar Blanco" onClose={() => setMostrarFormulario(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManglarBlanco;
