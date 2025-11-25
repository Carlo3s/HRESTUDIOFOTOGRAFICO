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

      <a href="https://wa.me/5219333251889" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.73 4.26 1.95 5.92l-1.43 4.43a1 1 0 0 0 1.24 1.24l4.43-1.43A11.93 11.93 0 0 0 22 12c0-5.52-4.48-10-10-10zm-.5 17.79V20h1v-1.21A8.978 8.978 0 0 0 18 12c0-4.97-4.03-9-9-9S1 7.03 1 12c0 4.97 4.03 9 9 9a8.978 8.978 0 0 0 1.5-.21z" />
          <path d="M15.5 10h-7v1h7v-1zm0 3h-7v1h7v-1z" />
        </svg>
      </a>
    </div>
  );
};

export default Contacto;

