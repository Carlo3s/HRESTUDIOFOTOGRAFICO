import React, { useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  const contactInfo = [
    { icon: '📞', label: 'Teléfono', valor: '9333251889' },
    { icon: '📧', label: 'Email', valor: 'cangrejitocreativopublicidad@gmail.com' },
    { icon: '📍', label: 'Ubicación', valor: 'Paraíso Tabasco, México' },
  ];

  return (
    <div style={{ padding: 32 }}>
      <h1>Contacto</h1>

      <div style={{ display: 'grid', gap: 16, maxWidth: 800 }}>
        {contactInfo.map((c, i) => (
          <div key={i} style={{ background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 5px 15px rgba(0,0,0,0.05)', display: 'flex', gap: 12 }}>
            <div style={{ fontSize: 28 }}>{c.icon}</div>
            <div>
              <div style={{ fontWeight: 800 }}>{c.label}</div>
              <div>{c.valor}</div>
            </div>
          </div>
        ))}

        {enviado && <div style={{ background: '#d4edda', padding: 12, borderRadius: 8 }}>✓ Mensaje enviado correctamente.</div>}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input name="asunto" value={form.asunto} onChange={handleChange} placeholder="Asunto" required />
          <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Mensaje" rows={6} required />
          <button type="submit" style={{ padding: '10px 16px', fontWeight: 800 }}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;