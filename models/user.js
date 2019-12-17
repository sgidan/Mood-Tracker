const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { checkPassword, hashPassword } = require("../utilities/passwordService");

require("mongoose-type-email");



const userSchema = new Schema({
  name: String,
  email: String,
  //  { loginEmail: mongoose.SchemaTypes.Email },
  password: String,
  journals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Journal"
    }
  ],
  // journalEntries:[{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Journal'
  //  }],
  moods: [
    {
      type: Schema.Types.ObjectId,
      ref: "Mood"
    }
  ]
});

userSchema.pre("save", async function(next) {
  let user = this;
  if (!user.isModified("password")) return next();
  try {
    let hash = await hashPassword(user.password);
    user.password = hash;
    next();
  } catch (err) {
    if (err) throw err;
  }
});

userSchema.methods.comparePassword = async function(password) {
  try {
    let matched = await checkPassword(password, this.password);
    return matched;
  } catch (err) {
    if (err) throw err;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
