const mongoose = require("mongoose");
const Schema = mongoose.Schema;
///do we want this to be required??***********
const moodSchema = new Schema({
    date: { type: Date, default: Date.now },
    score:[Number]
    
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;