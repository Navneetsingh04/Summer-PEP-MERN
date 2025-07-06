const fs = require("fs");

// fs.readFile('JS/a.txt','utf-8',function(err,data){
//      if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data);
// })

// console.log("Hii There")


// function read(cb){
//     fs.readFile('JS/a.txt','utf-8',function(err,data){
//         cb(data);
//     });
// }

// function onDone(data){
//     console.log(data);
// }

// read(onDone);

// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// function read(){
//     return new Promise(function(resolve){
//         console.log("Inside Promise");

//         fs.readFile('JS/a.txt', 'utf-8', function(err, data) {
//             console.log("Before resolve");
//             resolve(data); 
//         });
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// var a = read();
// a.then(onDone);



// function fun(){
//     let p = new Promise(function(resolve){
//         setTimeout(() => {
//             resolve("Hii! there");
//         },1000)
//     });
//     return p;
// }

// async function main(){
//     let value = await fun();
//     console.log(value);
// }

// main();



// function createOrder(cb){
//     console.log("Order Creation");
//     cb();
// }

// function payOrder(cb){
//     console.log("Payement Done");
//     cb();
// }

// function createOrderSummary(){
//     console.log("Order summary created");
// }

// createOrder(() => payOrder(() => createOrderSummary()));
// createOrder(() => payOrder(createOrderSummary));


//Bad side of callback

/*
 1. Callback Hell
 2. Inversion of control
*/

//NOTE - Callback Hell

/*
1. User Login
2. Add items in cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

function login(cb) {
  console.log("User Logged in"); 
  cb();
}

function addItemToCart(cb) {
  console.log("Added items to cart");
  cb();
}

function createOrder(cb) {
  console.log("order creation");
  cb();
}

function payOrder(cb) {
  console.log("Payment Done..");
  cb();
}

function createOrderSummary(cb) {
  console.log("Created Order Summary");
  cb();
}

function updateWallet() {
  console.log("Update wallet");
}


// login(() => addItemToCart(() => createOrder(() => payOrder(() => createOrderSummary(() => updateWallet())))));

login(() => addItemToCart(() => createOrder(() => payOrder(() => createOrderSummary(updateWallet)))));

