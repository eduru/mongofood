const express = require("express");
const mongoose = require("mongoose");
const CharactersRoute = require("./routes/Characters");
const FoodsRoute = require("./routes/Foods");

mongoose.connect("mongodb://localhost:27017/charactersTirar");

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to database ...");
});

const app = express();

app.use(express.json());
app.use("/characters", CharactersRoute);
app.use("/foods", FoodsRoute);

app.listen(4000, () => console.log("connected!"));
