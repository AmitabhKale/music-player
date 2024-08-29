const express = require("express");
const { getAllMusic, addNewMusic } = require("../controllers/musicController");
const upload = require("../upload");
const { auth } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllMusic);
router.post("/add", auth, upload.upload.single("music"), addNewMusic);

module.exports = router;
