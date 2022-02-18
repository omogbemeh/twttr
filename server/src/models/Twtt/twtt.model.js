const { getFollowers } = require("../Profile/profile.model");
const { getFollowing } = require("../User/user.model");
const Twtt = require("./twtt.schema");

async function getAllTwttsByFollowing(ids) {
  const twtts = await Twtt.find({ postedBy: ids });
  return twtts;
}

// Post A Twtt
async function postTwtt(userId, twtt) {
  try {
    const newTwtt = new Twtt({
      postedBy: userId,
      twtt,
      createdAt: Date.now(),
    });
    await newTwtt.save();
    return newTwtt;
  } catch (error) {
    console.error(error);
  }
}

// Find a twtt by ID
async function findTwttById(id) {
  try {
    const foundTwtt = await Twtt.findById(id);
    if (!foundTwtt) {
      return false;
    }
    return foundTwtt;
  } catch (error) {}
}

// Find the owner of a twtt
async function findTwttOwner(twttId) {
  try {
    const twttOwner = await Twtt.findOne({ _id: twttId }).populate(
      "postedBy",
      "username"
    );
    return twttOwner.postedBy.username;
  } catch (error) {}
}

async function getTwttsByAUser(id) {
  const twtts = await Twtt.find({ postedBy: id });
  return twtts;
}

// Check if a user has liked the twtt
async function liketwtt(twttId, user) {
  try {
    const twtt = await findTwttById(twttId);
    const hasLikedTwtt = twtt.likes.includes(user._id);
    if (hasLikedTwtt) {
      twtt.likes = twtt.likes.filter((like) => {
        return !like.equals(user._id);
      });
    } else {
      twtt.likes.push(user._id);
    }
    await twtt.save();
    return twtt;
  } catch (error) {
    console.log(error);
  }
}

// Delete A Twtt
async function deleteTwtt(id, sessUser) {
  try {
    const twttOwner = await findTwttOwner(id);
    const existingTwtt = await findTwttById(id);
    if (!existingTwtt) {
      return false;
    }
    if (sessUser !== twttOwner) {
      return false;
    }
    await Twtt.findByIdAndDelete(id);
    return existingTwtt;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTwttsByFollowing,
  postTwtt,
  findTwttById,
  getTwttsByAUser,
  liketwtt,
  deleteTwtt,
};
