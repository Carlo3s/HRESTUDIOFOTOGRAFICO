import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarRojo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Activación ó Transmisión streaming de tu negocio, colaboración con creador de contenido conocido',
    'Marketing Digital en la web para tu marca',
    'Fotografía profesional de producto o servicio (30 PZ)',
    'Página web (Subdominio)',
    'Flyers y descripción copywriter para tus redes sociales (8 PZ)',
    'Video de producto o servicio (15 PZ)',
    'Menciones en nuestras plataformas de Cangrejito Creativo, socios y Creador de contenido conocido (5 MENCIONES)',
    'Asesoramiento para optimizar tus redes sociales y web'
  ];

  if (mostrarDetalles) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', minHeight: '100vh', padding: '40px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <button onClick={() => setMostrarDetalles(false)} style={{ marginBottom: 12 }}>← Volver</button>
          <h1 style={{ color: '#ef4444' }}>Manglar Rojo — Detalles</h1>
          <p>Plan quincenal — incluye:</p>
          <ul>
            {caracteristicas.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <div style={{ fontSize: 24, fontWeight: 900 }}>Precio: $4000</div>

          <button onClick={() => setMostrarFormulario(true)} style={{ marginTop: 16 }}>Adquirir</button>

          {mostrarFormulario && (
            <div style={{ marginTop: 16 }}>
              <FormularioAdquisicion producto="Manglar Rojo" onClose={() => setMostrarFormulario(false)} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <Link to="/">← Volver</Link>
      <h1 style={{ color: '#ef4444' }}>Manglar Rojo</h1>
      <p>Plan quincenal — resumen</p>
      <button onClick={() => setMostrarDetalles(true)} style={{ marginTop: 12 }}>Ver Más</button>
    </div>
  );
};

export default ManglarRojo;
