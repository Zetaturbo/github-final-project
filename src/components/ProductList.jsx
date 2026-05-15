import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/CartSlice';
import { ShoppingCart, Leaf, Home, Grid } from 'lucide-react';
import CartItem from './CartItem';
import { motion } from 'framer-motion';

const ProductList = () => {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6", cost: 15 },
                { name: "Spider Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09", cost: 12 },
                { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355", cost: 18 }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921", cost: 10 },
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", cost: 20 },
                { name: "Pothos", image: "https://images.unsplash.com/photo-1512428813833-df4d23e32e52", cost: 8 }
            ]
        },
        {
            category: "Exotic Tropicals",
            plants: [
                { name: "Monstera Deliciosa", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", cost: 25 },
                { name: "Fiddle Leaf Fig", image: "https://images.unsplash.com/photo-1597055181300-e3633a207519", cost: 30 },
                { name: "Bird of Paradise", image: "https://images.unsplash.com/photo-1612360427733-1ec862085731", cost: 35 }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const isPlantInCart = (plantName) => {
        return cartItems.some(item => item.name === plantName);
    };

    return (
        <div className="product-page">
            {/* Navigation Bar */}
            <nav style={{
                background: 'var(--dark-green)',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => window.location.reload()}>
                    <Leaf color="var(--primary-green)" />
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit' }}>Paradise Nursery</span>
                </div>
                
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <button 
                        onClick={() => setShowCart(false)} 
                        style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }}
                    >
                        <Home size={20} /> Home
                    </button>
                    <button 
                        onClick={() => setShowCart(false)} 
                        style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }}
                    >
                        <Grid size={20} /> Plants
                    </button>
                    <div 
                        onClick={() => setShowCart(true)} 
                        style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    >
                        <ShoppingCart size={28} />
                        {totalItems > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: 'var(--accent-gold)',
                                color: 'var(--dark-green)',
                                borderRadius: '50%',
                                padding: '2px 6px',
                                fontSize: '0.75rem',
                                fontWeight: '800'
                            }}>
                                {totalItems}
                            </span>
                        )}
                    </div>
                </div>
            </nav>

            {!showCart ? (
                <div style={{ padding: '3rem 2rem' }}>
                    {plantsArray.map((category, index) => (
                        <div key={index} style={{ marginBottom: '4rem' }}>
                            <h2 style={{ 
                                fontSize: '2.5rem', 
                                textAlign: 'center', 
                                marginBottom: '2.5rem', 
                                color: 'var(--dark-green)',
                                borderBottom: '3px solid var(--primary-green)',
                                display: 'inline-block',
                                marginLeft: '50%',
                                transform: 'translateX(-50%)'
                            }}>
                                {category.category}
                            </h2>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                                gap: '2.5rem',
                                maxWidth: '1200px',
                                margin: '0 auto'
                            }}>
                                {category.plants.map((plant, pIndex) => (
                                    <motion.div 
                                        whileHover={{ y: -10 }}
                                        key={pIndex} 
                                        className="glass-morphism"
                                        style={{ 
                                            borderRadius: '20px', 
                                            overflow: 'hidden', 
                                            boxShadow: 'var(--shadow-premium)',
                                            background: 'white'
                                        }}
                                    >
                                        <div style={{ height: '240px', overflow: 'hidden' }}>
                                            <img 
                                                src={plant.image} 
                                                alt={plant.name} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{plant.name}</h3>
                                            <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary-green)', marginBottom: '1.5rem' }}>${plant.cost}</p>
                                            <button 
                                                className={`btn-primary ${isPlantInCart(plant.name) ? 'btn-disabled' : ''}`}
                                                disabled={isPlantInCart(plant.name)}
                                                onClick={() => handleAddToCart(plant)}
                                                style={{ width: '100%' }}
                                            >
                                                {isPlantInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
};

export default ProductList;
