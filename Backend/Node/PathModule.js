const path = require('path');
const fs = require('fs');

// const tempPath = path.join("temp","index.txt");
// const videoPath = path.join("temp","/video","index.txt");
// console.log(tempPath);

// fs.mkdir(videoPath,(err) => {
//     if (err) throw err;
//     console.log("fisle created successfully");
// })


// fs.writeFile(tempPath, "Hello World", (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
// });

// const tempDir = path.join(__dirname, "temp1");
// const indexpath = path.join(__dirname, "../temp", "one.txt");
// console.log(indexpath);


const fullpath = path.join("../temp","video","index.txt");

fs.writeFile(fullpath, "Hello World", (err) => {
    if (err) throw err;
    console.log("File written successfully at:", fullpath);
});