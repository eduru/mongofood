const mongoose = require("mongoose");

const CharactersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Character", CharactersSchema);
