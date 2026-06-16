import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminProductCard from "./AdminProductCard";
import { API_BASE_URL } from "./apiConfig";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products`);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid p-4">
      <h3 className="mb-4 text-center">Admin – All Products</h3>

      {loading ? (
        <div className="text-center">Loading products...</div>
      ) : (
        <div className="row g-4">
          {products.map((item) => (
            <div
              key={item._id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <AdminProductCard
                product={item}
                onDelete={fetchProducts}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
