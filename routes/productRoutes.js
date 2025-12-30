const express = require("express");
const router = express.Router();
let products = require("../data/products");

// GET - Browse products
router.get("/", (req, res) => {
  res.json(products);
});

// POST - Add product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
