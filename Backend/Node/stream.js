const fs = require("fs");
const zlib = require("zlib");

// const stream = fs.createReadStream("test.txt", {
//   encoding: "utf-8",
//   highWaterMark: 5,
// });

// const writeStream = fs.createWriteStream("output1.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// stream.on("data", (chunks) => {
//   console.log("Reading Stream..", chunks);
//   writeStream.write(chunks, () => {
//     console.log("Write completed");
//   });
//   // writeStream.write()
//   // fs.appendFile("abc.txt",chunks,(err) =>{
//   // if(err) throw err;
//   // })
// });

// stream.pipe(writeStream)

const gzip = zlib.createGzip();
fs.createReadStream("output.txt")
  .pipe(gzip)
  .pipe(fs.createWriteStream("input.txt.gz"));
