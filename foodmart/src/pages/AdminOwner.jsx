import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_URL = "http://localhost:5000/api/products";

const AdminOwner = () => {
    const { logout } = useAuth();
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ title: '', price: '', unit: '', rating: '' });
    const [image, setImage] = useState(null);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(API_URL);
            setProducts(res.data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                fetchProducts();
            } catch (err) {
                alert("Delete failed");
            }
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("title", newProduct.title);
        formData.append("price", newProduct.price);
        formData.append("unit", newProduct.unit);
        formData.append("rating", newProduct.rating);
        if (image) formData.append("image", image);

        try {
            await axios.post(`${API_URL}/add`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setNewProduct({ title: '', price: '', unit: '', rating: '' });
            setImage(null);
            fetchProducts();
            alert("Product added successfully!");
        } catch (err) {
            alert("Add failed");
        }
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Owner Admin Panel</h2>
                <button className="btn btn-danger rounded-pill px-4" onClick={logout}>Logout</button>
            </div>

            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h4 className="fw-bold mb-4">Add New Product</h4>
                        <form onSubmit={handleAdd}>
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input type="text" className="form-control rounded-3" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price (₹)</label>
                                <input type="number" className="form-control rounded-3" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Unit (e.g., 1kg)</label>
                                <input type="text" className="form-control rounded-3" value={newProduct.unit} onChange={e => setNewProduct({...newProduct, unit: e.target.value})} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rating (1-5)</label>
                                <input type="number" step="0.1" max="5" min="0" className="form-control rounded-3" value={newProduct.rating} onChange={e => setNewProduct({...newProduct, rating: e.target.value})} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product Image</label>
                                <input type="file" className="form-control rounded-3" onChange={e => setImage(e.target.files[0])} required />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-pill py-2 fw-bold">Add Product</button>
                        </form>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h4 className="fw-bold mb-4">Manage Products</h4>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Unit</th>
                                        <th>Rating</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(p => (
                                        <tr key={p._id}>
                                            <td>
                                                <img src={`http://localhost:5000/${p.image}`} alt={p.title} className="rounded" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                                            </td>
                                            <td>{p.title}</td>
                                            <td>₹{p.price}</td>
                                            <td>{p.unit}</td>
                                            <td><i className="fa-solid fa-star text-warning me-1"></i>{p.rating}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={() => handleDelete(p._id)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOwner;
