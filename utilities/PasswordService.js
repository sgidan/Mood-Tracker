const bcrypt = require('bcrypt');
const { SALTROUNDS } = process.env || 10;

module.exports = {
  hashPassword: async myPlaintTextPassword => {
    try {
      let hash = await bcrypt.hash(myPlaintTextPassword, parseInt(SALTROUNDS));
      return hash;
    } catch (err) {
      if (err) throw err;
    }
  },
  checkPassword: async (myPlaintTextPassword, hash) => {
    try {
      let isMatch = await bcrypt.compare(myPlaintTextPassword, hash);
      return isMatch;
    } catch (err) {
      if (err) throw err;
    }
  }
};
