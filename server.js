const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/user');
// TODO: Create and require moodRoutes
// TODO: Create and require journalRoutes
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

// USE ROUTES
app.use('/api/users', userRoutes);
app.use('/api/mood/', moodRoutes);
app.use('/api/journal/', journalRoutes);


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// TODO: Set up connection to mongoDB
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
