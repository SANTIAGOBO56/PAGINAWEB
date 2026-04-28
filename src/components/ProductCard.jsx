import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description }) => {
  // Construir el enlace de WhatsApp
  const phoneNumber = '573204379647';
  const message = `Hola, estoy interesado en el repuesto: ${title}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          Preguntar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
