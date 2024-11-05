const express = require("express");
const router = express.Router();

let cart = []; // Mock in-memory cart

// Add item to cart
router.post("/add", (req, res) => {
  const { id, title, price, quantity } = req.body;
  cart.push({ id, title, price, quantity });
  res.json({ message: "Item added to cart", cart });
});

// Get all cart items
router.get("/", (req, res) => {
  res.json(cart);
});

// Clear cart
router.delete("/clear", (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared" });
});

module.exports = router;
