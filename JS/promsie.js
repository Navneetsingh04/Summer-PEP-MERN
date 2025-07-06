// promise is a placeHolder which shows eventual completion or failure of an asynchronous code

// const { rejects } = require("assert");

// let pizzaOrder = new Promise((resolve, reject) => {
//   let pizzaReady = true;

//   setTimeout(() => {
//     if (pizzaReady) {
//       resolve("Pizza is delivered");
//     } 
//     else {
//       reject("Pizza delivery failed");
//     }
//   }, 3000);
// });

// pizzaOrder
//   .then(message => console.log("Success:", message))
//   .catch(error => console.log("Error:", error))
//   .finally(() => console.log("Order process completed"));




//NOTE - Promises

//Defination
// Promise is an object which stores eventual completion or failure
//  of an asynchronous code


const login = new Promise((res, rej) => {
  console.log("User Logged in");
  res();
});

const addItemToCart = new Promise((res, rej) => {
  console.log("Added items to cart");
  res();
});

const createOrder = new Promise((res, rej) => {
  console.log("Order creation");
  res();
});

const payOrder = new Promise((res, rej) => {
  console.log("Payment Done..");
  rej();
});

const createOrderSummary = new Promise((res, rej) => {
  console.log("Created Order Summary");
  res();
});

function updateWallet() {
  console.log("Update wallet");
}

login.then(() => {
  addItemToCart.then(() => {
    createOrder.then(() => {
      payOrder.then(() => {
        createOrderSummary.then(() => {
          updateWallet();
        }).catch(() => console.error("Order summary failed"));
      }).catch(() => console.error("Pay order failed"));
    }).catch(() => console.error("Create order failed"));
  }).catch(() => console.error("add iteam to cart failed"));
}).catch(() => console.error("User Login failed"));
