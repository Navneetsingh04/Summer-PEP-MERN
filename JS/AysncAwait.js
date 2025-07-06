// async function showAvatar(){
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();

//     let githubResponse = await fetch(`https://api.github.com/users/navneetsingh1825`);
//     let githubUser = await githubResponse.json();

//     let img = document.createElement('img');
//     img.src = githubUser.avtar_url;
//     img.className = 'Promise-avatar-exmaple';
//     document.body.append(img);

//     await new Promise((resolve,reject) => setTimeout(resolve,3000));
//     img.remove();
//     return githubUser;
// }

// showAvatar();


//NOTE - Promises

//Defination
// Promise is an object which stores eventual completion or failure
//  of an asynchronous code

// function createOrder() {
//   console.log("Order created successfully!");
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     createOrder();
//     resolve();
//   }, 2000);
// });

// console.log(promise);

//LINK - Callback hell via promise

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

//NOTE - Promises

//Defination
// Promise is an object which stores eventual completion or failure
//  of an asynchronous code

// function createOrder() {
//   console.log("Order created successfully!");
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     createOrder();
//     resolve();
//   }, 2000);
// });

// console.log(promise);

//LINK - Callback hell via promise

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

// const login = () =>
//   new Promise((res, rej) => {
//     console.log("User Logged in");
//     res({ name: "sriram" });
//   });

// const addItemToCart = () =>
//   new Promise((res, rej) => {
//     console.log("Added items to cart");
//     res();
//   });

// const createOrder = () =>
//   new Promise((res, rej) => {
//     console.log("Order creation");
//     res();
//   });

// const payOrder = () =>
//   new Promise((res, rej) => {
//     console.log("Payment Done..");
//     res();
//   });
// const createOrderSummary = () =>
//   new Promise((res, rej) => {
//     console.log("Created Order Summary");
//     res();
//   });

// function updateWallet() {
//   console.log("Update wallet");
// }

// login()
//   .then((data) => {
//     console.log(data);
//     addItemToCart()
//       .then(() => {
//         createOrder()
//           .then(() => {
//             payOrder()
//               .then(() => {
//                 createOrderSummary()
//                   .then(() => {
//                     updateWallet();
//                   })
//                   .catch(() => console.error("Order summary failed!"));
//               })
//               .catch(() => console.error("Payment failed!"));
//           })
//           .catch(() => console.error("Create order failed!"));
//       })
//       .catch(() => console.error("Cart Items add failed!"));
//   })
//   .catch(() => console.error("user Login failed!"));

//NOTE - Promise.all

// async function userBehaviour() {
//   const login = new Promise((res, rej) => {
//     console.log("Login success");
//     res({ name: "Munit" });
//   });
//   const addItemToCart = new Promise((res, rej) => {
//     console.log("Item Added to Cart");
//     res("failed added item ");
//   });
//   const createOrder = new Promise((res, rej) => {
//     console.log("Order create successfully!");
//     res();
//   });
//   Promise.all([login, addItemToCart, createOrder])
//     .then((data) => {
//       console.log("promise run successfully!", data);
//     })
//     .catch((err) => console.log("failed!", err));
// }

//NOTE - Async Await

/*
1. User Login
2. Add items to cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

const login = () =>
  new Promise((res, rej) => {
    console.log("User Logged in");
    res({ name: "sriram" });
  });

const addItemToCart = () =>
  new Promise((res, rej) => {
    console.log("Added items to cart");
    rej("Failed to add item in cart!");
  });

const createOrder = () =>
  new Promise((res, rej) => {
    console.log("Order creation");
    res();
  });

const payOrder = () =>
  new Promise((res, rej) => {
    console.log("Payment Done..");
    res();
  });
const createOrderSummary = () =>
  new Promise((res, rej) => {
    console.log("Created Order Summary");
    res();
  });

function updateWallet() {
  console.log("Update wallet");
}

async function userBehaviour() {
  try {
    await login();
    await addItemToCart();
    await createOrder();
    await payOrder();
    await createOrderSummary();
    updateWallet();
  } catch (error) {
    console.log(error);
  }
}

userBehaviour();