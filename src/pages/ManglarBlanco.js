import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarBlanco = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Activación ó Transmisión streaming de tu negocio',
    'Fotografía profesional de producto o servicio (20 PZ)',
    'Página web (Subdominio)',
    'Flyers para tus redes sociales (2 PZ)',
    'Video de producto o servicio (8 PZ)',
    'Menciones en nuestras plataformas de Cangrejito Creativo y socios (3 MENCIONES)',
    'Asesoramiento para optimizar tus redes sociales'
  ];

  if (mostrarDetalles) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', minHeight: '100vh', padding: '40px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <button onClick={() => setMostrarDetalles(false)} style={{ marginBottom: 12 }}>← Volver</button>
          <h1 style={{ color: '#6b7280' }}>Manglar Blanco — Detalles</h1>
          <p>Plan quincenal — incluye:</p>
          <ul>
            {caracteristicas.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <div style={{ fontSize: 24, fontWeight: 900 }}>Precio: $3200</div>

          <button onClick={() => setMostrarFormulario(true)} style={{ marginTop: 16 }}>Adquirir</button>

          {mostrarFormulario && (
            <div style={{ marginTop: 16 }}>
              <FormularioAdquisicion producto="Manglar Blanco" onClose={() => setMostrarFormulario(false)} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <Link to="/">← Volver</Link>
      <h1 style={{ color: '#6b7280' }}>Manglar Blanco</h1>
      <p>Plan quincenal — resumen</p>
      <button onClick={() => setMostrarDetalles(true)} style={{ marginTop: 12 }}>Ver Más</button>
    </div>
  );
};

export default ManglarBlanco;
