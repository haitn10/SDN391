const express = require("express");
const { addAdmin } = require("../controllers/admin/index");
const { validateAdmin } = require("../middlewares/validateAdmin");

const adminRouter = express.Router();

//GET
// adminRouter.get('/', validateAdmin, getNations);

//POST
adminRouter.post("/add", validateAdmin, addAdmin);

//PUT
// adminRouter.put('/:adminId', validateAdmin, editNations);

//DELETE
// adminRouter.delete('/:adminId', validateAdmin, editNations);

module.exports = adminRouter;
