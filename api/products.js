// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB
if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB error:", err));
}

// Load Product model from local models directory
const Product = require("./models/Product");

// API Routes - support both /api/products and /products paths for Vercel
app.get(["/api/products", "/products"], async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Root route for API health check
app.get(["/", "/api"], (req, res) => {
  res.json({ message: "API is running" });
});

// Handle 404 for API routes
app.use("*", (req, res) => {
  res.status(404).json({ message: "API endpoint not found" });
});

// Export for Vercel
module.exports = app; 