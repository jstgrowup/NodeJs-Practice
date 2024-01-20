const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = "new request appended";
  fs.appendFile("./log.txt", log, (err, data) => {
    console.log('data:', data)
    res.end("hello from server ");
  });
});

myServer.listen(8000, () => {
  console.log("server satrted");
});
