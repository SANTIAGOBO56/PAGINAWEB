import React from 'react';
import ProductCard from './ProductCard';
import './ProductCatalog.css';

// Importación de imágenes premium generadas
import imgPastillas from '../assets/products/pastillas_freno_premium_1777390591146.png';
import imgDiscos from '../assets/products/discos_freno_premium_1777390605170.png';
import imgLiquidos from '../assets/products/liquidos_premium_1777390738849.png';
import imgAmortiguadores from '../assets/products/amortiguadores_premium_1777390618253.png';
import imgBombas from '../assets/products/bombas_freno_premium_1777390671868.png';
import imgFiltros from '../assets/products/filtros_premium_1777390686546.png';
import imgBujias from '../assets/products/bujias_premium_1777390703130.png';
import imgSuspension from '../assets/products/suspension_partes_premium_1777390721348.png';
import imgBaterias from '../assets/products/baterias_premium_1777390638239.png';

const products = [
  { id: 1, title: 'Pastillas de Frenos', description: 'Manejamos pastillas para todo tipo de vehículos. Cerámicas, semi-metálicas y más. Pregunta por la tuya.', image: imgPastillas },
  { id: 2, title: 'Discos de Freno', description: 'Discos ventilados, sólidos y perforados. Calidad garantizada para un frenado seguro.', image: imgDiscos },
  { id: 3, title: 'Líquidos y Fluidos', description: 'Líquido de frenos DOT 3, 4 y 5.1, aceites y más. Mantén tu sistema en óptimas condiciones.', image: imgLiquidos },
  { id: 4, title: 'Amortiguadores', description: 'Amortiguadores a gas y hidráulicos para todas las marcas. Mejora la estabilidad de tu auto.', image: imgAmortiguadores },
  { id: 5, title: 'Bombas y Cilindros', description: 'Bombas de freno principales y cilindros auxiliares. Restauramos la presión de tu frenado.', image: imgBombas },
  { id: 6, title: 'Filtros en General', description: 'Filtros de aceite, aire, combustible y cabina. El mantenimiento preventivo que tu motor necesita.', image: imgFiltros },
  { id: 7, title: 'Bujías y Encendido', description: 'Bujías de iridium, platino y cobre. Bobinas y cables para un encendido eficiente.', image: imgBujias },
  { id: 8, title: 'Suspensión y Dirección', description: 'Terminales, muñones, tijeras y bujes. Todo para que tu dirección sea precisa y segura.', image: imgSuspension },
  { id: 9, title: 'Baterías y Eléctrico', description: 'Baterías de alto rendimiento y repuestos eléctricos generales para tu vehículo.', image: imgBaterias }
];

const ProductCatalog = () => {
  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="catalog-header">
          <h2>Nuestro <span className="text-primary">Catálogo</span></h2>
          <p>Ofrecemos repuestos generales para todas las marcas. Haz clic en el que necesites y consulta disponibilidad por WhatsApp.</p>
        </div>

        <div className="catalog-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
