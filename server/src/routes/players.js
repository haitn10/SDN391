const express = require("express");
const { validateAdmin } = require("../middlewares/validateAdmin");
const { getPlayers, getPlayer, addPlayers, editPlayers } = require("../controllers/playerController");

const playerRouter = express.Router();

//GET
playerRouter.get('/', getPlayers);
playerRouter.get('/:playerId', getPlayer);

//POST
playerRouter.post('/add', validateAdmin, addPlayers);

//PUT
playerRouter.put('/:nationid', validateAdmin, editPlayers);

// //DELETE
// playerRouter.delete('/:nationid', validateAdmin, deleteNations);

module.exports = playerRouter;