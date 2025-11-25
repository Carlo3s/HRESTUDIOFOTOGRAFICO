import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarVerde = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  if (mostrarDetalles) {
    return (
      <div style={{ padding: 32 }}>
        <button onClick={() => setMostrarDetalles(false)}>← Volver</button>
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

        <button onClick={() => setMostrarFormulario(true)} style={{ marginTop: 16 }}>
          Adquirir
        </button>

        {mostrarFormulario && (
          <div style={{ marginTop: 16 }}>
            <FormularioAdquisicion producto="Manglar Verde" onClose={() => setMostrarFormulario(false)} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <Link to="/">← Volver</Link>
      <h1 style={{ color: '#10b981' }}>Manglar Verde</h1>
      <p>Plan quincenal — incluye (resumen)</p>
      <button onClick={() => setMostrarDetalles(true)} style={{ marginTop: 12 }}>Ver Más</button>
    </div>
  );
};

export default ManglarVerde;
