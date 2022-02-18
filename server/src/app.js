const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const router = require("./routes/router");
const mongodb = require("../config/database");
const session = require("./session").session;
const connectMongo = require("../config/database");

require("../config/passport");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Express session
app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
);

module.exports = app;
