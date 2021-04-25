const mongoose = require("mongoose"); // pulls mongoose in
const Food = require("./src/models/food.js"); // pulls in our food schema (aka model, aka blueprint for our data)
const GenericCollection = require("./src/models/data-collection-class.js");
const food = new GenericCollection(Food);
const server = require("./src/server.js");
const dotenv = require("dotenv");
const MONGODB_URI = "mongodb://localhost:27017/food"; // setting up a connecting "string" for connecting us to MongoDB
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // don't read into this, just add them
// this connects us to the "food" database
mongoose.connect(MONGODB_URI, options);

const databaseInteractions = async () => {
  let pizza = {
    name: "pizza",
    calories: 1200,
    type: "VEG",
  };

  let apple = {
    name: "apple",
    calories: 30,
    type: "FRUIT",
  };

  let allFoods = await food.read();
  console.log(allFoods);
};
databaseInteractions();
const PORT = process.env.PORT || 3000;
dotenv.config();
server.start(PORT);
