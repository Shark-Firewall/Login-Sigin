const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
  },
  password: {
    type: password,
    required: true,
  },
});

module.exports = mongoose.model("signup", loginSchema);
