const User = require("../models/userModel");


const getUser = async (req, res) => {
  try {
    const allUser = await User.find({});
    res.status(200).json({
      message: "All user found!",
      allUser: allUser,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      message: "User created succesfully",
      user: user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const dateToUpdate = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { _id: userID },
      dateToUpdate
    );
    if (!updatedUser) {
      return res.status(404).send(`user not found ${userID}`);
    }
    res.status(200).json({
      message: "User updated succesfully",
      updatedUser: updatedUser,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "User deleted successfully",
      deleteUser: deleteUser,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getOne = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const userOne = await User.findOne({ _id: userID });
    res.send(userOne);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getOne,
};
