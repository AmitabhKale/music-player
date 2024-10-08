const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decoded._id,
    });

    if (!user) {
      throw new Error("User not Found");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).json({
      message: "Please Authenticate First",
    });
  }
};

module.exports = {
  auth,
};
