const express = require("express");
const { addNations } = require("../controllers/nations/addNations");
const { deleteNations } = require("../controllers/nations/deleteNations");
const { editNations } = require("../controllers/nations/editNations");
const { getNations, getNation } = require("../controllers/nations/getNations");
const { validateAdmin } = require("../middlewares/validateAdmin");

const nationRouter = express.Router();

//GET
nationRouter.get('/', getNations);
nationRouter.get('/:countryId', getNation);

//POST
nationRouter.post('/add', validateAdmin, addNations);

//PUT
nationRouter.put('/:nationid', validateAdmin, editNations);

//DELETE
nationRouter.delete('/:nationid', validateAdmin, deleteNations);

module.exports = nationRouter;