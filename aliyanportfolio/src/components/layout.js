import React from 'react';
import './componentCss/Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;