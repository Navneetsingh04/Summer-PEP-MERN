const express = require('express');
const app = express();
const PORT = 3000;
const router = require("./routes/user.route")
const productRouter = require("./routes/product.route")
app.use(express.json());
require("./db/index")

app.get("/", (req, res) => {
    console.log("Welcome to the Ecommerce API");
    res.send("Welcome to the Ecommerce API");
});
app.use("/users",router);
app.use("/products",productRouter)


app.listen(PORT,() => {
    console.log(`Server started at port ${PORT}`)
})