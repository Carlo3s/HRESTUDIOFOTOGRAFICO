import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const servicios = [
  { id: 1, nombre: 'Sesiones para eventos', descripcion: 'Cobertura fotográfica profesional para todo tipo de eventos.' },
  { id: 2, nombre: 'Videos con drone', descripcion: 'Videos aéreos de alta calidad con drone para eventos y promociones.' },
  { id: 3, nombre: 'Sesión de estudio', descripcion: 'Sesiones fotográficas en estudio con iluminación profesional.' },
  { id: 4, nombre: 'Marketing digital', descripcion: 'Estrategias y contenido visual para potenciar tu marca en redes sociales.' },
  { id: 5, nombre: 'Promoción a productos', descripcion: 'Fotografía y video para destacar y promocionar tus productos.' },
];

const iconos = [
  '📷', // Sesiones para eventos
  '🚁', // Videos con drone
  '🏢', // Sesión de estudio
  '💻', // Marketing digital
  '🛒', // Promoción a productos
];

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Bienvenidos a Cangrejito Creativo 360</h1>
        <p>Tu nueva agencia 360° nacida en el paraíso para hacer brillar tu marca.
Somos un equipo creativo con pinzas llenas de ideas 🦀✨
Especialistas en:
✅ Producción audiovisual profesional (videos, streaming, podcasts)
✅ Estrategias digitales (marketing + community manager)
✅ Activaciones de negocio que enamoran
✅ Formatos digitales innovadores hechos a medida</p>
<img src="baner.png" alt="Descripción de la imagen"></img>
      </div>
      <div className="recent-pages">
        <h2>Servicios Existentes</h2>
        <div className="pages-grid">
          {servicios.map((servicio, idx) => (
            <div key={servicio.id} className="page-card">
              <h3 style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <span style={{fontSize: 28}}>{iconos[idx]}</span> {servicio.nombre}
              </h3>
              <p className="page-excerpt">{servicio.descripcion}</p>
              <Link to={`/producto/${servicio.id}`} className="read-more">Ver más</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;