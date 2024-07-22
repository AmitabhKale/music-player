const express = require("express");
const cors = require("cors");
const path = require("path");

const bodyParser = require("body-parser");
const connectDB = require("./config/dbConn");

const app = express();

// connection
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.urlencoded("public"));

// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/music", require("./routes/musicRoute"));

const PORT = 5000;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serving song file
app.get("/songs/:songName", (req, res) => {
  const songName = req.params.songName;
  const filePath = path.join(__dirname, "uploads", songName);
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Serve is listening on PORT: ${PORT} `);
});
