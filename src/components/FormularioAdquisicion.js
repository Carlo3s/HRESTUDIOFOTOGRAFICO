import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const FormularioAdquisicion = ({ producto = '', onClose }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "adquisiciones"), {
        producto,
        nombre,
        telefono,
        fecha,
        mensaje,
        creado: Timestamp.now()
      });
      setEnviado(true);
    } catch (error) {
      alert("Error al enviar el formulario. Intenta de nuevo.");
    }
  };

  if (enviado) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h3>¡Gracias por tu interés en {producto}! Nos pondremos en contacto contigo pronto.</h3>
        <button onClick={onClose} style={{ marginTop: 20, padding: '10px 20px', borderRadius: 5, background: '#3498db', color: '#fff', border: 'none' }}>Cerrar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 16, borderRadius: 8, background: '#fff' }}>
      <h3 style={{ marginTop: 0 }}>Formulario: {producto}</h3>
      <p>Este es un formulario provisional. Reemplázalo por tu componente real.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <label>
          Nombre completo:
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required autoComplete="off" />
        </label>
        <label>
          Número telefónico:
          <input type="tel" value={telefono} onChange={e => setTelefono(e.target.value)} required autoComplete="off" />
        </label>
        <label>
          Fecha del servicio:
          <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} required autoComplete="off" />
        </label>
        <label>
          Mensaje adicional:
          <textarea value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Escribe aquí tus dudas o requerimientos..." autoComplete="off" />
        </label>
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: 5, background: '#3498db', color: '#fff', border: 'none' }}>Enviar</button>
          <button type="button" onClick={onClose} style={{ padding: '10px 20px', borderRadius: 5, background: '#e0e0e0', color: '#333', border: 'none' }}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAdquisicion;
