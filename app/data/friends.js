const mysql      = require("mysql");
const connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "palMatch_db",
  port: 8889
});

module.exports = {

  connect: connection.connect(),

  displayPalData: function displayPalData (callback) {
    let palArr=[];
    connection.query("SELECT * FROM pal JOIN pal_responses ON pal_responses.pal_id = pal.pal_id", (err, res) => {
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
    connection.query("SELECT * FROM pal_responses", (err, res) => {
      if (err) throw err;
      callback(res);
    });
  },

  addToDB: function addToDb(palName, palPic, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
    connection.query("INSERT INTO pal SET pal_name=?, pal_pic=?",
      [palName, palPic]);
    connection.query("INSERT INTO pal_responses SET question_01=?, question_02=?, question_03=?, question_04=?, question_05=?, question_06=?, question_07=?, question_08=?, question_09=?, question_10=?",
      [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10]);
  }
};