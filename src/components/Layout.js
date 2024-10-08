// src/components/Layout.js
import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import '../styles/Layout.css'; // Create a separate CSS for layout styling

const Layout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={`layout ${isDarkTheme ? 'dark' : 'light'}`}>
      <header className="header">
        <button className="toggle-theme-btn" onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
