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
    imageURL: {
      type: String,
      required: true,
      default:
        "https://img.freepik.com/premium-photo/colorful-musical-notes-green-background-3d-illustration_1015980-609364.jpg?w=740",
    },
    album: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
let Music = mongoose.model("Music", musicSchema);

module.exports = Music;
