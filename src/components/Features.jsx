import React from 'react';
import './Features.css';

const featuresList = [
  {
    title: 'Expertos en Frenos',
    description: 'Años de experiencia garantizan que tu seguridad esté en las mejores manos.',
    icon: '🛡️'
  },
  {
    title: 'Garantía de Calidad',
    description: 'Solo trabajamos con marcas certificadas y repuestos originales o reemplazos premium.',
    icon: '✅'
  },
  {
    title: 'Asesoría Personalizada',
    description: 'Te orientamos vía WhatsApp para que compres exactamente la pieza que tu auto necesita.',
    icon: '💬'
  },
  {
    title: 'Amplio Stock',
    description: 'Desde pastillas hasta bombas y amortiguadores, tenemos lo que buscas al instante.',
    icon: '📦'
  }
];

const Features = () => {
  return (
    <section id="beneficios" className="features">
      <div className="container">
        <div className="features-header">
          <h2>¿Por qué elegir Partfrenos?</h2>
          <p>Comprometidos con el rendimiento y la seguridad de tu vehículo.</p>
        </div>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
