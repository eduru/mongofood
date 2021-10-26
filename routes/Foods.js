const express = require("express");
const router = express.Router();
const Food = require("../models/Foods");

//All routes for characters

router.get("/", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

router.post("/new", async (req, res) => {
  const newFood = new Food(req.body);
  const savedFood = await newFood.save();
  res.json(savedFood);
});

router.get("/get/:id", async (req, res) => {
  const f = await Food.findById({ _id: req.params.id });
  res.json(f);
});

router.delete("/delete/:id", async (req, res) => {
  const result = await Food.findByIdAndDelete({ _id: req.params.id });
  res.send("delete");
});

router.patch("/update/:id", async (req, res) => {
  const f = await Food.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(f);
});

module.exports = router;
