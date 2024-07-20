const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConn");

const app = express();

// connection
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/music", require("./routes/musicRoute"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serve is listening on PORT: ${PORT} `);
});
