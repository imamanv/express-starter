const express = require("express");
const peopleRoutes = require("./routes/people");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); // this middleware is used to get the data in req body by post method when sent from html form
app.use(express.json()); //this middlware is used to get the data sent as req body by post method using javascript
app.use("/api/people", peopleRoutes);
app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    return res.send(`Welcome ${req.body.name}`);
  }
  res.send("Please enter a name first");
});

app.listen(3000);
