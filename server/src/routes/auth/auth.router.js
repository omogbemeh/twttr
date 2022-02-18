const express = require("express");
const passport = require("passport");

const { register, login, logout, getUser } = require("./auth.controller");

const authRouter = express.Router();

authRouter.get("/register", register);

authRouter.post("/register", register);

authRouter.get("/login", (req, res) => {
  res.send("Hello");
});

authRouter.get("/user", getUser);

authRouter.post(
  "/login",
  passport.authenticate("local", { successRedirect: "/" })
);

authRouter.post("/logout", logout);

module.exports = authRouter;
