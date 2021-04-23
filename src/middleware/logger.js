"use strict";

const logger = (req, res, next) => {
  console.log("METHOD - PATH:", req.method, req.path);
  next();
};

module.exports = logger;
