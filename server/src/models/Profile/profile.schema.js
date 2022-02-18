const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  displayName: String,
  bio: String,
  dob: Date,
});

module.exports = Profiles = mongoose.model("Profile", ProfileSchema);
