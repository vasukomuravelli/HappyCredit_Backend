const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const productController = require("./controllers/products.controller");

app.use("/products", productController);

module.exports = app;
