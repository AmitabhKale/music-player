const express = require("express");
const { getAllMusic, addNewMusic } = require("../controllers/musicController");
const upload = require("../upload");
const router = express.Router();

router.get("/", getAllMusic);
router.post("/add", upload.upload.single("music"), addNewMusic);

module.exports = router;
