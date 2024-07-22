const Music = require("../model/musicSchema");

let statusCode = 500;

const getAllMusic = async (req, res) => {
  try {
    const music = await Music.find();
    res.status(200).json(music);
  } catch (e) {
    res.status(statusCode).json({ error: e.message });
  }
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
