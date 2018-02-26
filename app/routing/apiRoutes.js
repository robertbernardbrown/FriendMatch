module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json();
  });
  
  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    res.json(newFriend);
  });
};