import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarRojo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  if (mostrarDetalles) {
    return (
      <div style={{ padding: 32 }}>
        <button onClick={() => setMostrarDetalles(false)}>← Volver</button>
        <h1 style={{ color: '#ef4444' }}>Manglar Rojo — Detalles</h1>
        <ul>
          <li>Activación / streaming + creador</li>
          <li>Marketing digital</li>
          <li>Fotografía profesional (30 PZ)</li>
          <li>Página web (Subdominio)</li>
          <li>Videos (15 PZ)</li>
          <li>Menciones (5)</li>
        </ul>
        <div style={{ fontSize: 24, fontWeight: 900 }}>Precio: $4000</div>

        <button onClick={() => setMostrarFormulario(true)} style={{ marginTop: 16 }}>
          Adquirir
        </button>

        {mostrarFormulario && (
          <div style={{ marginTop: 16 }}>
            <FormularioAdquisicion producto="Manglar Rojo" onClose={() => setMostrarFormulario(false)} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <Link to="/">← Volver</Link>
      <h1 style={{ color: '#ef4444' }}>Manglar Rojo</h1>
      <p>Plan quincenal — incluye (resumen)</p>
      <button onClick={() => setMostrarDetalles(true)} style={{ marginTop: 12 }}>Ver Más</button>
    </div>
  );
};

export default ManglarRojo;
