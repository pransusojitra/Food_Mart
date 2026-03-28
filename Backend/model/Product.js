const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // image path
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    nutrients: {
      type: [String],
      default: ["Vitamin C", "Fiber", "Energy"],
    },
  },
  { timestamps: true }
);

// Check if model already exists to prevent OverwriteModelError
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
module.exports = Product;
