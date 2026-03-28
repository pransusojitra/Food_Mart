const express = require("express");
const Order = require("../model/Order");

const router = express.Router();

/* PLACE ORDER */
router.post("/add", async (req, res) => {
  try {
    const { user, items, total, shippingAddress } = req.body;

    const order = new Order({ user, items, total, shippingAddress });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET USER ORDERS */
router.get("/user/:id", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET ALL ORDERS (Owner) */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email").sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
