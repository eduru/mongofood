const express = require("express");
const router = express.Router();
const Character = require("../models/Characters");

//All routes for characters

router.get("/", async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

router.post("/new", async (req, res) => {
  const newChar = new Character(req.body);
  const savedChar = await newChar.save();
  res.json(savedChar);
});

router.get("/get/:id", async (req, res) => {
  const c = await Character.findById({ _id: req.params.id });
  res.json(c);
});

router.delete("/delete/:id", async (req, res) => {
  const result = await Character.findByIdAndDelete({ _id: req.params.id });
  res.send("delete");
});

router.patch("/update/:id", async (req, res) => {
  const c = await Character.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(c);
});

module.exports = router;
