"use strict";

const express = require("express");
const app = express();

const logger = require("./middleware/logger.js");
const foodRoutes = require("./routes/food.js");

const notFound = require("./error-handlers/404.js");
app.use(express.json());
app.use(logger);
app.use(foodRoutes);

app.use("*", notFound);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server up: ${port}`));
  },
};
