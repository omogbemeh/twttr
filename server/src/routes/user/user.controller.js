const { getTwttsByAUser } = require("../../models/Twtt/twtt.model");
const {
  getUserProfile,
  followUser,
  findUserById,
} = require("../../models/User/user.model");

function createProfile(req, res, next) {
  const { dob, displayName, bio } = req.body;
}

async function httpGetAProfile(req, res, next) {
  const userId = req.params.id;
  const profile = await getUserProfile(userId);
  if (!profile) return res.status(404).json({ error: "Profile not found" });
  const tweets = await getTwttsByAUser(userId);
  console.log({ profile, tweets });
}

async function httpFollowUser(req, res, next) {
  try {
    const newFollowerId = req.params.id;
    const userId = req.user._id;
    const newfollower = await findUserById(newFollowerId);
    console.log({ newfollower });
    if (!newfollower) {
      return res.status(404).json({ err: "User not found" });
    }
    if (newfollower._id === userId)
      return res.status(400).json({ error: "You can not follow yourself" });
    const { newUser, oldUser } = await followUser(newfollower, userId);
    return res.json({ newUser, oldUser }).status(200);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

module.exports = {
  httpGetAProfile,
  createProfile,
  httpFollowUser,
};
