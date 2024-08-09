const express = require("express");
const { auth } = require("../middleware/authMiddleware");
const {
  createPlaylist,
  addSongToPlaylist,
  getPlaylist,
  getAllPlaylist,
} = require("../controllers/playlistController");
const router = express.Router();

router.get("/", getAllPlaylist);
router.post("/new", auth, createPlaylist);
router.post("/:playlistId", auth, addSongToPlaylist);
router.get("/:playlistId", getPlaylist);

module.exports = router;
