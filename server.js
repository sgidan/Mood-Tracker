const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const mongoose = require("mongoose");
// TODO: Create and require moodRoutes
// TODO: Create and require journalRoutes
const app = express();


// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

// USE ROUTES
app.use(routes);


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mood_db", {useNewUrlParser:true});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
