const Nation = require("../../models/Nation");

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
    const nation = await Nation.find({ countryID: countrySearch.toUpperCase() });
    res.status(200).json(nation);
  } catch (e) {
    next(e);
  }
};

module.exports = { getNations, getNation };
