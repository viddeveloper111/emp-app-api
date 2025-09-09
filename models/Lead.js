const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }, // can be a URL or local file path
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
