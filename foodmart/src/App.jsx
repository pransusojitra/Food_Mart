import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import CheckoutDetails from './pages/CheckoutDetails';
import AdminOwner from './pages/AdminOwner';
import AdminCustomer from './pages/AdminCustomer';
import ProductDetails from './pages/ProductDetails';
import ProtectedRoute from './Component/ProtectedRoute';
import Footer from './Component/Footer';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/checkout-details" element={<ProtectedRoute><CheckoutDetails /></ProtectedRoute>} />
                        <Route 
                            path="/admin-owner" 
                            element={<ProtectedRoute role="owner"><AdminOwner /></ProtectedRoute>} 
                        />
                        <Route 
                            path="/admin-customer" 
                            element={<ProtectedRoute role="customer"><AdminCustomer /></ProtectedRoute>} 
                        />
                        <Route path="/product/:id" element={<ProductDetails />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;


