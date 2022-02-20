const express = require("express");
const passport = require("passport");
const { isAuthenticated } = require("../middleware/authMiddleWare");

const { register, login, logout, getUser } = require("./auth.controller");

const authRouter = express.Router();

authRouter.post("/register", register);

authRouter.get("/user", getUser);

authRouter.post(
  "/login",
  passport.authenticate("local", { successRedirect: "/user" })
);

authRouter.get("/is-authenticated", (req, res, next) => {
  return res.json({ authenticated: req.isAuthenticated() });
});

authRouter.post("/logout", logout);

module.exports = authRouter;
