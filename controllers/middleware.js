const jwt = require("jsonwebtoken");

const protectRouter = (req, res, next) => {
  try {
    if (req.cookies.isLogin) {
      let isVerified = jwt.verify(req.cookies.isLogin, process.env.JWT_KEY);
      if (isVerified) {
        next();
      } else {
        return res.status(404).send("User not Verified!");
      }
    } else {
      return res.status(404).json({
        message: "Please Login First!",
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  protectRouter,
};
