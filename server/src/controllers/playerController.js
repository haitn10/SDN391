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
  const playerId = req.params._id;
  try {
    const player = await Player.findOne({ _id: playerId });
    return res.status(200).json(player);
  } catch (e) {
    return res.status(503).json("Service Unavailable!");
  }
};

const addPlayers = async (req, res, next) => {
  const newPlayers = new Player(req.body);
  try {
    const player = await Player.find();
    player.forEach((items) => {});
    if (userFound) {
      done(null, user);
    } else {
      done(null, false, { message: "user not found" });
    }
    newPlayers.save();
    return res.status(200).json(newPlayers);
  } catch (e) {
    return res.status(501).json("Not Implemented");
  }
};

const editPlayers = async (req, res, next) => {
  const newInfos = new Player(req.body);
  try {
    const player = await Player.findByIdAndUpdate(newInfos);
    res.status(200).json(player);
  } catch (e) {
    res.status(501).json("Not Implemented");
  }
};

const deleteNations = async (req, res, next) => {
  const playerId = req.body._id;
  try {
    await Player.findByIdAndRemove(playerId);
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (e) {
    return res.status(501).json("Not Implemented");
  }
};

module.exports = {
  getPlayers,
  getPlayer,
  addPlayers,
  editPlayers,
  deleteNations,
};
