import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { API_BASE_URL } from '../apiConfig';

const AdminCustomer = () => {
    const { user, logout } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (user?.id) {
                try {
                    const res = await axios.get(`${API_BASE_URL}/orders/user/${user.id}`);
                    setOrders(res.data);
                } catch (err) {
                    console.error("Error fetching orders:", err);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchOrders();
    }, [user]);

    return (
        <div className="container mt-5">
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 p-4 text-center">
                        <div className="mb-3">
                            <i className="fa-regular fa-user fs-1 text-success"></i>
                        </div>
                        <h4 className="fw-bold">{user?.name}</h4>
                        <p className="text-muted">{user?.email}</p>
                        <button className="btn btn-outline-danger w-100 rounded-pill mt-3" onClick={logout}>Logout</button>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="fw-bold mb-0">Order History</h4>
                            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">Total Orders: {orders.length}</span>
                        </div>
                        <div className="table-responsive">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : orders.length === 0 ? (
                                <div className="text-center py-5">
                                    <p className="text-muted">No orders found.</p>
                                </div>
                            ) : (
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Date</th>
                                            <th>Items</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(o => (
                                            <tr key={o._id}>
                                                <td className="fw-semibold text-success small">{o._id}</td>
                                                <td>{new Date(o.createdAt).toLocaleDateString()}</td>
                                                <td>{o.items.length} Items</td>
                                                <td className="fw-bold">₹{o.total}</td>
                                                <td>
                                                    <span className={`badge rounded-pill ${o.status === 'Delivered' ? 'bg-success' : 'bg-primary'}`}>
                                                        {o.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCustomer;
