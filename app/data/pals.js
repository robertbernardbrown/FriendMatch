const mysql      = require("mysql");
const connection = mysql.createPool({
  host     : "us-cdbr-iron-east-05.cleardb.net",
  user     : "bfb9298fa194ff",
  password : "9be68183",
  database : "heroku_7840f80c2d5aeb2",
  port: 3306
});


module.exports = {

  connect: connection.getConnection(err=> {
    if (err) throw err;
  }),

  displayPalData: function displayPalData (callback) {
    connection.getConnection(err=> {
      if (err) throw err;
      let palArr=[];
      connection.query("SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id", (err, res) => {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          var element = res[i];
          palArr.push(element);
        }
        callback(palArr);
        connection.releaseConnection();
      });
    });
  },

  displayMatchPalData: function displayMatchPalData (callback, index) {
    let palArr=[];
    connection.query("SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id WHERE pal.pal_id = ?",[index], (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        var element = res[i];
        palArr.push(element);
      }
      callback(palArr);
    });
  },

  fetchPalResponses: function fetchPalResponses(callback) {
    connection.getConnection(err=> {
      if (err) throw err;
      connection.query("SELECT * FROM pal_responses", (err, res) => {
        if (err) throw err;
        callback(res);
      });
    });
  },

  addToDB: function addToDb(palName, palPic, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
    connection.query("INSERT INTO pal SET pal_name=?, pal_pic=?",
      [palName, palPic], err => {
        if (err) throw err;
      });
    connection.query("INSERT INTO pal_responses SET question_01=?, question_02=?, question_03=?, question_04=?, question_05=?, question_06=?, question_07=?, question_08=?, question_09=?, question_10=?",
      [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10], err => {
        if (err) throw err;
      });
    connection.releaseConnection();
  }
};