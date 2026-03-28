import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }

        const res = await login(email, password);
        
        if (res.success) {
            const user = JSON.parse(localStorage.getItem('foodmart_user'));
            if (user.role === 'owner') {
                navigate('/admin-owner');
            } else {
                navigate('/');
            }
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="container mt-5 py-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                        <div className="card-body p-5">
                            <h2 className="text-center fw-bold mb-4">Login</h2>
                            {error && <div className="alert alert-danger mb-4">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="form-control rounded-pill py-2 px-3 shadow-none border-2" 
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control rounded-pill py-2 px-3 shadow-none border-2" 
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 py-2 rounded-pill fw-bold fs-5 shadow-sm">
                                    Login
                                </button>
                            </form>
                            <div className="text-center mt-4">
                                <p className="text-muted">Don't have an account? <Link to="/register" className="text-success fw-bold text-decoration-none">Register here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
