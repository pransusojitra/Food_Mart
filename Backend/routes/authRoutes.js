const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const router = express.Router();
const JWT_SECRET = "foodmart_secret_key"; // In a real app, use an environment variable

/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Force role to customer for all new registrations
    const user = new User({ name, email, password: hashedPassword, role: "customer" });
    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ token, user: { id: user._id, name, email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Special case for Owner
    if (email === "owner@gmail.com" && password === "123456") {
      let owner = await User.findOne({ email });
      if (!owner) {
        // Automatically create owner if it doesn't exist (manual addition simulation)
        const hashedPassword = await bcrypt.hash(password, 10);
        owner = new User({ name: "Owner", email, password: hashedPassword, role: "owner" });
        await owner.save();
      }
      const token = jwt.sign({ id: owner._id, role: "owner" }, JWT_SECRET, { expiresIn: "1h" });
      return res.json({ token, user: { id: owner._id, name: owner.name, email: owner.email, role: "owner" } });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
