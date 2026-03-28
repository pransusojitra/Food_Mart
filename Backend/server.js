const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ROUTES */
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* DB CONNECTION */
mongoose
  .connect("mongodb://127.0.0.1:27017/productdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* SERVER */
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);


