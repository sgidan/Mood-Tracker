const mongoose = require("mongoose");
const Schema = mongoose.Schema;
///do we want this to be required??***********
const journalSchema = new Schema({
  ans1: { type: String, required: true },
  ans2: { type: String, required: true },
  ans3:{ type: String, required: true },
  ans4:{ type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;