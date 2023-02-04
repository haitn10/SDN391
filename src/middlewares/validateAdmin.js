const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const validateAdmin = async (req, res, next) => {
  const accessToken = req.headers.access_token;
  try {
    const payload = jwt.verify(accessToken, process.env.SECRET_KEY);
    if (payload.email) {
      const admin = await Admin.findOne({ email: payload.email });
      if (!admin.isAdmin) {
        return res.status(403).json({message : "You are not authorized!"});
      }
    }
    req.adminInfo = payload;
    return next();
  } catch (e) {
    return res.status(403).json("You are not authorized!");
  }
};

module.exports = { validateAdmin };
