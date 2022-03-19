const express = require("express");

const Product = require("../models/Product.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({ product });
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    // const page = req.query.page || 1;
    // const size = req.query.size || 8;
    // const offset = (page - 1) * size;
    const product = await Product.find().lean().exec();

    const totalSize = await Product.countDocuments();

    res.status(200).json({ product, totalSize });
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message });
  }
});

module.exports = router;
