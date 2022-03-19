const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    Title: { type: "string", required: true },
    Tag: { type: "string", required: true },
    Offer: { type: "string", required: true },
    Image: { type: "string", required: true },
    Coupon: { type: "boolean", required: true },
    Description: { type: "string", required: true },
    Code: { type: "string", required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", ProductSchema);
