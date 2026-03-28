import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { API_BASE_URL } from "../apiConfig";

const ProductForm = () => {
  const [product, setProduct] = useState({
    img: null,
    title: "",
    unit: "",
    rating: "",
    price: ""
  });

  const handleImageChange = (e) => {
    setProduct({ ...product, img: e.target.files[0] });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", product.img);
      formData.append("title", product.title);
      formData.append("unit", product.unit);
      formData.append("rating", product.rating);
      formData.append("price", product.price);

      const res = await axios.post(
        `${API_BASE_URL}/products/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log("Saved Product:", res.data);
      alert("Product added successfully!");

      // reset form
      setProduct({
        img: null,
        title: "",
        unit: "",
        rating: "",
        price: ""
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4">
      <Form.Group className="mb-3">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" onChange={handleImageChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Unit</Form.Label>
        <Form.Control
          type="text"
          name="unit"
          value={product.unit}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={product.rating}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit" variant="success">
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;
