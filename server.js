const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const { config } = require("dotenv");

const routes = require("./routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://ssmood:ssmood123@ds251877.mlab.com:51877/heroku_2c2w234lmongodb://localhost/mood_db";

// const cors = require('cors');
// app.use(cors());

// TODO: Create and require moodRoutes
// TODO: Create and require journalRoutes
const app = express();

config({ debug: process.env.DEBUG });

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET));

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
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
