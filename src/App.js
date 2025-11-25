import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import './styles/Responsive.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Otras rutas */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
