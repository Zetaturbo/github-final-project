import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + (item.cost * item.quantity), 0);
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    // Calculate total cost based on quantity for an individual item
    const calculateTotalCost = (item) => {
        return item.cost * item.quantity;
    };

    return (
        <div className="cart-container" style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--dark-green)', fontFamily: 'Outfit' }}>Your Shopping Cart</h2>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>Total Items: {cart.reduce((a, b) => a + b.quantity, 0)}</p>
                    <h3 style={{ fontSize: '2rem', color: 'var(--primary-green)', fontWeight: '800' }}>Total: ${calculateTotalAmount()}</h3>
                </div>
            </div>

            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                    <ShoppingBag size={80} color="#d1d5db" style={{ marginBottom: '1.5rem' }} />
                    <p style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '2rem' }}>Your cart is empty</p>
                    <button className="btn-primary" onClick={onContinueShopping}>
                        Start Shopping
                    </button>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {cart.map(item => (
                        <motion.div 
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            key={item.name} 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                background: 'white', 
                                padding: '1.5rem', 
                                borderRadius: '20px', 
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                gap: '2rem'
                            }}
                        >
                            <img src={item.image} alt={item.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '15px' }} />
                            
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{item.name}</h3>
                                <p style={{ color: '#6b7280', fontWeight: '500' }}>Unit Price: ${item.cost}</p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f3f4f6', padding: '0.5rem 1rem', borderRadius: '99px' }}>
                                <button 
                                    onClick={() => handleDecrement(item)}
                                    style={{ background: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                                >
                                    <Minus size={16} />
                                </button>
                                <span style={{ fontSize: '1.2rem', fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                <button 
                                    onClick={() => handleIncrement(item)}
                                    style={{ background: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div style={{ textAlign: 'right', minWidth: '120px' }}>
                                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Subtotal</p>
                                <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--dark-green)' }}>${calculateTotalCost(item)}</p>
                            </div>

                            <button 
                                onClick={() => handleRemove(item)}
                                style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '0.75rem', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}
                                onMouseOver={(e) => e.currentTarget.style.background = '#fecaca'}
                                onMouseOut={(e) => e.currentTarget.style.background = '#fee2e2'}
                            >
                                <Trash2 size={20} />
                            </button>
                        </motion.div>
                    ))}

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'flex-end' }}>
                        <button 
                            className="btn-primary" 
                            style={{ background: 'white', color: 'var(--dark-green)', border: '2px solid var(--dark-green)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            onClick={onContinueShopping}
                        >
                            <ArrowLeft size={20} /> Continue Shopping
                        </button>
                        <button 
                            className="btn-primary" 
                            onClick={handleCheckoutShopping}
                        >
                            Checkout (Coming Soon)
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItem;
