// console.log(a);
// function get(){
//     var a = 10;
// }

// console.log(b);
// let b = 20;

// closure

let b = "pritesh";
function outer(){
    let a = "Navneet";
    function inner(){
        console.log(a);
        console.log(b);
    }
    inner();
    let c = "LPU";
    console.log(c);
}
outer();
