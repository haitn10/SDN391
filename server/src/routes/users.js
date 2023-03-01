const express = require("express");
const { validateAdmin } = require("../middlewares/validateAdmin");
const {
  register,
  editInfo,
  getUser,
  getAllUsers,
  upRole,
} = require("../controllers/userController");

const userRouter = express.Router();

//GET
userRouter.get("/all", validateAdmin, getAllUsers);

//GET
userRouter.get("/me", getUser);

//POST
userRouter.post("/register", register);

//PUT
userRouter.put("/edit", editInfo);

//PUT
userRouter.put("/up", upRole);

module.exports = userRouter;
