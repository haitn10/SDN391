const express = require("express");
const { validateAdmin } = require("../middlewares/validateAdmin");
const {
  getNations,
  getNation,
  addNations,
  editNations,
  deleteNations,
} = require("../controllers/nationController");

const nationRouter = express.Router();

//GET
nationRouter.get("/", getNations);
nationRouter.get("/:countryId", getNation);

//POST
nationRouter.post("/add", validateAdmin, addNations);

//PUT
nationRouter.put("/:nationid", validateAdmin, editNations);

//DELETE
nationRouter.delete("/:nationid", validateAdmin, deleteNations);

module.exports = nationRouter;
