const express = require("express");
const article = require("./public/articleData.json")
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  app.options("*", (req, res) => {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});

app.get("/", (req, res) => {
  res.send('HelloWorld');
});

app.get("/api/:id", (req, res) => {
  res.send(article[req.params.id])
});

app.listen(4999, () => {
  console.log("listening port 4999");
});
