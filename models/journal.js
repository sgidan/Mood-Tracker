const mongoose = require("mongoose");
const Schema = mongoose.Schema;
///do we want this to be required??***********
const journalSchema = new Schema({
  one: { type: String, required: false },
  two: { type: String, required: false },
  three: { type: String, required: false },
  four: { type: String, required: false },
  five: { type: String, required: false },
  six: { type: String, required: false },
  seven: { type: String, required: false },
  eight: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;