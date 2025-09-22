import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const servicios = [
  { id: 1, nombre: 'Manglar Verde', descripcion: 'Producto ecológico de alta calidad, ideal para proyectos sustentables.' },
  { id: 2, nombre: 'Manglar Blanco', descripcion: 'Producto premium para soluciones ambientales y paisajismo.' },
  { id: 3, nombre: 'Manglar Rojo', descripcion: 'Producto resistente, perfecto para restauración de ecosistemas.' },
];

const iconos = [
  '🟩', // Manglar Verde
  '⬜', // Manglar Blanco
  '🟥', // Manglar Rojo 

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
       <img
  src="/baner.png"
  alt="Bienvenidos a Cangrejito Creativo 360, tu nueva agencia 360 nacida en el paraíso para hacer brillar tu marca."
  width="900"
  height="600"
/>
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