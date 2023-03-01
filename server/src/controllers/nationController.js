const Nation = require("../models/Nation");


const getNations = async (req, res, next) => {
  try {
    const allNations = await Nation.find();
    res.status(200).json(allNations);
  } catch (e) {
    next(e);
  }
};

const getNation = async (req, res, next) => {
  const countrySearch = req.params.countryId;
  try {
    const nation = await Nation.find({
      countryID: countrySearch.toUpperCase(),
    });
    res.status(200).json(nation);
  } catch (e) {
    next(e);
  }
};

const addNations = async (req, res, next) => {
  const newNations = new Nation(req.body);

  try {
    newNations.save();
    res.status(200).json(savedNation);
  } catch (e) {
    next(e);
  }
};

const editNations = (req, res, next) => {
  res.end("Hello");
};

module.exports = { editNations };

const deleteNations = (req, res, next) => {
  res.end("Hello");
};

module.exports = {
  getNations,
  getNation,
  addNations,
  editNations,
  deleteNations,
};
