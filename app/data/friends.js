const mysql      = require("mysql");
const connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "friendMatch_db",
  port: 8889
});

let friendArr = [];
let existingFriends = [];

module.exports = {
  friendArr: friendArr,
  existingFriends: existingFriends,
  existing: function(arr) {
    connection.connect(function () {
      fillExisting(arr);
    });
      
    function fillExisting (arr) {
      connection.query("SELECT * FROM friend JOIN friend_responses ON friend_responses.friend_id = friend.friend_id", function (error, results) {
        for (var i = 0; i < results.length; i++) {
          var element = results[i];
          arr.push(element);
        }
        console.log(arr);
      });
    }
  }
};