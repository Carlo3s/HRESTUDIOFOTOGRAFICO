import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const servicios = [
  { id: 1, nombre: 'Manglar Verde', descripcion: 'Cobertura fotográfica profesional para todo tipo de eventos.' },
  { id: 2, nombre: 'Manglar Blanco', descripcion: 'Videos aéreos de alta calidad con drone para eventos y promociones.' },
    { id: 3, nombre: 'Manglar Rojo', descripcion: 'Sesiones fotográficas en estudio con iluminación profesional.' },
  ];
  

const iconos = [
  '🌳', // Manglar Verde
  '🌳', // Manglar Blanco
  '🌳', // Manglar Rojo

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
<img src="src/baner.png" alt="Descripción de la imagen"></img>
      </div>
      <div className="recent-pages">
        <h2>Nuestros Servicios</h2>
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