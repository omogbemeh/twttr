const express = require("express");
const authRouter = require("./auth/auth.router");
const twttRouter = require("./twtts/twtt.router");
const userRouter = require("./user/user.router");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/u", userRouter);
router.use("/", twttRouter);

module.exports = router;
