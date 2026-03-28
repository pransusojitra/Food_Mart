import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import { API_BASE_URL } from "../apiConfig";

const AdminProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get(`${API_BASE_URL}/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map(item => (
        <Productcard
          key={item._id}
          id={item._id}
          img={item.image}
          title={item.title}
          unit={item.unit}
          rating={item.rating}
          price={item.price}
          isAdmin={true}        // 🔥 THIS LINE IS REQUIRED
          onDelete={fetchProducts}
        />
      ))}
    </div>
  );
};

export default AdminProductList;
