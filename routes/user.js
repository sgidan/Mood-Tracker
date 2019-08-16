// LAST STOP BEFORE DIVING INTO THE BACKEND

const router = require("express").Router();
const { login, logout, signup } = require("../controllers/user.js");


router.get("/logout", logout);
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
