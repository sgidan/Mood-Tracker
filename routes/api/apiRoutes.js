require ("dotenv").config();
const axios =require("axios");
const router =require("express").Router();
let apiKey = process.env.API_KEY;
const youtubeController = require("../../controllers/youtubeController");

router.get("/profile", (res)=> {
    
axios
    .get ("https://www.googleapis.com/youtube/v3/youtube.channel.list?part=id&forusername=theschooloflife")
    .then (res => {console.log(res)})
})