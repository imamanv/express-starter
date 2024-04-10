const express = require("express");
const path = require("path");

const app = express();

// app.use method is to use middleware, express.static is one kind of middleware

// static assets means files that server doesn't need to change. so we simply place these files/assets at one place

// one example where some html file would not be considered static is, when different user visits out site and we have to show those user names to page, in that case out html file will be dynamic, that is it will change depending on the user.
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // unlike in nodejs where if we want to send content of a file, we first had to read that file in some variable and send that cotent in variable using res.write/res.end......but here sendFile method in express just takes the absolute path to that file, taking away the pain of reading the file, and send the content of the file.
  res.sendFile(path.resolve(__dirname, "./navbar-app", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
