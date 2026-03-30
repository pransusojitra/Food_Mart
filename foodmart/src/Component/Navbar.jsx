import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import "./Navbar.css";
import img from "../assets/logo.png"

const Navbar = () => {
    const { cartItems } = useCart();
    const { user, logout } = useAuth();
    
    // Total quantity of items in cart
    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-2">
                <div className="container-fluid d-flex align-items-center justify-content-between flex-nowrap row-gap-3">

                    {/* Left: Logo (Centered on mobile via CSS) */}
                    <div className="navbar-logo-container">
                        <Link className="navbar-brand d-flex align-items-center m-0" to="/">
                            <img src={img} alt="logo" className="nav-logo" />
                        </Link>
                    </div>

                    {/* Center: Search (Hidden on small mobile <= 425px) */}
                    <div className="navbar-search-container border rounded-pill bg-light" style={{ height: "45px" }}>
                        <div className="dropdown border-end">
                            <button className="btn dropdown-toggle border-0 px-3 fw-medium text-muted" type="button" data-bs-toggle="dropdown">
                                All Categories
                            </button>
                            <ul className="dropdown-menu shadow-sm border-0 mt-2">
                                <li><a className="dropdown-item" href="#">Groceries</a></li>
                                <li><a className="dropdown-item" href="#">Drinks</a></li>
                                <li><a className="dropdown-item" href="#">Vegetables</a></li>
                            </ul>
                        </div>

                        <form className="flex-grow-1 d-flex align-items-center px-3" role="search">
                            <input className="form-control border-0 bg-transparent shadow-none" type="search" placeholder="Search for products..." aria-label="Search" />
                            <i className="fa-solid fa-magnifying-glass text-muted"></i>
                        </form>
                    </div>

                    {/* Right: Actions */}
                    <div className='navbar-actions-container d-flex align-items-center gap-3 gap-lg-4'>
                        <div className='text-end d-none d-xl-block border-end pe-3'>
                            <p className='text-muted small mb-0'>24/7 Support</p>
                            <h6 className='fw-bold mb-0 text-dark'>+980-34984089</h6>
                        </div>

                        <div className='d-flex align-items-center gap-3 fs-5 icon-row'>
                            {user ? (
                                <div className="dropdown">
                                    <button className="btn btn-link text-dark p-0 dropdown-toggle no-caret" type="button" data-bs-toggle="dropdown">
                                        <i className="fa-regular fa-user"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2">
                                        <li className="dropdown-header fw-bold">Hi, {user.name}</li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <Link className="dropdown-item" to={user.role === 'owner' ? "/admin-owner" : "/admin-customer"}>
                                                <i className="fa-solid fa-gauge me-2"></i> Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="dropdown-item text-danger" onClick={logout}>
                                                <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/login" className="text-dark"><i className="fa-regular fa-user"></i></Link>
                            )}
                            
                            <Link to="/" className="text-dark position-relative">
                                <i className="fa-regular fa-heart"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>0</span>
                            </Link>
                            
                            <Link to="/cart" className="text-dark position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {totalQty > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: '10px' }}>
                                        {totalQty}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </div >
    );
}

export default Navbar;
