const express    = require("express");
const bodyParser = require("body-parser");
// const apiRoutes  = require("./app/routing/apiRoutes");

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

//LOAD MIDDLEWARE (BODYPARSER)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});