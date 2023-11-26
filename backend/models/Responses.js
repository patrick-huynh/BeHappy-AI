const mongoose = require("mongoose");

const responseSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Response", responseSchema);
