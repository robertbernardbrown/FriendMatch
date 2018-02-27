const friendDBActions = require("../data/friends");

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    friendDBActions.connect;
    friendDBActions.displayFriendData(setData);
    function setData (arr) {
      res.json(arr);
    }
  });
  
  app.post("/api/friends", (req, res) => {
    friendDBActions.connect;
    let newFriend = req.body;
    res.json(newFriend);
    let newFriendVals = [0, newFriend.question_01,  newFriend.question_02, newFriend.question_03,  newFriend.question_04, newFriend.question_05, newFriend.question_06, newFriend.question_07, newFriend.question_08, newFriend.question_09, newFriend.question_10];
    friendDBActions.fetchFriendResponses(friendMatcher);
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
      friendDBActions.displayMatchFriendData(showData, index);
      function showData (arr) {
        console.log(arr);
      }
      friendDBActions.addToDB(newFriend.friend_name, newFriend.friend_pic, newFriend.question_01,  newFriend.question_02, newFriend.question_03,  newFriend.question_04, newFriend.question_05, newFriend.question_06, newFriend.question_07, newFriend.question_08, newFriend.question_09, newFriend.question_10);
    }
  });
};