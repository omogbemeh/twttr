const crypto = require("crypto");

function genHash(password) {
  const salt = crypto.randomBytes(64).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return { salt, hash };
}

function validatePassword(password, salt, hash) {
  const userhash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return userhash === hash;
}

module.exports = {
  genHash,
  validatePassword,
};
