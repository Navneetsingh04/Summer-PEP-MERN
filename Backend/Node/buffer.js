const buffer = Buffer.from("Navneet");
console.log("buffer: ",buffer)

const buff = Buffer.alloc(20);
console.log("buffer: ", buff)

buff.write("Hello JavaScript");

console.log(buff.toString())