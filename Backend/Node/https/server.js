const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Server is available")
    res.writeHead(200)
    res.end("Hello Pritesh Master")
})

server.listen(3001, () => {
    console.log("Server is running on port no 3000")
})