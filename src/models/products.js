/*name: prod.name,
category: prod.category,
description: prod.description,
price: prod.price,
inventory: prod.inventory ,*/

"use strict";

const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ["books", "electronics"] },
  description: { type: String },
  img: { type: String, required: true },
  price: { type: Number },
  inventory: { type: Number },
});

const productsModel = mongoose.model("product", productsSchema);

module.exports = productsModel;
