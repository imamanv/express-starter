const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on Port 3000");
});

// app.get -  read data
// app.post - insert data
// app.put - update data
// app.delete - delete data
// app.all
// app.listen
// app.use
