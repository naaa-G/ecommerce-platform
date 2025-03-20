const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nameEn: {
    type: String,
    required: true
  },
  nameFa: {
    type: String,
    required: true
  },
  descriptionEn: {
    type: String,
    required: true
  },
  descriptionFa: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Check if model already exists to prevent mongoose overwrite model error
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema); 