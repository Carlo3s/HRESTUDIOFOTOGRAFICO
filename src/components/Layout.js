import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './Layout.css';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, pages }) => {
  const location = useLocation();
  // Oculta el sidebar si la ruta es de producto
  const hideSidebar = location.pathname.startsWith('/producto/');

  return (
    <div className="layout">
      {!hideSidebar && <Sidebar pages={pages} />}
      <main className="main-content" style={hideSidebar ? { marginLeft: 0 } : {}}>
        {children}
      </main>
    </div>
  );
};

export default Layout;