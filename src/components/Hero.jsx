import React from 'react';
import './Hero.css';
import shopImg from '../assets/shop.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <a href="https://wa.me/573204379647?text=Hola,%20vengo%20de%20la%20página%20web" target="_blank" rel="noopener noreferrer" className="hero-shop-image-link">
          <div className="hero-shop-image-wrapper">
            <img src={shopImg} alt="Taller Partfrenos" className="hero-shop-image" />
            <div className="hero-shop-image-hover">
              <span>Chatear Ahora</span>
            </div>
          </div>
        </a>
        
        <h2>Rendimiento y <span className="text-primary">Seguridad</span></h2>
        <p>Especialistas en repuestos generales. Encuentra lo que buscas con la mejor asesoría del mercado.</p>
        
        <div className="hero-buttons">
          <a href="#catalogo" className="btn">Ver Catálogo General</a>
          <a href="#beneficios" className="btn btn-outline">Nuestros Beneficios</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
