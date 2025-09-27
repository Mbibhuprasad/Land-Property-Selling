const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String }], // URLs
  address: { type: String },
  squareFeet: { type: Number },
  location: { type: String },
  price: { type: Number },
  facing: { type: String },
  boundary: { type: String },
  description: { type: String },
  amenities: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plot", plotSchema);
