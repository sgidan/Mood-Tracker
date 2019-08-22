const db = require("../models");


// COPIED!!! from ajax books *******NEED TO UPDATE!!!*******
module.exports ={

    // findAll: function(req, res) {
      //   db.Journal
      //     .find(req.query)
      //     .sort({ date: -1 })
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // },
      // findById: function(req, res) {
      //   db.Journal
      //     .findById(req.params.id)
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // },
      saveJournal: function(req, res) {
        db.Journal
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      // update: function(req, res) {
      //   db.Journal
      //     .findOneAndUpdate({ _id: req.params.id }, req.body)
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // },
      // remove: function(req, res) {
      //   db.Journal
      //     .findById({ _id: req.params.id })
      //     .then(dbModel => dbModel.remove())
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // }
    };
    