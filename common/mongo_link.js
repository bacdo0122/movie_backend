const Film = require("../model/film");
const getOne = (id) => {
  const getFilm = Film.findOne({ _id: id });
};
const getAll = async () => {
  const getFilm = await Film.find();
  console.log("a");
  return getFilm;
};
module.exports = getAll;
