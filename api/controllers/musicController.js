const Music = require("../model/musicSchema");

let statusCode = 500;

const getAllMusic = (req, res) => {
  res.send("All Music Will be Served from here");
};

const addNewMusic = async (req, res) => {
  const { title, artist } = req.body;
  console.log(req.body.title, req.body.artist);
  const musicFile = req.file;
  try {
    const music = new Music({
      title: title,
      artist: artist,
      music: musicFile,
    });

    console.log(music);

    const newMusic = await music.save();
    if (!newMusic) {
      res.status(400);
      throw new Error("Something Went Wrong");
    }

    res.status(201).json({
      data: newMusic,
    });
  } catch (e) {
    res.status(statusCode).json({ error: e.message });
  }
};

module.exports = {
  addNewMusic,
  getAllMusic,
};
