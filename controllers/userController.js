// require models (which typically we refer to as db)
const db = require('../models');

module.exports = {

  signupUser: function(req, res) {
    console.log('Inside userController', req.body);
    db.User.create(req.body)
      .then(response => res.json(response))
      .catch(err => res.status(422).json(err));
  },

  getUserProfile: function(req, res){
    console.log('Inside getUserProfile > getUserProfile');
  },

  loginUser: function(req, res) {
    console.log('Inside userController > loginUser');
  },

  logoutUser: function(req, res) {
    console.log('Inside userController > logoutUser');
  }
  
}





////////// OLD CODE //////////////
// const login = function(req, res) {
//   res.send("login route");
// };

// const signup = function(req, res) {
//   // use model to inform itself how to save information to the database
//   // req.body will be an object that mirrors you user model but with the values being user's input
//   console.log('Inside userController signup:', req.body);

//   // db.User.create(req.body)
//   // .then(res => {
//   //   console.log('User created response:', res);
//   //   res.send('Sign up successful!')
//   // }); // this is the response that's sent back up to front end. but instead it will be res.json or res.send with either a status code or message, or the information requested 

//   // res.send("signup route"); 
// };

// const logout = function(req, res) {
//   // mongoose for delete
//   res.send("logout route");
// };

// module.exports = { login, logout, signup };
