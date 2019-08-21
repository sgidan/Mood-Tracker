const db = require("../models");

module.exports = {
  submitSurvey: function(req, res) {
    console.log("\n Inside moodController ------", req.body);
    db.Mood.create({ score: req.body })
      // db.User.findById(req.params.id)
      .then(response => {
        console.log("survey response value", response.score[0].data.q1);
        res.json(response);
      })
      // find user and update ref w/ mood _id

      .catch(err => res.status(422).json(err));
  },

//   getMoods: function(req, res) {
//     console.log("Inside getMoods controller  ");
//     db.User.findById(req.params.id)
//       .then(dbUser => res.json(dbUser))
//       .catch(err => res.status(422).json(err));
//   }
};
