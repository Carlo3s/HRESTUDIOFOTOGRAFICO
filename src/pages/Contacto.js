import React, { useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a un endpoint o guardarlos
    alert('Mensaje enviado. Gracias, ' + (form.nombre || ''));
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div style={{ maxWidth: 700, margin: '20px auto', padding: 24 }}>
      <h1>Contacto</h1>
      <p>Escríbenos o llámanos: 9333251889</p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required style={{ padding: 10 }} />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" required style={{ padding: 10 }} />
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Mensaje" rows="6" required style={{ padding: 10 }} />
        <button type="submit" style={{ padding: '10px 16px', background: '#3498db', color: '#fff', border: 'none', borderRadius: 6 }}>Enviar</button>
      </form>
      <div style={{ marginTop: 20 }}>
        <strong>Dirección:</strong> (opcional) Calle ejemplo, Ciudad<br />
        <strong>Horario:</strong> Lun - Vie 9:00 - 18:00
      </div>
    </div>
  );
};

export default Contacto;