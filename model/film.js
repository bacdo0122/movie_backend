const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FilmSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  star: {
    type: Number,
    require: true,
  },
  time: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  ],
});

module.exports = mongoose.model("films", FilmSchema);
