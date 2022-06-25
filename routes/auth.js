const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getOne,
} = require("../controllers/signup");

router.route("/signup").get(getUser).post(createUser);

router.route("/signup/:id").get(getOne).patch(updateUser).delete(deleteUser);

module.exports = router;
