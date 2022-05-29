const mongoose = require("mongoose");

const Book = mongoose.Schema({
  Title: { type: String, required: true },
  Author: { type: String, required: true },
  Category: { type: String, required: true },
  Availability: { type: Boolean, required: true },
});

module.exports = mongoose.model("Book", Book);
