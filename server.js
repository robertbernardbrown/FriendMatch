const express    = require("express");
const bodyParser = require("body-parser");
const path       = require("path");
// const mysql      = require("mysql");
// const connection = mysql.createConnection({
//   host     : "localhost",
//   user     : "root",
//   password : "root",
//   database : "bamazon_db",
//   port: 8889
// });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});