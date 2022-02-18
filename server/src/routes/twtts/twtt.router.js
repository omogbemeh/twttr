const express = require("express");
const { isAuthenticated } = require("../middleware/authMiddleWare");
const {
  httpGetAllTwtts,
  httpGetATwtt,
  httpPostTwtt,
  httpDeleteTwtt,
  httpLikeATwtt,
} = require("./twtt.controller");

const twttRouter = express.Router();

// like a twtt
twttRouter.put("/like/:id", isAuthenticated, httpLikeATwtt);

// Post a Twtt
twttRouter.post("/", isAuthenticated, httpPostTwtt);

// Get all twtts from the "following" field.
twttRouter.get("/", isAuthenticated, httpGetAllTwtts);

// Get A Twtt
twttRouter.get("/:id", httpGetATwtt);

// Delete a Twtt
twttRouter.delete("/:id", isAuthenticated, httpDeleteTwtt);

module.exports = twttRouter;
