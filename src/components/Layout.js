// src/components/Layout.js
import React from 'react';
import { useTheme } from '../utils/ThemeContext';
import '../styles/Layout.css'; // Create a separate CSS for layout styling
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer';

const Layout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={`layout ${isDarkTheme ? 'dark' : 'light'}`}>
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
