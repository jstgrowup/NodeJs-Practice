const fs = require("fs");
// synchronous call
fs.writeFileSync("./test.txt", "Hey hello there");
// async
fs.writeFile("./teste.txt", "hello world", (err) => console.log("err"));
// reading file in synchronous
const res = fs.readFileSync("./contacts.txt", "utf-8");
// console.log("res:", res);
// reading in asynchronous
fs.readFile("./contacts.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
// appendfile wont overwrite it basically appends the contents
fs.appendFileSync("./contacts.txt",`Hey there \n`)
