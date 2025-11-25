import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioAdquisicion from '../components/FormularioAdquisicion';

const ManglarRojo = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  if (mostrarDetalles) {
    return (
      <div style={{ padding: 32 }}>
        <button onClick={() => setMostrarDetalles(false)} style={{ marginBottom: 12 }}>← Volver</button>
        <h1 style={{ color: '#ef4444' }}>Manglar Rojo — Detalles</h1>
        <p>Plan quincenal — incluye:</p>
        <ul>
          <li>Activación ó Transmisión streaming + colaboración con creador</li>
          <li>Marketing Digital en la web</li>
          <li>Fotografía profesional (30 PZ)</li>
          <li>Página web (Subdominio)</li>
          <li>Flyers y copywriter (8 PZ)</li>
          <li>Video de producto o servicio (15 PZ)</li>
          <li>Menciones en nuestras plataformas (5)</li>
          <li>Asesoramiento para redes y web</li>
        </ul>
        <div style={{ fontSize: 20, fontWeight: 900, marginTop: 12 }}>Precio: $4000</div>

        <button onClick={() => setMostrarFormulario(true)} style={{ marginTop: 16 }}>Adquirir</button>

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
      <p>Plan quincenal — resumen</p>
      <button onClick={() => setMostrarDetalles(true)} style={{ marginTop: 12 }}>Ver Más</button>
    </div>
  );
};

export default ManglarRojo;
