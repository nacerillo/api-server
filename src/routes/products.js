"use strict";

const express = require("express");
const ProductSchema = require("../models/product");
const DataCollection = require("../models/data-collection-class");
const dataCollection = new DataCollection(ProductSchema);

const router = express.Router();

// RESTful routes
// http://localhost:3000/Product

router.get("/product", getProduct);
router.get("/product/:id", getOneProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/prodcut/:id", deleteProduct);

// RESTful route handlers

async function getProduct(req, res) {
  let getAllThings = dataCollection.read();
  res.status(200).json(getAllThings);
}

async function getOneProduct(req, res) {
  const id = parseInt(req.params.id);
  let theProduct = dataCollection.read(id);
  res.status(200).json(theProduct);
}

async function createProduct(req, res) {
  let content = req.body;
  let createdProduct = dataCollection.create(content);
  res.status(201).json(createdProduct);
}

async function updateProduct(req, res) {
  // placeholder for now
  let newProductItem = req.body;
  const id = parseInt(req.params.id);
  let updatedProduct = dataCollection.update(id, newProductItem);
  res.status(200).json(updatedProduct);
}

async function deleteProduct(req, res) {
  const id = parseInt(req.params.id);
  let ProductDeleted = dataCollection.delete(id);
  console.log("deleted", ProductDeleted);
  res.status(200).json(ProductDeleted);
  // placeholder for now
}

module.exports = router;
