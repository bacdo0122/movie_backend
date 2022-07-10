const express = require("express");
const Source = require("../common/loklok_link");
const getAll = require("../common/mongo_link");

const getInfomationFilm = async (req, res, next) => {
  res.data = await Source(req.params.filmID, req.query.episode, 1);
  // res.data = await Source(8220, 2, 1);

  next();
};

module.exports = getInfomationFilm;
