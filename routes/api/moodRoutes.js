// THE PLACE WHERE GO BETWEEN FRONTEND --> BACKEND AND VISE VERSA
const router = require("express").Router();
const { submitSurvey } = require('../../controllers/moodsController');

// Matches '/api/moods +'
router.route('/survey')
    console.log("inside moodRoutes")
    .post(submitSurvey)



module.exports = router;
