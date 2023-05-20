const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3002;
const productRoutes = require("./src/routes/products");
app.use("/", productRoutes);
app.listen(port);
app.use(bodyParser.json()); //type json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
