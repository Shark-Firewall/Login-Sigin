const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getOne,
} = require("../controllers/signUpController");

const { protectRouter } = require("../controllers/middleware");

const { loginUser } = require("../controllers/logInController");

router.route("/signup").get(protectRouter,getUser).post(createUser);

router.route("/signup/:id").get(getOne).patch(updateUser).delete(deleteUser);

router.route("/login").post(loginUser);

module.exports = router;
