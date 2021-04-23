"use strict";

const mongoose = require("mongoose");

const clothesSchema = mongoose.Schema({
  name: { type: String, required: true }, // required property for an item
  size: { type: String, uppercase: true, enum: ["SMALL", "MED", "LARGE"] },
  type: { type: String, uppercase: true, enum: ["M", "W"] },
});

const clothesModel = mongoose.model("clothes", clothesSchema);

module.exports = clothesModel;
