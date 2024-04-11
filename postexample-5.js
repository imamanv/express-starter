const express = require("express");
const { people } = require("./data");

const app = express();

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); // this middleware is used to get the data in req body by post method when sent from html form
app.use(express.json()); //this middlware is used to get the data sent as req body by post method using javascript

app.post("/api/people", (req, res) => {
  if (req.body.name) {
    return res.status(200).json({ success: true, person: req.body.name });
  }
  res.status(401).json({ success: false, msg: "Please enter a name first" });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    return res.send(`Welcome ${req.body.name}`);
  }
  res.send("Please enter a name first");
});

app.listen(3000);
