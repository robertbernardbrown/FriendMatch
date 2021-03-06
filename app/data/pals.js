const mysql      = require("mysql");
const pool = mysql.createPool({
  host     : "us-cdbr-iron-east-05.cleardb.net",
  user     : "bfb9298fa194ff",
  password : "9be68183",
  database : "heroku_7840f80c2d5aeb2",
  port: 3306
});

//Exports DB query code in pre-made functions
module.exports = {

  displayPalData: function displayPalData (callback) {
    let palArr=[];
    pool.query("SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id", (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        var element = res[i];
        palArr.push(element);
      }
      callback(palArr);
    });
  },

  displayMatchPalData: function displayMatchPalData (callback, index) {
    let palArr=[];
    pool.query("SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id WHERE pal.pal_id = ?",[index], (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        var element = res[i];
        palArr.push(element);
      }
      callback(palArr);
    });
  },

  fetchPalResponses: function fetchPalResponses(callback) {
    pool.query("SELECT * FROM pal_responses", (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },

  addToDB: function addToDb(palName, palPic, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
    pool.getConnection(function (err, connection) {
      connection.query("INSERT INTO pal SET pal_name=?, pal_pic=?",
        [palName, palPic], err => {
          if (err) throw err;
        });
      connection.query("INSERT INTO pal_responses SET question_01=?, question_02=?, question_03=?, question_04=?, question_05=?, question_06=?, question_07=?, question_08=?, question_09=?, question_10=?",
        [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10], err => {
          if (err) throw err;
        });
      connection.release();
    });
  }
};