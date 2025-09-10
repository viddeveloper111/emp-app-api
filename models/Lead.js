const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }, // can be a URL or local file path,
    status: {type: String, enum: ["Open" , "Converted" , "InProgress" , "Stuck" , "Completed"], default: "Open"},
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
