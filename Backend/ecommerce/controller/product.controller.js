const Product = require("../models/product.model");

async function getProducts(req, res) {
  const products = await Product.find();
  try {
    Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
}

async function getProductByName(req, res) {
  const { name } = req.params;
  const product = await Product.findOne({ name });
  try {
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
}

async function createProduct(req, res) {
  const { name, price, category, description } = req.body;
  if (!name || !price || !category) {
    return res.status(400).send({ message: "All fields are required" });
  }

  const product = await Product.create({
    name,
    price,
    category,
    description: description || "",
  });

  try {
    console.log(`Product Created: `, JSON.stringify(product));
    res.status(201).send({ message: "Product created successfully", product });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: err.message });
  }
}
module.exports = { getProducts, getProductByName, createProduct };
