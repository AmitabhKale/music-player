const mongoose = require("mongoose");

const musicSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    music: {
      type: Object,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
let Music = mongoose.model("Music", musicSchema);

module.exports = Music;
