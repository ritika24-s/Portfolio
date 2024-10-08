import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import '../styles/Navbar.css'; // Separate CSS for Navbar styling
import Toggle from './Toggle';

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const scrollToContact = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="navbar-left">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/plain" className="nav-link">About Me</Link> {/* Redirecting to PlainPage.js */}
        <Link className="nav-link" onClick={scrollToContact}>Contact</Link> {/* Scrolling to footer */}
        <a href="/path/to/your/resume.pdf" className="nav-link" download>Download Resume</a>
      </div>
      <div className="navbar-right">
        <Toggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
      </div>
    </nav>
  );
};

export default Navbar;
