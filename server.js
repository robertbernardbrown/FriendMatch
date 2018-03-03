const express    = require("express");
const bodyParser = require("body-parser");
const path       = require("path");

const app = express();
var port = process.env.PORT || 3000;

//LOAD MIDDLEWARE (BODYPARSER)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
  console.log("App is running on port " + port);
});