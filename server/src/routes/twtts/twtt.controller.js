const { getFollowers } = require("../../models/Profile/profile.model");
const { findUser, getFollowing } = require("../../models/User/user.model");
const {
  postTwtt,
  findTwttById,
  liketwtt,
  deleteTwtt,
  getAllTwttsByFollowing,
} = require("../../models/Twtt/twtt.model");

async function httpGetAllTwtts(req, res, next) {
  try {
    const userId = req.user._id;
    const following = await getFollowing(userId);
    const twtts = await getAllTwttsByFollowing(following);
    res.json(twtts);
  } catch (error) {
    console.error(error);
  }
}

async function httpGetATwtt(req, res, next) {
  try {
    const twttId = req.params.id;
    const foundTwtt = await findTwttById(twttId);
    if (!foundTwtt) {
      res.status(404).json({ error: "Twtt not found" });
    }
    return res.status(200).json(foundTwtt);
  } catch (error) {}
}

async function httpPostTwtt(req, res, next) {
  // TODO: Validate the twt
  const { twtt } = req.body;
  try {
    const user = await findUser(req.user.username);
    const newTwtt = await postTwtt(user._id, twtt);
    return res.status(201).json(newTwtt);
  } catch (error) {
    res.status(400);
  }
}

async function httpLikeATwtt(req, res, next) {
  try {
    const twttId = req.params.id;
    const sessUser = req.user;
    const updatedTwtt = await liketwtt(twttId, sessUser);
    if (updatedTwtt) return res.status(200).json(updatedTwtt);
    else {
      return res
        .json({ err: "Somthing went wrong while liking the twtt" })
        .status(400);
    }
  } catch (error) {
    console.log(error);
  }
}

async function httpDeleteTwtt(req, res, next) {
  const id = req.params.id;
  const sessUser = req.user.username;
  try {
    const deletedTwtt = await deleteTwtt(id, sessUser);
    if (!deletedTwtt) {
      return res
        .status(401)
        .json({ error: "you don't have permission to delete this" });
    } else res.status(200).json(deletedTwtt);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  httpGetAllTwtts,
  httpGetATwtt,
  httpPostTwtt,
  httpLikeATwtt,
  httpDeleteTwtt,
};
