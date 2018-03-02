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
    console.log(newFriend);
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

      let objectToArray = object => {
        let transformedArray = Object.values(object);
        return transformedArray;
      };

      let arrayDifferences = arr => {
        let diffArr=[];
        for (var i = 0; i < newFriendVals.length; i++) {
          var element = newFriendVals[i];
          let thing = Math.abs(element - arr[i]);
          diffArr.push(thing);
        }
        return diffArr;
      };

      let arrTotals = (adder, currVal, index) => {
        if (index < 0) {
          return 0;
        } else {
          return adder + currVal;
        }
      };

      

      let dbFriendVals = arr.map(objectToArray).map(arrayDifferences);
      //.map(arrayDifferences)
      //.reduce(arrTotals);
      // console.log(dbFriendVals);
      // console.log(dbFriendVals);
      // let index = 0;
      // let compareVal = 100;
      // for (let i = 0; i < arr.length; i++) {
      //   let element = arr[i];
      //   let friendVals = Object.values(element);
      //   let diffArr = [];
      //   let difference;
      //   for (var j = 1; j <= friendVals.length - 1; j++) {
      //     let diff = Math.abs(friendVals[j] - newFriendVals[j]);
      //     diffArr.push(diff);
      //     if (j === friendVals.length - 1) {
      //       difference = diffArr.reduce((accumulate, currVal) => {
      //         return accumulate + currVal;
      //       });
      //       if (difference <= compareVal) {
      //         compareVal = difference;
      //         index = friendVals[0];
      //       }
      //     }
      //   }
      // }
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