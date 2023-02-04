const Admin = require("../../models/Admin");
const { hashPassword } = require("../../utils/passwordService");

const addAdmin = async (req, res, next) => {
  try {
    const checkAdmin = await Admin.findOne({
      email: req.body.email,
    });
    if (checkAdmin) {
      return res
        .status(400)
        .json({ errorStatus: 400, errorMessage: "Admin has ready existed!" });
    } else {
      const password = hashPassword(req.body.password);
      const newAdmin = new Admin({
        email: req.body.email,
        password: password,
        name: req.body.name,
        isAdmin: req.body.isAdmin,
      });
      await newAdmin.save();
      res.status(200).json("Register success admin!");
    }
  } catch (e) {
    next(e);
  }
};
module.exports = { addAdmin };
