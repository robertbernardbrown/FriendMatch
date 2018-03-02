const palDBActions = require("../data/friends");

module.exports = (app) => {

  app.get("/api/pals", (req, res) => {
    palDBActions.connect;
    palDBActions.displayPalData(setData);
    function setData (arr) {
      res.json(arr);
    }
  });
  
  app.post("/api/pals", (req, res) => {
    palDBActions.connect;
    let newPal = req.body;
    let newPalVals = 
    [0, 
      newPal.q1,  
      newPal.q2, 
      newPal.q3,  
      newPal.q4, 
      newPal.q5, 
      newPal.q6, 
      newPal.q7, 
      newPal.q8, 
      newPal.q9, 
      newPal.q10];
    palDBActions.fetchPalResponses(PalMatcher);
    function PalMatcher (arr) {
      let index = 0;
      let compareVal = 100;
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let palVals = Object.values(element);
        let diffArr = [];
        let difference;
        for (var j = 1; j <= palVals.length - 1; j++) {
          let diff = Math.abs(palVals[j] - newPalVals[j]);
          diffArr.push(diff);
          if (j === palVals.length - 1) {
            difference = diffArr.reduce((accumulate, currVal) => {
              return accumulate + currVal;
            });
            if (difference <= compareVal) {
              compareVal = difference;
              index = palVals[0];
            }
          }
        }
      }
      palDBActions.displayMatchPalData(showData, index);
      function showData (arr) {
        res.json(arr);
      }
      palDBActions.addToDB(
        newPal.pal_name, 
        newPal.pal_pic, 
        newPal.q1,  
        newPal.q2, 
        newPal.q3,  
        newPal.q4, 
        newPal.q5, 
        newPal.q6, 
        newPal.q7, 
        newPal.q8, 
        newPal.q9, 
        newPal.q10);
    }
  });
};