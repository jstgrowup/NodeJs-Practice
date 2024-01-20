const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});
app.get("/about", (req, res) => {
  return res.send("hello from about");
});
const myServer = http.createServer((req, res) => {
  const log = "new request appended";
  fs.appendFile("./log.txt", log, (err, data) => {
    console.log("data:", data);
    res.end("hello from server ");
  });
});

app.listen(8000, () => {
  console.log("server satrted");
});
