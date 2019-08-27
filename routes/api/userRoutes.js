// LAST STOP BEFORE DIVING INTO THE BACKEND
const router = require("express").Router();
const {
  signupUser,
  getUserProfile,
  loginUser,
  logoutUser,
  cookieCheck
} = require("../../controllers/userController");

// Matches '/api/users'
router.route("/signup").post(signupUser);

router.route("/profile/:id").get(cookieCheck, getUserProfile);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

module.exports = router;

///// OLD CODE ////
// const { login, logout, signup } = require("../../controllers/userController.js");
// console.log(signup);

// // Matches '/api/users/'
// router.post("/signup", signup);

// router.get("/logout", logout);
// router.post("/login", login);

// module.exports = router;
