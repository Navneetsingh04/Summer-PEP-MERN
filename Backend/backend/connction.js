const mongoose = require("mongoose");

async function connectMongoDb(url) {
  return await mongoose
    .connect(url)
    .then(() => console.log("MongDb database connected"))
    .catch((err) => console.log("mongo Error", err));
}

module.exports = {
    connectMongoDb,
}