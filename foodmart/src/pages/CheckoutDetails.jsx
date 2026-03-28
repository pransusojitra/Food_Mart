import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const CheckoutDetails = () => {
    const { cartItems, cartTotal } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        address: '',
        city: '',
        zip: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const orderData = {
            user: user?.id,
            items: cartItems.map(item => ({
                product: item._id,
                qty: item.qty,
                price: item.price,
                title: item.title
            })),
            total: cartTotal,
            shippingAddress: {
                address: formData.address,
                city: formData.city,
                zip: formData.zip,
                phone: formData.phone
            }
        };

        try {
            await axios.post('http://localhost:5000/api/orders/add', orderData);
            alert('Order placed successfully!');
            // Ideally: clear cart here. For now, redirect to dashboard.
            navigate('/admin-customer');
        } catch (err) {
            alert('Failed to place order');
        }
    };

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="container mt-5 mb-5">
            <h2 className="fw-bold mb-4">Checkout Details</h2>
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" name="name" className="form-control rounded-3" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Phone Number</label>
                                    <input type="tel" name="phone" className="form-control rounded-3" value={formData.phone} onChange={handleChange} required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Shipping Address</label>
                                    <textarea name="address" className="form-control rounded-3" rows="3" value={formData.address} onChange={handleChange} required></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">City</label>
                                    <input type="text" name="city" className="form-control rounded-3" value={formData.city} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">ZIP Code</label>
                                    <input type="text" name="zip" className="form-control rounded-3" value={formData.zip} onChange={handleChange} required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success w-100 py-3 rounded-pill fw-bold fs-5 mt-4 shadow-sm">
                                Place Order (₹{cartTotal})
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
                        <h4 className="fw-bold mb-4">Your Order</h4>
                        {cartItems.map(item => (
                            <div key={item._id} className="d-flex justify-content-between mb-2">
                                <span className="text-muted">{item.qty}x {item.title}</span>
                                <span className="fw-semibold">₹{item.price * item.qty}</span>
                            </div>
                        ))}
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h5 className="fw-bold">Total</h5>
                            <h4 className="fw-bold text-success">₹{cartTotal}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDetails;
