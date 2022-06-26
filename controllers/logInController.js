const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userModel.findOne({ email: userData.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        userDetail: userData,
      });
    } else {
      if (!(user.password == userData.password)) {
        return res.status(404).json({
          message: "Password incorrect",
          userDetail: userData,
        });
      } else {
        let uid = user["_id"];
        let token = jwt.sign({ payload: uid }, process.env.JWT_KEY);
        res.cookie("isLogin", token, { httponly: true });
        res.status(200).json({
          message: "User login successful",
          userDetail: user,
        });
      }
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  loginUser,
};
