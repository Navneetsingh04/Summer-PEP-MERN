exports.multiply = (a,b) => {
    return a * b;
}
exports.divide = (a,b) => {
    if(b == 0){
        console.error("Division by zero is not allowed.");
        return undefined;
    }
    return a / b;
}
