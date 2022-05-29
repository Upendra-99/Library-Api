const mongoose = require("mongoose");
const track = mongoose.Schema({
  bookId: { type: String, required: true },
  trackingData: [{ type: Object }],
});

module.exports = mongoose.model("track", track);
