import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './Layout.css';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, pages }) => {
  const location = useLocation();
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Oculta el sidebar automáticamente al entrar a un producto
  useEffect(() => {
    if (location.pathname.startsWith('/producto/')) {
      setSidebarVisible(false);
    } else {
      setSidebarVisible(true);
    }
  }, [location.pathname]);

  // Botón flotante para mostrar el sidebar
  const showSidebarButton = !sidebarVisible && (
    <button
      className="sidebar-toggle-btn"
      onClick={() => setSidebarVisible(true)}
      aria-label="Mostrar menú"
    >
      <span style={{ fontSize: 28 }}>📑</span>
    </button>
  );

  return (
    <div className="layout">
      {sidebarVisible && <Sidebar pages={pages} onCloseSidebar={() => setSidebarVisible(false)} />}
      <main className="main-content" style={sidebarVisible ? {} : { marginLeft: 0 }}>
        {showSidebarButton}
        {children}
      </main>
    </div>
  );
};

export default Layout;