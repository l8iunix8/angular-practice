const express = require("express");
const path = require("path");
const allFunction = require("./function/function.js");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const { request } = require("http");

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
  fs.readFile(`./public/articleData.json`, function (err, data) {
    const fileData = JSON.parse(data.toString());
    res.send(String(fileData.length));
  });
});

app.get("/api/:id", (req, res) => {
  const id = Number(req.params.id);
  fs.readFile(`./public/articleData.json`, function (err, data) {
    const fileData = JSON.parse(data.toString());
    res.send(fileData[id]);
  });
});

app.get("/api/comment/:id", (req, res) => {
  const array = [];
  const articleId = Number(req.params.id);
  fs.readFile(`./public/comment.json`, function (err, data) {
    const fileData = JSON.parse(data.toString());
    fileData.forEach((element) => {
      if (element["articleId"] === articleId) {
        array.push(element);
      }
    });
    res.send(array);
  });
});

app.get("/api/commentResponse/:commentId", (req, res) => {
  let Object = {};
  const commentId = Number(req.params.commentId);
  fs.readFile(`./public/commentResponse.json`, function (err, data) {
    const fileData = JSON.parse(data.toString());
    fileData.forEach((element) => {
      if (element["commentId"] === commentId) {
        Object = element;
      }
    });
    res.send(Object);
  });
});

app.post("/api/comment", (req, res) => {
  //先將資料在進去再重新寫
  // const sendComment = req.body;
  // sendComment['id'] =  comment.length+1;
  // comment.push({
  //   ...{id:comment.length+1},
  //   ...req.body}
  // )
  // allFunction.writeCommentJSON(comment);

  allFunction.writeCommentJSON(req.body);
  res.send(req.body);
});

app.post("/api/getProfile", (req, res) => {
  const accessToken = req.body.accessToken;
  if (!accessToken) {
    res
      .status(400)
      .send({ error: "Request Error: Google access token is required." });
    return;
  }
  // Get profile from google
  allFunction
    .getGoogleProfile(accessToken)
    .then(function (profile) {
      console.log('profile',profile)
      if (!profile.name || !profile.email) {
        res.status(400).send({
          error: "Permissions Error: name, email are required.",
        });
        return;
      }      
      res.send({
        user: {
          name: profile.name,
          email: profile.email,
          picture: profile.picture,
        },
      });
    })
    .catch(function (error) {
      res.status(500).send({ error: error });
    });
});

app.listen(4999, () => {
  console.log("listening port 4999");
});
