import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    console.log('Contacto enviado:', form);
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  const contactInfo = [
    { icon: '📞', label: 'Teléfono', valor: '9333251889' },
    { icon: '📧', label: 'Email', valor: 'cangrejitocreativopublicidad@gmail.com' },
    { icon: '📍', label: 'Ubicación', valor: 'Paraíso Tabasco, México' },
  ];

  return (
    <div className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Contacto</h1>

        <div className="contact-grid">
          {contactInfo.map((c, i) => (
            <div key={i} className="contact-item card-accent">
              <div className="contact-icon">{c.icon}</div>
              <div className="contact-text">
                <div className="contact-label">{c.label}</div>
                <div className="contact-value">{c.valor}</div>
              </div>
            </div>
          ))}

          <div className="form-card">
            {enviado && <div className="alert-success">✓ Mensaje enviado correctamente.</div>}

            <form onSubmit={handleSubmit} className="contact-form">
              <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
              <input name="asunto" value={form.asunto} onChange={handleChange} placeholder="Asunto" required />
              <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Mensaje" rows={6} required />
              <button type="submit" className="btn btn-gradient">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;