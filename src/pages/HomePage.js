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
        <h1>Bienvenidos a CANGREJITO CREATIVO 360</h1>
        <p>Somos un estudio especializado en capturar tus mejores momentos y potenciar tu marca con servicios profesionales de fotografía, video y marketing digital. Explora nuestro catálogo de productos y descubre cómo podemos ayudarte a destacar.</p>
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