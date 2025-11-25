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
    <div style={{ padding: 16, borderRadius: 8, background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
      <h3 style={{ marginTop: 0 }}>Formulario: {producto}</h3>
      <p>Formulario provisional — reemplázalo por tu versión real si la tienes.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={onClose} style={{ padding: '8px 12px', cursor: 'pointer' }}>Cerrar</button>
      </div>
    </div>
  );
};

export default FormularioAdquisicion;
