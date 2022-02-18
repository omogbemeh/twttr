const mongoose = require("mongoose");

const TwttSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  twtt: {
    type: String,
    required: true,
    maxLength: 240,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  media: [String],
  retwttedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
});

module.exports = Twtt = mongoose.model("Twtt", TwttSchema);
