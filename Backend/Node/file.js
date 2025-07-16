const fs =  require('fs');

// read sync
// fs.readFileSync is a synchronous method that blocks the execution until the file is read 

// const data = fs.readFileSync("text.txt","utf-8");
// console.log(data);

// read Async

// fs.readFile is an asynchronous method that does not block the execution
// It takes a callback function that is executed once the file is read

// fs.readFile("text.txt", "utf-8", (err,data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data);
// }),

// console.log("File read successfully");

// const res = fs.writeFileSync('text.txt',"Hii! i am Navneet singh");

// const res = fs.writeFile('text.txt',"Hello LPU",(err) => {
//     if(err){
//         console.error("Error in writing in the fiel");
//     }
// });

// fs.appendFileSync('text.txt'," Students what is going on!")

// fs.appendFile('text.txt',"\n appending data with the help of Async method",(err) =>{
//     if(err) throw err;
// })


// delete

// fs.unlinkSync("text.txt");

// fs.unlink("text.txt",(err) => {
//     if(err) throw err;
// })


// Create Directory

// fs.mkdirSync("temp")

// fs.mkdir("tempAsync",(err) => {
//     if(err) throw err;
// })

// Read dir

// fs.writeFile("temp/writeFile.js","Hello JavaScript",(err) => {
//     if(err) throw err;
// })                 

fs.writeFile("../test.txt","Hello JavaScript",(err) => {
    if(err) throw err;
})

