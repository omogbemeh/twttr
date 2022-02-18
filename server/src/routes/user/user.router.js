const express = require("express");
const { httpGetAProfile, httpFollowUser } = require("./user.controller");
const { isAuthenticated } = require("../middleware/authMiddleWare");
const userProfilerouter = express.Router();

userProfilerouter.put("/follow/:id", isAuthenticated, httpFollowUser);
userProfilerouter.get("/:id", httpGetAProfile);

module.exports = userProfilerouter;
