// DEPENDENCIES
const path = require("path");
const router = require("express").Router();

// REQUIRE ROUTES
const userRoutes = require("./api/userRoutes");
// const moodRoutes = require("/moodRoutes");
const journalRoutes = require("./api/journalRoutes");
// const apiRoutes = require("/apiRoutes");

// USE ROUTES - Inform router to user these routes
router.use("/api/users", userRoutes);
// router.use('/api/moods', moodRoutes);
router.use('/api/journal', journalRoutes);
// router.use('/api/apiRoutes', apiRoutes);

// i\If no API routes hit, send React
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
