const express = require("express");
const router = express.Router();
const { getUser, createUser,updateUser,deleteUser } = require("../controllers/signup");

router.route("/signup").get(getUser).post(createUser).patch(updateUser).delete(deleteUser);

module.exports = router;
