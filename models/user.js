const mongoose = require("mongoose");
const Schema = mongoose.Schema;
///do we want this to be required??***********

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  journals: [{
   type: Schema.Types.ObjectId, 
   ref: 'Journal'
  }],
  moods:[{
    type: Schema.Types.ObjectId, 
    ref: 'Mood'
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;