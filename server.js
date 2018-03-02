const express    = require("express");
const bodyParser = require("body-parser");
var path         = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

//LOAD MIDDLEWARE (BODYPARSER)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});