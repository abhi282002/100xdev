const express = require("express");
const fs = require("fs");
const app = express();

app.get("/file/:fileName", function (req, res) {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, "utf-8", function (errr, data) {
    res.json({ msg: data });
  });
});

app.listen(3000);
