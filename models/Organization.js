const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organization", organizationSchema);
