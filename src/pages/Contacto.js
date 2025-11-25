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
    { icon: '📍', label: 'Ubicación', valor: 'Paraíso Tabasco,Mexico' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 50, color: '#fff' }}>
          <h1 style={{ fontSize: 56, fontWeight: 800, marginBottom: 10, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Ponte en Contacto
          </h1>
          <div style={{ width: 80, height: 4, background: '#ffd700', margin: '0 auto 20px', borderRadius: 2 }}></div>
          <p style={{ fontSize: 18, opacity: 0.95 }}>Estamos listos para escuchar tu idea y hacerla realidad</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
          {/* Información de Contacto */}
          <div>
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  padding: 24,
                  borderRadius: 12,
                  marginBottom: 16,
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 40 }}>{info.icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#2c3e50', marginBottom: 4 }}>
                    {info.label}
                  </h3>
                  <p style={{ fontSize: 16, color: '#667eea', fontWeight: 600 }}>
                    {info.valor}
                  </p>
                </div>
              </div>
            ))}

            {/* Horario */}
            <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: 40 }}>⏰</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#2c3e50', marginBottom: 4 }}>
                    Horario
                  </h3>
                  <p style={{ fontSize: 16, color: '#667eea', fontWeight: 600 }}>
                    Lun - Vie: 9:00 - 18:00<br />
                    Sab: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#2c3e50', marginBottom: 24 }}>
              Envíanos tu Mensaje
            </h2>

            {enviado && (
              <div style={{ background: '#d4edda', color: '#155724', padding: 12, borderRadius: 8, marginBottom: 16, textAlign: 'center', fontWeight: 600 }}>
                ✓ Mensaje enviado exitosamente. ¡Gracias!
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '2px solid #e0e0e0',
                  fontSize: 16,
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Tu correo"
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '2px solid #e0e0e0',
                  fontSize: 16,
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
              <input
                name="asunto"
                value={form.asunto}
                onChange={handleChange}
                placeholder="Asunto"
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '2px solid #e0e0e0',
                  fontSize: 16,
                  fontFamily: 'inherit',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Tu mensaje"
                rows="6"
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '2px solid #e0e0e0',
                  fontSize: 16,
                  fontFamily: 'inherit',
                  resize: 'none',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Enviar Mensaje ✉️
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;