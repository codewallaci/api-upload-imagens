const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PictureShema = new Schema({
  name: { type: String, require: true },
  src: { type: String, require: true },
});

module.exports = mongoose.model("Picture", PictureShema);
