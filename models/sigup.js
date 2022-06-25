const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  name: {
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
