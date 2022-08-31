const { Schema, model } = require("mongoose");

const Series = new Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true },
});

module.exports = model("Series", Series);
