const mongoose = require("mongoose");
const emailValidator = require("email-validator");

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      //Don't use anonymous function here
      return emailValidator.validate(this.email);
    },
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  confirm_password: {
    type: String,
    minlength: 8,
    required: true,
    validate: function () {
      //Don't use anonymous function here
      return this.confirm_password == this.password;
    },
  },
});

// assigning confirm_password as undefined help us to not save confirm_password in the database
loginSchema.pre("save", function () {
  //Don't use anonymous function here
  this.confirm_password = undefined;
});

// loginSchema.post("save", () => {});

module.exports = mongoose.model("signup", loginSchema);
