const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} : ${req.statusCode} New Req Recived\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      res.writeHead(500);
      return res.end("Internal Server Error");
    }

    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const userName = myUrl.query.myname;
        res.end(`Hi, ${userName}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your Results for " + search);
        break;
      default:
        res.end("404 page Not found");
    }
  });
});

myServer.listen(4000, () => {
  console.log("Server Started");
});