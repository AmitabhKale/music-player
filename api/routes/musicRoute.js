const express = require("express");
const { getAllMusic, addNewMusic } = require("../controllers/musicController");
const router = express.Router();

router.get("/", getAllMusic);
router.post("/add", addNewMusic);

module.exports = router;
