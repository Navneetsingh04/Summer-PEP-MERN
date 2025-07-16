const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("Server is available");
  console.log(req.url);
  // const htmlData = fs.readFileSync("index.html",{
  //     encoding : "utf-8"
  // })
  // const about = fs.readFileSync("about.html",{
  //     encoding : "utf-8"
  // })
  // const contact = fs.readFileSync("contact.html",{
  //     encoding : "utf-8"
  // })
  // const home = fs.readFileSync("home.html",{
  //     encoding : "utf-8"
  // })

  // if(req.url === "/"){
  //     res.writeHead(200,{"Content-Type" : "text/html"})
  //     res.end(htmlData)
  // }
  // if(req.url === "/about"){
  //     res.writeHead(200,{"Content-Type" : "text/html"})
  //     res.end(about)
  // }
  // else if(req.url === "/contact"){
  //     res.writeHead(200,{"Content-Type" : "text/html"})
  //     res.end(contact)
  // }
  // else if(req.url === "/home"){
  //     res.writeHead(200,{"Content-Type" : "text/html"})
  //     res.end(home)
  // }
  // else{
  //     res.writeHead(404,{"Content-Type" : "text/html"})
  //     res.end("<h1>404 Not Found</h1>")
  // }

  const student = {
    name: "Pritesh",
    sir: "Master",
  };

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        fs.readFileSync("index.html", {
          encoding: "utf-8",
        })
      );
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        fs.readFileSync("about.html", {
          encoding: "utf-8",
        })
      );
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        fs.readFileSync("contact.html", {
          encoding: "utf-8",
        })
      );
      break;
    case "/home":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        fs.readFileSync("home.html", {
          encoding: "utf-8",
        })
      );
      break;

    default:
    //   res.writeHead(404, { "Content-Type": "text/html" });
    //   res.end("<h1>404 Page Not Find<h1/>");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify(student));
      break;
  }
});

server.listen(3001, () => {
  console.log("Server is running on port no 3001");
});
