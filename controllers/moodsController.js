const db = require('../models');

module.exports = {

  submitSurvey: function(req, res) {
    console.log('\n Inside moodController ------', req.body);
    db.Mood.create({score: req.body})
        console.log("inside moods controller req.params.id", req.params)
        // db.User.findById(req.params.id) 
      .then(response => res.json(response)) 
      // find user and update ref w/ mood _id
      
      .catch(err => res.status(422).json(err));
  },

    //   getUserProfile: function(req, res){
    //     console.log('Inside getUserProfile > getUserProfile');
    //       db.User.findById(req.params.id)
    //         .then(dbUser => res.json(dbUser))
    //         .catch(err => res.status(422).json(err));
    //   },

  
}
