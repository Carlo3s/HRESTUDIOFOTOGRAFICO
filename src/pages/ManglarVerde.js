import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarVerde = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const caracteristicas = [
    'Activación ó Transmisión streaming de tu negocio',
    'Fotografía profesional de producto o servicio (10 PZ)',
    'Video de producto o servicio (4PZ MENOS DE 1M)',
    'Menciones en nuestras plataformas de Cangrejito Creativo y socios (1 MENCIÓN)',
    'Asesoramiento para optimizar tus redes sociales'
  ];

  if (mostrarDetalles) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', minHeight: '100vh', padding: '40px 20px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <button onClick={() => setMostrarDetalles(false)} style={{ marginBottom: 12 }}>← Volver</button>
          <h1 style={{ color: '#10b981' }}>Manglar Verde — Detalles</h1>
          <p>Plan quincenal — incluye:</p>
          <ul>
            <li>Activación / streaming</li>
            <li>Fotografía profesional (10 PZ)</li>
            <li>Video corto (4PZ)</li>
            <li>Menciones (1)</li>
            <li>Asesoramiento en redes</li>
          </ul>
          <div style={{ fontSize: 24, fontWeight: 900 }}>Precio: $1600</div>

          <button onClick={() => setMostrarFormulario(true)} style={{ marginTop: 16 }}>Adquirir</button>

          {mostrarFormulario && (
            <div style={{ marginTop: 16 }}>
              <FormularioAdquisicion producto="Manglar Verde" onClose={() => setMostrarFormulario(false)} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <Link to="/">← Volver</Link>
      <h1 style={{ color: '#10b981' }}>Manglar Verde</h1>
      <p>Plan quincenal — resumen</p>
      <button onClick={() => setMostrarDetalles(true)} style={{ marginTop: 12 }}>Ver Más</button>
    </div>
  );
};

export default ManglarVerde;
