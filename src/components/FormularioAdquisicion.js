import React, { useState } from 'react';

const FormularioAdquisicion = ({ producto = '', onClose }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // uso real mínimo para evitar eslint no-unused-vars: enviar a servidor o console
    console.log('Solicitud:', { producto, nombre, telefono, fecha, mensaje });
    // feedback simple
    alert('Solicitud enviada. Revisar consola para detalles.');
    // limpiar
    setNombre('');
    setTelefono('');
    setFecha('');
    setMensaje('');
    if (onClose) onClose();
  };

  return (
    <div style={{ padding: 16, borderRadius: 8, background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
      <h3 style={{ marginTop: 0 }}>Formulario: {producto}</h3>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
        <input name="nombre" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input name="telefono" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <input name="fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <textarea name="mensaje" placeholder="Mensaje / detalles" value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={4} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Enviar</button>
          <button type="button" onClick={onClose} style={{ padding: '8px 12px', cursor: 'pointer' }}>Cerrar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAdquisicion;
