const passport = require("passport");
const { Strategy } = require("passport-local");
const { validatePassword } = require("../lib/passwordUtil");
const { findUser, findUserById } = require("../src/models/User/user.model");

const options = {
  username: "username",
  password: "password",
};

async function verifyCallback(username, password, done) {
  try {
    const user = await findUser(username);
    if (!user) return done(null, false);
    const isValid = validatePassword(password, user.salt, user.hash);
    if (!isValid) return done(null, false);
    return done(null, user);
  } catch (error) {
    done(error);
  }
}

// Using local strategy
const localStrategy = new Strategy(options, verifyCallback);

passport.use(localStrategy);

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
  // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (error) {
    console.error(error);
    return done(error);
  }
});
