// Import Express Router
const express = require("express");
// Create router instance
const router = express.Router();
// Import Product model
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST new product
router.post("/", async (req, res) => {
  try {
    const { nameEn, nameFa, price, image, descriptionEn, descriptionFa } =
      req.body;
    const product = new Product({
      nameEn,
      nameFa,
      price,
      image,
      descriptionEn,
      descriptionFa,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

// Export router
module.exports = router;
