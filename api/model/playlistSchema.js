const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    songs: [{ songid: mongoose.Schema.Types.ObjectId, ref: "Musics" }],
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
