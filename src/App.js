import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ManglarVerde from './pages/ManglarVerde';
import ManglarBlanco from './pages/ManglarBlanco';
import ManglarRojo from './pages/ManglarRojo';
import QuienesSomos from './pages/QuienesSomos';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';
import './index.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manglar-verde" element={<ManglarVerde />} />
          <Route path="/manglar-blanco" element={<ManglarBlanco />} />
          <Route path="/manglar-rojo" element={<ManglarRojo />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
