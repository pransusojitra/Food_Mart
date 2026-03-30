import React from "react";
import axios from "axios";

const AdminProductCard = ({ product, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${product._id}`
      );
      onDelete(); // 🔁 refresh list
    } catch (err) {
      console.error("Error deleting product", err);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="card h-100 shadow-sm rounded-4">
      <img
        src={`http://localhost:5000/${product.image}`}
        alt={product.title}
        className="card-img-top p-3"
        style={{ height: "180px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="fw-semibold">{product.title}</h6>
        <p className="mb-1 text-muted">{product.unit}</p>

        <div className="d-flex align-items-center gap-2 mb-2">
          <i className="fa-solid fa-star text-warning"></i>
          <span>{product.rating}</span>
        </div>

        <h6 className="text-success mb-3">₹ {product.price}</h6>

        {/* DELETE BUTTON */}
        <button
          className="btn btn-sm btn-danger mt-auto"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;
