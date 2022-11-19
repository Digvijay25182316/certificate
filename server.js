const app = require("./app");
const express = require("express");

app.use("/public", express.static(`${__dirname}/assets`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/html-file/error.html`);
});
