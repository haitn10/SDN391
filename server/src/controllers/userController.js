const User = require("../models/User");
const { hashPassword } = require("../utils/passwordService");

const register = async (req, res, next) => {
  try {
    const checkUser = await User.findOne({
      username: req.body.username,
    });
    if (checkUser) {
      return res.status(400).json({
        errorStatus: 400,
        errorMessage: "Username has ready existed!",
      });
    } else {
      const password = hashPassword(req.body.password);
      const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        yoB: req.body.yoB,
        password: password,
        isAdmin: false,
      });
      newUser.save();
      return res
        .status(200)
        .json({ status: 200, message: "Register user successfully!" });
    }
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error!" });
    next(e);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error!" });
    next(e);
  }
};

const getUser = async (req, res, next) => {
  const userId = req.body._id;
  try {
    const userInfo = await User.findOne({ _id: userId });
    if (!userInfo)
      return res
        .status(404)
        .json({ errorStatus: 404, errorMessage: "Not Found User!" });
    const data = {
      _id: userInfo._id,
      username: userInfo.username,
      name: userInfo.name,
      yoB: userInfo.yoB,
    };
    return res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error!" });
    next(e);
  }
};

const editInfo = async (req, res, next) => {
  const userId = req.body._id;
  try {
    const userInfo = await User.findByIdAndUpdate(userId, req.body);
    if (!userInfo)
      return res
        .status(400)
        .json({ errorStatus: 400, errorMessage: "Cannot update User!" });
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error!" });
    next(e);
  }
};

const removeUsers = async (req, res, next) => {
  const userId = req.body._id;
  try {
    const userInfo = await User.findOneAndRemove({ _id: userId });
    if (!userInfo)
      return res
        .status(400)
        .json({ errorStatus: 400, errorMessage: "Delete User failed!" });
    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ status: 500, message: "Internal Server Error!" });
    next(e);
  }
};

const upRole = async (req, res, next) => {
  const userId = req.params.Id;
  try {
    const userInfo = await User.findByIdAndUpdate(userId, { isAdmin: true });
    if (!userInfo)
      return res
        .status(400)
        .json({ errorStatus: 400, errorMessage: "Cannot update role Admin!" });
    res.status(200).json({ state: 200, message: "Update successfully!" });
  } catch (e) {
    res
      .status(500)
      .json({ errorStatus: 500, errorMessage: "Internal Server Error! " });
    next(e);
  }
};

const downRole = async (req, res, next) => {
  const userId = req.body._id;
  try {
    const userInfo = await User.findByIdAndUpdate(userId, { isAdmin: false });
    if (!userInfo)
      return res
        .status(400)
        .json({ errorStatus: 400, errorMessage: "Cannot update User!" });
    res.status(200).json({ state: 200, message: "Update successfully!" });
  } catch (e) {
    res
      .status(500)
      .json({ errorStatus: 500, errorMessage: "Internal Server Error! " });
    next(e);
  }
};

module.exports = {
  register,
  getAllUsers,
  getUser,
  editInfo,
  removeUsers,
  upRole,
  downRole,
};
