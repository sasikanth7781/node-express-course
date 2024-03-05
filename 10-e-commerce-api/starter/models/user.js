const mongoose = require("mongoose");
const validator = require("validator");

mongoose.set("strictQuery", true);
const schema = new mongoose.Schema({
  name: {
    type: string,
    require: [true, "Please Provide Name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: string,
    require: [true, "Please Provide Email"],
    validate: {
      validator: validator.isEmail,
      message: "Email is not valid",
    },
  },
  password: {
    type: string,
    require: [true, "Please Provide Password"],
    minlength: 8,
    maxlength: 50,
  },
  role: {
    type: string,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("user", schema);
