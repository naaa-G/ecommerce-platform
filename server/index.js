// Import required modules
const express = require("express"); // API framework
const mongoose = require("mongoose"); // MongoDB ODM
const cors = require("cors"); // Enable CORS
require("dotenv").config(); // Load .env variables

// Import product routes
const productRoutes = require("./routes/products");

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Root route for testing
app.get("/", (req, res) => {
  res.send("API running"); // Confirm server is up
});

// Mount product routes
app.use("/api/products", productRoutes);

// Local development port (ignored by Vercel)
const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

// Export for Vercel
module.exports = app;
