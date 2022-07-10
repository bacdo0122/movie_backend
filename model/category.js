const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ids: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("categories", CategorySchema);
