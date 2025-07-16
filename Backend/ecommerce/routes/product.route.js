const express = require("express")
const {getProducts,getProductByName,createProduct} = require("../controller/product.controller")
const productRouter = express.Router()

productRouter.get("/",getProducts);           
productRouter.get("/:name",getProductByName); 
productRouter.post("/",createProduct);       

module.exports = productRouter;