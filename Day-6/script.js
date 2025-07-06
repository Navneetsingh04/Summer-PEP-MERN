// Arrow function and tarditonal function argument

// let greetLPU = (...argument) => {
//     console.log("hello LPU",argument)
//     console.log(argument[0]);
// }

// function greetStudent(){
//     console.log("Hello Student",arguments)
// }
// greetStudent(1,2,3);
// greetLPU(15,2,3);


// let a = 10;
// let b = 12;
// console.log(a ?? b);


// // Arrow function and tarditonal this keyword
// const person = {
//     name: "pritesh",

//     sayhello : function(){
//         console.log("Hello "+this.name);
//     }
// };

// person.sayhello()


// const person1 = {
//     name: "pritesh",

//     sayhello : () => {
//         console.log("Hii "+this.name);
//     }
// };

// person1.sayhello();

// // first class function is a function that can be passed as an argument to another function, returned from another function, or assigned to a variable.

// function add(a,b){
//     return a + b;
// }

// function print(add){
//     console.log("The sum is: " + add(5, 112));
// }

// print(add);


// Synchronous programming is when the code is executed in a sequential manner, meaning that each line of code is executed one after the other. In contrast, asynchronous programming allows certain operations to be executed independently of the main program flow, enabling tasks to run concurrently without blocking the execution of other code.

// console.log("hello");



// function greet(){
//     console.log("Hello Student");
// }
// greet();

// setTimeout(() => {
//     console.log("This is a setTimeout function");
// }, 1000);
// console.log("LPU");


// for(var i = 1;i <= 5;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);
// }


function square(a){
    return a * a;
}

function sumOfSomething(a,b,callback){
    const val = callback(a);
    const val2 = callback(b);
    return val+val2;
}

console.log(sumOfSomething(2,3,square)); 