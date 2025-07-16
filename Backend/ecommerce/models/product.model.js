const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const product = mongoose.model("Product", productSchema);
module.exports = product;