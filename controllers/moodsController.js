const db = require("../models");

module.exports = {
  submitSurvey: function(req, res) {
    console.log("\n Inside moodController ------", req.body);
    db.Mood.create({ score: req.body.data })
      // db.User.findById(req.params.id)
        .then(dbMoods => {
            res.json(dbMoods);
            return db.User.updateOne(
              {_id: req.body.id},
              {$push: { moods: dbMoods._id}}
            )
          })
        
        
        // WE CHANGED THE RESPONSE SENT TO FRONT END SO ERROR WILL OCCUR ON FRONT END

    
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
