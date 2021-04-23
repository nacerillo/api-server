"use strict";

const express = require("express");
const FoodSchema = require("../models/food");
const DataCollection = require("../models/data-collection-class");
const dataCollection = new DataCollection(FoodSchema);

const router = express.Router();

// RESTful routes
// http://localhost:3000/food

router.get("/food", getFood);
router.get("/food/:id", getOneFood);
router.post("/food", createFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);

// RESTful route handlers

function getFood(req, res) {
  let getAllThings = dataCollection.read();
  res.status(200).json(getAllThings);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = dataCollection.read(id);
  res.status(200).json(theFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = dataCollection.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  // placeholder for now
  let newFoodItem = req.body;
  const id = parseInt(req.params.id);
  let updatedFood = dataCollection.update(id, newFoodItem);
  res.status(200).json(updatedFood);
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let foodDeleted = dataCollection.delete(id);
  console.log("deleted", foodDeleted);
  res.status(200).json(foodDeleted);
  // placeholder for now
}

module.exports = router;
