"use strict";

const express = require("express");
const categorySchema = require("../models/category");
const DataCollection = require("../models/data-collection-class");
const dataCollection = new DataCollection(categorySchema);

const router = express.Router();

// RESTful routes
// http://localhost:3000/category

router.get("/category", getCategory);
router.get("/category/:id", getOneCategory);
router.post("/category", createCategory);
router.put("/category/:id", updateCategory);
router.delete("/prodcut/:id", deleteCategory);

// RESTful route handlers

async function getCategory(req, res) {
  let getAllThings = dataCollection.read();
  res.status(200).json(getAllThings);
}

async function getOneCategory(req, res) {
  const id = parseInt(req.params.id);
  let thecategory = dataCollection.read(id);
  res.status(200).json(thecategory);
}

async function createCategory(req, res) {
  let content = req.body;
  let createdcategory = dataCollection.create(content);
  res.status(201).json(createdcategory);
}

async function updateCategory(req, res) {
  // placeholder for now
  let newcategoryItem = req.body;
  const id = parseInt(req.params.id);
  let updatedcategory = dataCollection.update(id, newcategoryItem);
  res.status(200).json(updatedcategory);
}

async function deleteCategory(req, res) {
  const id = parseInt(req.params.id);
  let categoryDeleted = dataCollection.delete(id);
  console.log("deleted", categoryDeleted);
  res.status(200).json(categoryDeleted);
  // placeholder for now
}

module.exports = router;
