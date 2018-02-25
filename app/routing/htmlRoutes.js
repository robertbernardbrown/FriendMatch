const routes = require("express").Router();
const path   = require("path");

routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

routes.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = routes;