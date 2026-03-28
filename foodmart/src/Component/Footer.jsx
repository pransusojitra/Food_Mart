import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-white pt-5 pb-4 border-top">
            <div className="container">
                <div className="row g-4">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <Link className="navbar-brand d-flex align-items-center mb-3" to="/">
                            <img src={logo} alt="logo" style={{ height: "40px" }} />
                        </Link>
                        <p className="text-muted mb-4 pe-lg-5">
                            Food Mart is your one-stop shop for fresh groceries, organic vegetables, and daily essentials delivered to your doorstep.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-outline-success btn-sm rounded-circle"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-outline-success btn-sm rounded-circle"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="btn btn-outline-success btn-sm rounded-circle"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-bold mb-4">Quick Links</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li><Link to="/" className="text-muted text-decoration-none hover-success">Home</Link></li>
                            <li><Link to="/cart" className="text-muted text-decoration-none hover-success">Your Cart</Link></li>
                            <li><Link to="/login" className="text-muted text-decoration-none hover-success">Login</Link></li>
                            <li><Link to="/register" className="text-muted text-decoration-none hover-success">Register</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-4">Support</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Terms of Service</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Shipping Policy</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Help & FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-4">Newsletter</h5>
                        <p className="text-muted small">Subscribe to get the latest offers and updates.</p>
                        <div className="input-group mb-3 border rounded-pill overflow-hidden p-1">
                            <input type="email" className="form-control border-0 shadow-none ps-3" placeholder="Your email" />
                            <button className="btn btn-success rounded-pill px-4" type="button">Join</button>
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-4 text-muted">
                            <i className="fa-solid fa-phone text-success"></i>
                            <span>+91 98765-43210</span>
                        </div>
                    </div>
                </div>

                <hr className="my-5 text-muted opacity-25" />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="text-muted mb-0 small">&copy; 2026 Food Mart. All rights reserved. Designed with ❤️</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" height="20" className="me-3" alt="visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" height="20" alt="mastercard" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
