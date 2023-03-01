const Player = require("../models/Player");

const getPlayers = async (req, res, next) => {
  try {
    const allPlayers = await Player.find();
    if (allPlayers.length === 0) {
      return res.status(200).json("Don't have players");
    }
    return res.status(200).json(allPlayers);
  } catch (e) {
    return res.status(503).json("Service Unavailable!");
  }
};

const getPlayer = async (req, res, next) => {
  const playerId = req.params.Id;
  try {
    const playerInfo = await Player.findOne({ _id: playerId });
    if (!playerInfo)
      return res
        .status(404)
        .json({ errorStatus: 404, errorMessage: "Not Found Player!" });
    return res.status(200).json(playerInfo);
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error!" });
    next(e);
  }
};

const addPlayers = async (req, res, next) => {
  const newPlayers = new Player(req.body);
  try {
    newPlayers.save();
    return res.status(200).json(newPlayers);
  } catch (e) {
    return res.status(501).json("Not Implemented");
  }
};

const editPlayers = async (req, res, next) => {
  const playerId = req.params.Id;
  try {
    const player = await Player.findOneAndUpdate({ _id: playerId }, req.body);
    return res
      .status(200)
      .json({ status: 200, message: "Update Successfully!" });
  } catch (e) {
    next(e);
    return res
      .status(501)
      .json({ errorStatus: 500, errorMessage: "Internal Server Error!" });
  }
};

const deletePlayers = async (req, res, next) => {
  const playerId = req.params.Id;
  console.log(playerId);
  try {
    await Player.findOneAndDelete({ _id: playerId });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (e) {
    next(e);
    return res
      .status(501)
      .json({ errorStatus: 500, errorMessage: "Internal Server Error!" });
  }
};

module.exports = {
  getPlayers,
  getPlayer,
  addPlayers,
  editPlayers,
  deletePlayers,
};
