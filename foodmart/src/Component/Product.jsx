import React from "react";
import Productcard from "./Productcard";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { products, addToCart, increaseQty, decreaseQty } = useCart();

  return (
    <>
      {/* 🛍️ PRODUCTS LIST */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {products.map(item => (
          <Productcard
            key={item._id}
            img={item.image}
            title={item.title}
            unit={item.unit}
            rating={item.rating}
            price={item.price}
            qty={item.qty}
            onAdd={() => addToCart(item._id)}
            onIncrease={() => increaseQty(item._id)}
            onDecrease={() => decreaseQty(item._id)}
          />
        ))}
      </div>
    </>
  );
};

export default Product;


 