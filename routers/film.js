const express = require("express");
const router = express.Router();
const Film = require("../model/film");
const Category = require("../model/category");
const getInfomationFilm = require("../middleware/index");
// router.get("/", async (req, res) => {
//   try {
//     const getFilm = await Film.find().populate("categories").exec();

//     res.json(getFilm);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });
// router.get("/:filmID", getInfomationFilm, async (req, res, next) => {
//   console.log(res.data);
//   try {
//     const getFilm = await Film.findOne({ id: req.params.filmID })
//       .populate("categories")
//       .exec();
//     res.json({ data: getFilm, source: res.data });
//     next();
//   } catch (error) {
//     res.json({ message: error });
//   }
// });
router.get("/add", async (req, res) => {
  try {
    const newFilm = {
      name: "21",
      star: 4,
      time: 2018,
      description: "alo",
      categories: [14],
    };
    const addFilm = await Film.create(newFilm);
    console.log(addFilm);
  } catch (error) {}
});

module.exports = router;
