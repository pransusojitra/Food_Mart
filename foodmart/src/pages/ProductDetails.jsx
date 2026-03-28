import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="container mt-5 text-center py-5"><div className="spinner-border text-success"></div></div>;
    if (!product) return <div className="container mt-5 text-center py-5"><h3>Product not found</h3><Link to="/" className="btn btn-success mt-3">Go Home</Link></div>;

    return (
        <div className="container mt-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
                </ol>
            </nav>

            <div className="row g-5 align-items-center">
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <img src={`http://localhost:5000/${product.image}`} className="img-fluid" alt={product.title} />
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold mb-3">{product.title}</h1>
                    <p className="text-muted fs-5 mb-4">{product.description || "Fresh and organic produce sourced directly from local farms. Packed with nutrients and flavor, perfect for healthy snacks and meals."}</p>
                    
                    <div className="d-flex align-items-center gap-4 mb-4">
                        <h2 className="fw-bold text-success mb-0">₹{product.price}</h2>
                        <span className="badge bg-light text-dark border p-2 px-3 fs-6 rounded-pill">{product.unit}</span>
                    </div>

                    <div className="mb-4">
                        <h5 className="fw-bold mb-3">Key Nutrients:</h5>
                        <div className="d-flex gap-2">
                            {(product.nutrients || ['Vitamin C', 'Fiber', 'Energy']).map(n => (
                                <span key={n} className="badge rounded-pill bg-success-subtle text-success px-3 py-2">{n}</span>
                            ))}
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex gap-3">
                        <button className="btn btn-success flex-grow-1 py-3 rounded-pill fw-bold fs-5 shadow-sm" onClick={() => addToCart(product)}>
                            <i className="fa-solid fa-cart-plus me-2"></i> Add to Cart
                        </button>
                        <button className="btn btn-outline-dark px-4 rounded-pill">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>

                    <div className="mt-4 p-3 bg-light rounded-4 border">
                        <div className="d-flex align-items-center gap-3">
                            <i className="fa-solid fa-truck-fast text-success fs-4"></i>
                            <div>
                                <h6 className="fw-bold mb-0">Free Delivery</h6>
                                <p className="mb-0 small text-muted">For orders above ₹500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
