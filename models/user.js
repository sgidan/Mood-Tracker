const mongoose = require("mongoose");
const Schema = mongoose.Schema;
///do we want this to be required??***********

const userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;