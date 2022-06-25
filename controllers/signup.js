const { findOneAndUpdate, findOneAndDelete } = require("../models/sigup");
const User = require("../models/sigup");

const getUser = async (req, res) => {
  try {
    const allUser = await find({});
    res.json({
      message: "All user found!",
      allUser: allUser,
    });
  } catch (err) {
    res.send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    res.json({
      message: "User created succesfully",
      user: user,
    });
  } catch (err) {
    res.send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await findOneAndUpdate({ id: req.params.id });
    res.json({
      message: "User updated succesfully",
      updatedUser: updatedUser,
    });
  } catch (err) {
    res.send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await findOneAndDelete({ id: req.params.id });
    res.json({
      message: "User deleted successfully",
      deleteUser: deleteUser,
    });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
