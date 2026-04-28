import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>PART<span className="text-primary">FRENOS</span></h2>
          <p>Los mejores repuestos para tu vehículo en un solo lugar. Calidad, seguridad y confianza en cada pieza.</p>
        </div>
        
        <div className="footer-links">
          <h3>Nuestras Redes</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/partfrenosla50/" target="_blank" rel="noopener noreferrer" className="social-item">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span> 
              Instagram
            </a>
            <a href="https://www.google.com/search?q=partfrenos+la+50&oq=partfrenos+la+50&aqs=chrome..69i57j33i160.4674j0j9&client=ms-android-xiaomi-rvo3&sourceid=chrome-mobile&ie=UTF-8#mpd=~2808627065025803826/promote/performance" target="_blank" rel="noopener noreferrer" className="social-item">
              <span className="icon">📍</span> Google Business
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contacto Directo</h3>
          <p><strong>📧 Email:</strong> partfrenosla50@gmail.com</p>
          <p><strong>💬 WhatsApp:</strong> +57 320 437 9647</p>
          <p><strong>🕒 Horario:</strong> Lun - Sáb, 8:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Partfrenos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
