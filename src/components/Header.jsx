import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1>PART<span className="text-primary">FRENOS</span></h1>
        </div>
        <nav className="nav-links">
          <a href="#beneficios">Beneficios</a>
          <a href="#catalogo">Catálogo</a>
          <a href="https://www.instagram.com/partfrenosla50/" target="_blank" rel="noopener noreferrer" title="Síguenos en Instagram" className="instagram-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ig-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://wa.me/573204379647?text=Hola,%20quisiera%20hacer%20una%20consulta%20general" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Contáctanos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
