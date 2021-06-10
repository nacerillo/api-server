"use strict";

const express = require("express");
const app = express();

const logger = require("./middleware/logger.js");
const foodRoutes = require("./routes/food.js");
const notFound = require("./error-handlers/404.js");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/category.js");
app.use(express.json());
app.use(logger);
app.use(foodRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use("*", notFound);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server up: ${port}`));
  },
};
