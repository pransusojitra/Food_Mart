import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    // 🔄 Fetch products
    const fetchdata = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/products`);
            const updated = res.data.map(item => ({
                ...item,
                qty: 0,
            }));
            setProducts(updated);
        } catch (err) {
            console.error("Error fetching products", err);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    // ➕ Add to cart
    const addToCart = (id) => {
        setProducts(prev =>
            prev.map(item =>
                item._id === id ? { ...item, qty: 1 } : item
            )
        );
    };

    // ➕ Increase quantity
    const increaseQty = (id) => {
        setProducts(prev =>
            prev.map(item =>
                item._id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // ➖ Decrease quantity
    const decreaseQty = (id) => {
        setProducts(prev =>
            prev.map(item =>
                item._id === id && item.qty > 0
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    // 💰 Calculate total price
    useEffect(() => {
        const sum = products.reduce(
            (acc, item) => acc + item.price * item.qty,
            0
        );
        setTotal(sum);
    }, [products]);

    // 🛒 Cart items
    const cartItems = products.filter(item => item.qty > 0);

    return (
        <CartContext.Provider 
            value={{ 
                products, 
                cartItems, 
                cartTotal: total, 
                addToCart, 
                increaseQty, 
                decreaseQty 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
