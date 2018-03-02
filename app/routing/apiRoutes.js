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
    let newFriendVals = 
    [0, 
      newFriend.q1,  
      newFriend.q2, 
      newFriend.q3,  
      newFriend.q4, 
      newFriend.q5, 
      newFriend.q6, 
      newFriend.q7, 
      newFriend.q8, 
      newFriend.q9, 
      newFriend.q10];
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
        res.json(arr);
      }
      friendDBActions.addToDB(
        newFriend.friend_name, 
        newFriend.friend_pic, 
        newFriend.q1,  
        newFriend.q2, 
        newFriend.q3,  
        newFriend.q4, 
        newFriend.q5, 
        newFriend.q6, 
        newFriend.q7, 
        newFriend.q8, 
        newFriend.q9, 
        newFriend.q10);
    }
  });
};