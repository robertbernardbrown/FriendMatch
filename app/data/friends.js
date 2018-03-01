const mysql      = require("mysql");
const connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "friendMatch_db",
  port: 8889
});

module.exports = {

  connect: connection.connect(),

  displayFriendData: function displayFriendData (callback) {
    let friendArr=[];
    connection.query("SELECT * FROM friend JOIN friend_responses ON friend_responses.friend_id = friend.friend_id", (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        var element = res[i];
        friendArr.push(element);
      }
      callback(friendArr);
    });
  },

  displayMatchFriendData: function displayMatchFriendData (callback, index) {
    let friendArr=[];
    connection.query("SELECT * FROM friend JOIN friend_responses ON friend_responses.friend_id = friend.friend_id WHERE friend.friend_id = ?",[index], (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        var element = res[i];
        friendArr.push(element);
      }
      callback(friendArr);
    });
  },

  fetchFriendResponses: function fetchFriendResponses(callback) {
    connection.query("SELECT * FROM friend_responses", (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },

  addToDB: function addToDb(friendName, friendPic, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
    connection.query("INSERT INTO friend SET friend_name=?, friend_pic=?",
      [friendName, friendPic]);
    connection.query("INSERT INTO friend_responses SET question_01=?, question_02=?, question_03=?, question_04=?, question_05=?, question_06=?, question_07=?, question_08=?, question_09=?, question_10=?",
      [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10]);
  }
};