// function final(someInput, callback) {
//   callback(`${someInput} and terminated by executing callback `);
// }

// function middleware(someInput, callback) {
//   return final(`${someInput} touched by middleware `, callback);
// }

// function initiate() {
//   const someInput = 'hello this is a function ';
//   middleware(someInput, function (result) {
//     console.log(result);
//     // requires callback to `return` result
//   });
// }

// initiate();

// import fs from 'fs';

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('file.txt', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });


import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);
