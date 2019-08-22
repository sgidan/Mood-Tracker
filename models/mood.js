const mongoose = require("mongoose");
const Schema = mongoose.Schema;
///do we want this to be required??***********
///change date format
const moodSchema = new Schema({
    date: { type: Date, default: Date.now },
    q1: Number,
    q2: Number
    
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;