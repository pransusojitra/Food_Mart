import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, cartTotal, increaseQty, decreaseQty } = useCart();
    
    return (
        <div className="container mt-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Your Cart</li>
                </ol>
            </nav>

            <h2 className="fw-bold mb-4">Your Shopping Cart</h2>

            {cartItems.length > 0 ? (
                <div className="row g-4">
                    {/* Items List */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm rounded-4 p-3">
                            {cartItems.map(item => (
                                <div key={item._id} className="d-flex align-items-center gap-4 mb-3 pb-3 border-bottom">
                                    <img 
                                        src={`http://localhost:5000/${item.image}`} 
                                        alt={item.title} 
                                        className="rounded-4" 
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                    />
                                    <div className="flex-grow-1">
                                        <h5 className="mb-1 fw-bold">{item.title}</h5>
                                        <p className="text-muted mb-2">{item.unit}</p>
                                        <div className="d-flex align-items-center gap-3">
                                            <button 
                                                className="btn btn-outline-secondary btn-sm rounded-circle" 
                                                style={{ width: '32px', height: '32px' }}
                                                onClick={() => decreaseQty(item._id)}
                                            >
                                                −
                                            </button>
                                            <span className="fw-bold fs-5">{item.qty}</span>
                                            <button 
                                                className="btn btn-outline-success btn-sm rounded-circle" 
                                                style={{ width: '32px', height: '32px' }}
                                                onClick={() => increaseQty(item._id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <h5 className="fw-bold text-success mb-0">₹{item.price * item.qty}</h5>
                                        <p className="text-muted small">₹{item.price} / unit</p>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="mt-3">
                                <Link to="/" className="btn btn-outline-dark rounded-pill">
                                    <i className="fa-solid fa-arrow-left me-2"></i> Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
                            <h4 className="fw-bold mb-4">Order Summary</h4>
                            
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Subtotal</span>
                                <span className="fw-semibold">₹{cartTotal}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-muted">Delivery</span>
                                <span className="text-success fw-semibold">FREE</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <span className="text-muted">Tax</span>
                                <span className="fw-semibold">₹0</span>
                            </div>
                            
                            <hr />
                            
                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="fw-bold">Total</h5>
                                <h4 className="fw-bold text-success">₹{cartTotal}</h4>
                            </div>
                            
                            <button className="btn btn-success w-100 py-3 rounded-pill fw-bold fs-5 shadow-sm">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-5 shadow-sm rounded-4 bg-white mt-4">
                    <i className="fa-solid fa-cart-shopping fs-1 text-muted mb-4 opacity-50" style={{ fontSize: '100px' }}></i>
                    <h3>Your cart is empty</h3>
                    <p className="text-muted">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="btn btn-success rounded-pill px-5 py-2 mt-3 fw-bold underline-none">
                        Start Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
