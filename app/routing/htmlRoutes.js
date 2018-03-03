const path = require("path");

//exports html paths for static files to be sent to
module.exports = (app) => {

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};