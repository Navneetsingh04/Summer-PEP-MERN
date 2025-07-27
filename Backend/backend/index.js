const express = require("express");
const { logReqRes } = require("./middleware")
const { connectMongoDb } = require("./connction")
const userRouter = require("./routes/user")

const app = express();
const PORT = 4000;

connectMongoDb("mongodb://127.0.0.1:27017/dummy_data");

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

app.use("/api/users",userRouter);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
