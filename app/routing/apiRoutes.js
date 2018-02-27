const mysql      = require("mysql");
const connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "friendMatch_db",
  port: 8889
});
// const friendArr = require("../data/friends").friendArr;
// const existingFunc = require("../data/friends").existing;
// const existingArr = require("../data/friends").existingFriends;
// existingFunc(existingArr);

function displayFriendData (callback) {
  let friendArr=[];
  connection.query("SELECT * FROM friend JOIN friend_responses ON friend_responses.friend_id = friend.friend_id", (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      var element = res[i];
      friendArr.push(element);
    }
    callback(friendArr);
  });
}

function displayMatchFriendData (callback, index) {
  let friendArr=[];
  connection.query("SELECT * FROM friend JOIN friend_responses ON friend_responses.friend_id = friend.friend_id WHERE friend.friend_id = ?",[index], (err, res) => {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      var element = res[i];
      friendArr.push(element);
    }
    callback(friendArr);
  });
}

function addFriendToDb (friendName, friendPic) {
  connection.query("INSERT INTO friend SET friend_name=?, friend_pic=?",
    [friendName, friendPic]);
}

function addFriendValuesToDb (answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
  connection.query("INSERT INTO friend_responses SET question_01=?, question_02=?, question_03=?, question_04=?, question_05=?, question_06=?, question_07=?, question_08=?, question_09=?, question_10=?",
    [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10]);
}

function fetchFriendResponses(callback) {
  connection.query("SELECT * FROM friend_responses", (err, res) => {
    if (err) throw err;
    callback(res);
  });
}

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    displayFriendData(setData);
    function setData (arr) {
      res.json(arr);
    }
  });
  
  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    connection.connect(()=> {
      addFriendToDb(newFriend.friend_name, newFriend.friend_pic);
      addFriendValuesToDb(newFriend.question_01,  newFriend.question_02, newFriend.question_03,  newFriend.question_04, newFriend.question_05, newFriend.question_06, newFriend.question_07, newFriend.question_08, newFriend.question_09, newFriend.question_10);
    });
    res.json(newFriend);
    let newFriendVals = [0, newFriend.question_01,  newFriend.question_02, newFriend.question_03,  newFriend.question_04, newFriend.question_05, newFriend.question_06, newFriend.question_07, newFriend.question_08, newFriend.question_09, newFriend.question_10];
    fetchFriendResponses(friendMatcher);
    function friendMatcher (arr) {
      let index = 0;
      let compareVal = 100;
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let friendVals = Object.values(element);
        let diffArr = [];
        let difference;
        for (var j = 1; j <= friendVals.length - 1; j++) {
          let diff = Math.abs(friendVals[j] - newFriendVals[j]);
          diffArr.push(diff);
          if (j === friendVals.length - 1) {
            difference = diffArr.reduce((accumulate, currVal) => {
              return accumulate + currVal;
            });
            if (difference <= compareVal) {
              compareVal = difference;
              index = friendVals[0];
            }
          }
        }
      }
      displayMatchFriendData(showData, index);
      function showData (arr) {
        console.log(arr);
      }
    }
  });
};