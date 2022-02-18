const expressSession = require("express-session");
const MongoStore = require("connect-mongo");

const session = expressSession({
  name: "twttr",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
});

module.exports = { session };
