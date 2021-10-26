const mongoose = require("mongoose");
const Food = require("./models/Foods");

mongoose.connect("mongodb://localhost:27017/charactersTirar");

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to database ...");
});

const seedFoods = [
  {
    name: "Tomato",
  },
  {
    name: "Cucumber",
  },
];

Food.insertMany(seedFoods)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
