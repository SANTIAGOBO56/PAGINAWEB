import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
