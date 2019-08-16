const login = function(req, res) {
  res.send("login route");
};

const signup = function(req, res) {
  res.send("signup route");
};

const logout = function(req, res) {
  res.send("logout route");
};

module.exports = { login, logout, signup };
