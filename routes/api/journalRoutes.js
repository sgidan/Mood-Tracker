const router = require("express").Router();
const { saveJournal } = require("../../controllers/journalsController");

// Matches '/api/journal +'
router.route("/save")
    .post(saveJournal);

// '/api/journal', journalRoutes)

module.exports = router;
