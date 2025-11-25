import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ManglarVerde from './pages/ManglarVerde';
import ManglarBlanco from './pages/ManglarBlanco';
import ManglarRojo from './pages/ManglarRojo';
import QuienesSomos from './pages/QuienesSomos';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';

// define un valor por defecto para initialPages para evitar errores
const initialPages = [];

function App() {
  const [pages, setPages] = useState(() => {
    // Intentar cargar las páginas desde localStorage
    const savedPages = localStorage.getItem('cms-pages');
    return savedPages ? JSON.parse(savedPages) : initialPages;
  });

  // Guardar las páginas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('cms-pages', JSON.stringify(pages));
  }, [pages]);

  // Función para agregar una nueva página
  const handleAddPage = (newPage) => {
    setPages([...pages, newPage]);
  };

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manglar-verde" element={<ManglarVerde />} />
        <Route path="/manglar-blanco" element={<ManglarBlanco />} />
        <Route path="/manglar-rojo" element={<ManglarRojo />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
