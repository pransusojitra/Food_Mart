import React from "react";
import { Link } from "react-router-dom";
import "./Productcard.css";
import { UPLOADS_BASE_URL } from "../apiConfig";

const Productcard = ({
  id,
  img,
  title,
  unit,
  rating,
  price,
  qty,
  onAdd,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="p-3">
      <div
        className="card d-flex flex-column shadow-lg border-white rounded-4"
        style={{ width: "16rem", height: "400px" }}
      >
        <Link to={`/product/${id}`} className="d-flex justify-content-center mt-3 text-decoration-none">
          <div 
            className="rounded-4 d-flex align-items-center justify-content-center" 
            style={{ backgroundColor: "#fafafa", height: "13rem", width: "14rem" }}
          >
            <img
              src={`${UPLOADS_BASE_URL}/${img}`}
              alt={title}
              style={{ maxHeight: "11rem", maxWidth: "12rem", objectFit: "contain" }}
            />
          </div>
        </Link>

        <div className="card-body d-flex flex-column gap-2">
          <Link to={`/product/${id}`} className="text-decoration-none text-dark">
            <h6>{title}</h6>
          </Link>

          <div className="d-flex gap-2 align-items-center">
            <p className="mb-0">{unit}</p>
            <i className="fa-solid fa-star text-warning"></i>
            <p className="mb-0">{rating}</p>
          </div>

          <h5>₹ {price}</h5>

          {/* ADD / QUANTITY CONTROLS */}
          {qty === 0 ? (
            <button className="btn btn-success mt-auto" onClick={onAdd}>
              Add to Cart
            </button>
          ) : (
            <div className="d-flex align-items-center gap-3 mt-auto">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={onDecrease}
              >
                −
              </button>

              <span className="fw-semibold">{qty}</span>

              <button
                className="btn btn-outline-success btn-sm"
                onClick={onIncrease}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productcard;
