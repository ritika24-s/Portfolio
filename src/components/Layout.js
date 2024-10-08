// src/components/Layout.js
import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import '../styles/Layout.css'; // Create a separate CSS for layout styling
import Navbar from './Navbar'; // Import Navbar component

const Layout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={`layout ${isDarkTheme ? 'dark' : 'light'}`}>
      <Navbar />
      <main>{children}</main>
      <footer id="footer" className="footer">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:your.email@gmail.com">Gmail</a>
        <a href="tel:+1234567890">Phone</a>
      </footer>
    </div>
  );
};

export default Layout;
