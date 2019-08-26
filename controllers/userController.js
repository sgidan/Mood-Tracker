// require models (which typically we refer to as db)
const db = require("../models");
const { createToken, isValidToken } = require("../utilities/tokenService");
const cookieOptions = {
  httpOnly: true,
  // secure: true, on deployment
  signed: true,
  maxAge: (1000 * 60) ^ 60,
  expiresIn: new Date(Date.now() + 90000)
};

const signupUser = async (req, res) => {
  try {
    let user = await db.User.create(req.body);
    let token = await createToken(user);
    res.cookie("token", token, cookieOptions).json({
      message: "successfully registered",
      id: user._id,
      name: user.name
    });
  } catch (err) {
    if (err) console.log(err);
    res.status(422).json(err);
  }
};

const getUserProfile = function(req, res) {
  //WHY ARENT WE GETTINNG INTO HERE HELP
  //
  //
  //
  console.log("Inside getUserProfile > getUserProfile");
  db.User.findById(req.params.id)
    .populate("journals")
    .populate("moods")
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
};

const loginUser = async (req, res) => {
  try {
    let user = await db.User.findOne({ email: req.body.email });
    console.log('db.user', req.body.email, user);
    try {
      let isMatch = await user.comparePassword(req.body.password);
      if (isMatch) {
        let token = await createToken(user);
        res.cookie("token", token, cookieOptions).json({ user });
      } else {
        res.send({
          message: "Your username or password was incorrect, please try again",
          error: 404
        });
      }
    } catch (err) {
      if (err) res.send(err);
    }
  } catch (err) {
    if (err) res.send(err);
  }
};

const cookieCheck = async (req, res) => {
  // console.log('Inside cookieCheck', req);
  console.log('signedCookies', req.signedCookies);

  if (Object.keys(req.signedCookies).length === 0) {
    res.status(401).json({ message: "You are not authorized for this action" });
  } else {
    const { token } = req.signedCookies;
    if (token) {
      try {
        let {
          user: { _id, name, email, password }
        } = await isValidToken(token);
        try {
          let user = await db.User.findOne({ name, password, _id, email });
          res.send({
            email: user.email,
            name: user.name,
            id: user._id
          });
        } catch (err) {
          if (err) throw err;
        }
      } catch (err) {
        if (err) throw err;
      }
    } else {
      res.send({ message: "Cookie has expired, please log in." });
    }
  }
};

const logoutUser = function(req, res) {
  res
    .clearCookie("token")
    .json({ message: "You have successfully logged out" });
};

module.exports = {
  logoutUser,
  loginUser,
  signupUser,
  getUserProfile,
  cookieCheck
};
