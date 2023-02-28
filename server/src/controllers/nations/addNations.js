const Nation = require("../../models/Nation");
const upload = require("../../middlewares/upload");
const ResDTO = require("../../utils/error");

const addNations = async (req, res, next) => {
  const newNations = new Nation(req.body);
  // if (req.body.resign === undefined) {
  //   return next(ResDTO(400, "You must provide a file"));
  //   // return res.status(404).send("You must provide a file");
  // }

  try {
    const savedNation = await upload(req, res);
    newNations.save();
    res.status(200).json(savedNation);
  } catch (e) {
    next(e);
  }
};
module.exports = { addNations };
