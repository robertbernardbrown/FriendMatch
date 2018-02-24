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
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});