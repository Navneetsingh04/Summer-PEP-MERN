const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    console.log("Hello form middleware 1");

    fs.appendFile(
      fileName,
      `\n${Date.now()}: ${req.method} : ${req.path}`,
      (err) => {
        if (err) {
          console.log("Error");
        }
        next();
      }
    );
  };
}

module.exports = {
    logReqRes
}