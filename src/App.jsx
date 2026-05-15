import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!showProductList ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="landing-page"
          >
            <div className="landing-content">
              <h1 className="landing-title">Paradise Nursery</h1>
              <div className="divider"></div>
              <p className="landing-subtitle">
                Where Greenery Meets Serenity. Discover the perfect plant to breathe life into your space.
              </p>
              <button className="btn-primary" onClick={handleGetStartedClick}>
                Get Started
              </button>
              <AboutUs />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="products"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductList />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
