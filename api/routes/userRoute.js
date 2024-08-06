const express = require("express");
const { register, login, myData } = require("../controllers/userController");
const { auth } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, myData);

module.exports = router;
