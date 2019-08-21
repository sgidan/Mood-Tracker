// THE PLACE WHERE GO BETWEEN FRONTEND --> BACKEND AND VISE VERSA
const router = require("express").Router();
const { submitSurvey } = require('../../controllers/moodsController');

// Matches '/api/moods +'
router.route('/survey')
    .post(submitSurvey)



module.exports = router;
