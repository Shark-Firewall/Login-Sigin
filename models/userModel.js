const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

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

// Hashing the password field with using bcrypt
// loginSchema.pre("save", async function () {
//   const salt = await bcrypt.genSalt();
//   const hashString = await bcrypt.hash(this.password, salt);
//   this.password = hashString;
// });

// loginSchema.post("save", () => {});

module.exports = mongoose.model("signup", loginSchema);
