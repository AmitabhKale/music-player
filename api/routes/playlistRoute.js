const express = require("express");
const { auth } = require("../middleware/authMiddleware");
const {
  createPlaylist,
  addSongToPlaylist,
  getPlaylist,
} = require("../controllers/playlistController");
const router = express.Router();

router.post("/new", auth, createPlaylist);
router.post("/:playlistId", auth, addSongToPlaylist);
router.get("/:playlistId", getPlaylist);

module.exports = router;
