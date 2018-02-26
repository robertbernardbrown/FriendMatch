const mysql      = require("mysql");
const connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "friendMatch_db",
  port: 8889
});
const friendArr = require("../data/friends");

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json();
  });
  
  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    friendArr.push(newFriend);
    console.log(friendArr);
    res.json(newFriend);
  });
};