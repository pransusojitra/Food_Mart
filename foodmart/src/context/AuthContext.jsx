import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';

const AuthContext = createContext();

const API_URL = `${API_BASE_URL}/auth`;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('foodmart_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post(`${API_URL}/login`, { email, password });
            setUser(res.data.user);
            localStorage.setItem('foodmart_user', JSON.stringify(res.data.user));
            return { success: true };
        } catch (err) {
            return { success: false, message: err.response?.data?.message || "Login failed" };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('foodmart_user');
    };

    const register = async (userData) => {
        try {
            const res = await axios.post(`${API_URL}/register`, userData);
            setUser(res.data.user);
            localStorage.setItem('foodmart_user', JSON.stringify(res.data.user));
            return { success: true };
        } catch (err) {
            return { success: false, message: err.response?.data?.message || "Registration failed" };
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
