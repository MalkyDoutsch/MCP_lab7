import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">MCP Lab 7</h1>
        <div className="header-actions">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
