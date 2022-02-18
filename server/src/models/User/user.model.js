const User = require("./User.schema");

// Get all users
async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(" something went wrong wwhile trying to get all users");
  }
}

async function findUser(username) {
  try {
    const existingUser = await User.findOne({
      username,
    });
    if (existingUser) return existingUser;
    return false;
  } catch (error) {
    console.error({ error });
  }
}

async function findUserById(id) {
  try {
    const user = await User.findById(id);
    if (!user) return false;
    else return user;
  } catch (error) {
    return error;
  }
}

async function createUser(user) {
  const { username, email, hash, salt } = user;
  try {
    const newUser = new User({
      username,
      email,
      salt,
      hash,
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error({ error });
    return;
  }
}

async function getUserProfile(id) {
  const userProfile = await User.findById(id).populate("profile");
  return userProfile;
}

// Follow & Unfollow User
async function followUser(newUser, oldUserId) {
  const oldUser = await findUserById(oldUserId);
  if (!oldUser) return res.status(404).json({ err: "User not found" });
  const isFollowing = oldUser.following.includes(newUser._id);
  if (isFollowing) {
    oldUser.following = oldUser.following.filter(
      (follower) => !follower.equals(newUser._id)
    );
    newUser.followers = newUser.followers.filter(
      (follower) => !follower.equals(oldUserId)
    );
  } else {
    oldUser.following.push(newUser._id);
    newUser.followers.push(oldUserId);
  }
  await newUser.save();
  await oldUser.save();
  return { newUser, oldUser };
}

async function getFollowing(userId) {
  const user = await findUserById(userId);
  return user.following;
}

async function getFollowers(userId) {
  const user = await findUserById(userId);
  return user.followers;
}

module.exports = {
  getAllUsers,
  findUser,
  findUserById,
  createUser,
  getUserProfile,
  followUser,
  getFollowing,
  getFollowers,
};
