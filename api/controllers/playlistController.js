const Music = require("../model/musicSchema");
const Playlist = require("../model/playlistSchema");

const addSongToPlaylist = async (req, res) => {
  const { songId } = req.body;
  const { playlistId } = req.params;

  try {
    const playlist = await Playlist.findById(playlistId);

    // const song = await Music.findById(songId)

    if (!playlist) {
      throw new Error("No Playlist Exist");
    }

    playlist.songs.push(songId);

    await playlist.save();

    res.status(201).json(playlist);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const createPlaylist = async (req, res) => {
  const { title } = req.body;
  const { name } = req.user;
  try {
    if (!name) {
      throw new Error("User Must be Authenticated");
    }

    const playlist = await Playlist.create({
      title: title,
      createdBy: name,
    });

    res.status(200).json(playlist);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getPlaylist = async (req, res) => {
  try {
    const { playlistId } = req.params;

    const playlist = await Playlist.findById(playlistId).populate("songs");

    res.status(200).json(playlist);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

const getAllPlaylist = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.status(200).json(playlists);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = {
  addSongToPlaylist,
  createPlaylist,
  getPlaylist,
  getAllPlaylist,
};
