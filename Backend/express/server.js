const express = require("express");
const fs = require('fs');
const axios = require("axios");
const path = require("path");
const adminMiddleware = require("./middleware/adminMiddlewar");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))


app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `\n${Date.now()}: ${req.url} : ${req.method}`,
    (err) => {
      if (err) {
        console.log("Error writing to log file:", err);
      }
    }
  );
  next(); // Don't forget to call next()
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "/index.html"));
});

app.get("/admin", adminMiddleware, (req, res) => {
  res.status(200).send("<h1>Admin page</h1>")
});

app.post("/submit", (req, res) => {
  console.log("Body: ", req.body);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.WEATHER_API_KEY}`
    )
   .then((response) => {
      const weather = {
        cityName: response.data.name,
        type: response.data.weather[0].main,
        description: response.data.weather[0].description,
        temprature: response.data.main.temp,
        visibility: response.data.visibility,
        speed: response.data.wind.speed
      };
      const data = fs.readFileSync(path.join(__dirname, "/public", "/weather.html"), {
        encoding: "utf-8"
      });
      let html = data
        .replace("{{{cityName}}}", weather.cityName)
        .replace("{{{type}}}", weather.type)
        .replace("{{{description}}}", weather.description)
        .replace("{{{temprature}}}", weather.temprature)
        .replace("{{{visibility}}}", weather.visibility)
        .replace("{{{speed}}}", weather.speed);
      res.status(200).send(html);
    })
    .catch((error) => res.status(400).send(`Error: ${error.message}`));
});

app.listen(4001, () => {
    console.log("Server is running on port 4001");
});