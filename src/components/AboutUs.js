import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-us-container"
      style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
    >
      <h2 style={{ fontSize: '2.5rem', color: 'var(--dark-green)', marginBottom: '2rem' }}>Welcome to Paradise Nursery</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '1.5rem' }}>
        At Paradise Nursery, we believe that every home deserves a touch of nature. Our journey started in a small backyard greenhouse, fueled by a passion for the vibrant, air-purifying wonders of houseplants. 
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '1.5rem' }}>
        Today, we curate a premium selection of high-quality plants, ranging from resilient succulents to exotic tropicals. Our team of experts is dedicated to helping you find the perfect green companion for your space, ensuring both beauty and well-being.
      </p>
      <div className="stats" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '2rem', color: 'var(--primary-green)' }}>500+</h3>
          <p>Plants Sold</p>
        </div>
        <div>
          <h3 style={{ fontSize: '2rem', color: 'var(--primary-green)' }}>50+</h3>
          <p>Varieties</p>
        </div>
        <div>
          <h3 style={{ fontSize: '2rem', color: 'var(--primary-green)' }}>100%</h3>
          <p>Love & Care</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
