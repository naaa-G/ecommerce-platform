// Import Mongoose
const mongoose = require("mongoose");

// Define product schema
const productSchema = new mongoose.Schema({
  nameEn: { type: String, required: true }, // English name
  nameFa: { type: String, required: true }, // Persian name
  price: { type: Number, required: true }, // Price in IRR
  image: { type: String, required: true }, // Image path
  descriptionEn: { type: String }, // English description
  descriptionFa: { type: String }, // Persian description
});

// Export Product model
module.exports = mongoose.model("Product", productSchema);
