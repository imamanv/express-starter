const express = require("express");

const app = express();
const { products } = require("./data");
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
  const product = products.find((product) => {
    // req.params returns all the route parameters we mention using :
    return product.id === +req.params.productId;
  });
  if (!product) {
    res.status(404).send("<h1>Product doesn't exist</h1>");
  } else {
    res.json(product);
  }
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let productsCopy = [...products];
  if (search) {
    productsCopy = productsCopy.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    productsCopy = productsCopy.slice(0, +limit);
  }
  if (productsCopy.length < 1) {
    return res.status(200).send({ success: true, data: productsCopy });
  }
  res.json(productsCopy);
});

app.listen(3000, () => {
  console.log("Server is listening on Port 3000");
});
