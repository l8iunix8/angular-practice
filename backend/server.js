const express = require("express");
const article = require("./public/articleData.json");
const comment = require("./public/comment.json");
const path = require("path");
const allFunction = require("./function/function.js");
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + "/dist/practice"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
  app.options("*", (req, res) => {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname));
});

app.get("/api/totalDataCount", (req, res) => {
  res.send(String(article.length));
});

app.get("/api/:id", (req, res) => {
  res.send(article[req.params.id]);
});

app.get("/api/comment/:id", (req, res) => {
  const array = [];
  const articleId = Number(req.params.id);
  comment.forEach((element) => {
    if (element["articleId"] === articleId) {
      array.push(element);
    }
  });
  res.send(array);
});

app.post("/api/comment", (req, res) => {
  
  //先將資料在進去再重新寫
  // comment.push({
  //   ...{id:comment.length+1},
  //   ...req.body}
  // )
  // allFunction.writeCommentJSON(comment);

  const sendComment = req.body;
  sendComment['id'] =  comment.length+1;
  allFunction.writeCommentJSON(req.body);
  res.send("true");
});

app.listen(4999, () => {
  console.log("listening port 4999");
});
