const express = require("express");

const app = express();

// middleware has access to req,res object as well as next method

// if we are not sending any response back from middleware then next method needs to be called to give back the control to http method like app.get, app.post and so on.

// there are two ways to use a middleware.
// 1. It can be given as 2nd parameter to http methods for app.get('/',middleware,cb)
// 2. It can be given as 2nd parameter to app.use() method, here 1st parameter is optional which is url, if url is given then that middleware will only be applied to req which are reaching on url starting from that 1st parameter
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(`Method is ${method}, Url is ${url}, Year is ${year}`);
  next();
};

app.use("/api", logger); // this will only apply logger middleware to requests reaching on url starting from api for ex api/items and api/products

app.get("/", (req, res) => {
  res.status(200).send("<h4>Home Page</h4>");
});
// app.get("/", logger, (req, res) => {
//     res.status(200).send("<h4>Home Page</h4>");
//   });
app.get("/about", (req, res) => {
  res.status(200).send("<h4>About Page</h4>");
});
app.get("/api/products", (req, res) => {
  res.status(200).send("<h4>Products page</h4>");
});
app.get("/api/items", (req, res) => {
  res.status(200).send("<h4>Items Page</h4>");
});

app.listen(3000, () => {});
