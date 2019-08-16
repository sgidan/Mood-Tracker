const path = require("path");
const router = require("express").Router();
const apiRoutes = require("/apiRoutes");

//API Routes

router.use("/api", apiRoutes);

//if no API routes hit, send React

router.use(function(req,res){
    res.sendFile(path.join(_dirname, ""))
});

module.exports = router;