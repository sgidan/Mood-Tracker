require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports = {
  createToken: async user => {
    try {
      let token = await jwt.sign(
        { user, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
        "really really secret"
      );
      return token;
    } catch (err) {
      if (err) throw err;
    }
  },

  isValidToken: async token => {
    try {
      let decoded = await jwt.verify(token, SECRET);
      return decoded;
    } catch (err) {
      if (err) throw err;
    }
  }
};
