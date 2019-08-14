require('dotenv').config();

var db = require("../models");
var seedData = require("./seeds");
var seedInfo = require("./chapterSeed")
var express = require("express");
var sequelize = require("sequelize");
var Library = require("../models/Library");
var Community = require("../models/user");
var Chapter = require("../models/Chapter")



db.sequelize.sync({ force: true }).then(function () {

    db.Library.bulkCreate(seedData)
      
        .then(data => {
            console.log("\n------------------------\n")
            console.log("success with seedData") // ... in order to get the array of user objects
        })  

        db.Chapter.bulkCreate(seedInfo)
      
        .then(data => {
            console.log("\n------------------------\n")
            console.log("success with seedInfo") // ... in order to get the array of user objects
        })  
});

