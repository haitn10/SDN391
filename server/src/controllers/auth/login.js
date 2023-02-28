const jwt = require('jsonwebtoken');
const Admin = require("../../models/Admin");
const { checkPassword } = require("../../utils/passwordService");

const login = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({
      email: req.body.email,
    });
    

    if (!admin) return res.status(404).json("User not found!");
    if (!admin.isAdmin)
      return res
        .status(401)
        .json(
          "Your account has been disabled! Please contact Administrator for more info."
        );
    if (!(await checkPassword(req.body.password, admin.password))) {
      return res.status(400).json("Password is incorrect");
    }
    const payload = {
      email: admin.email,
      name: admin.name,
      id: admin.id,
      isAdmin: true,
    };
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(
      { ...payload, refreshToken: true },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      ...payload,
      accessToken,
      refreshToken,
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = { login };
