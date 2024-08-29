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
  const { title } = req.body;
  const { name } = req.user;
  console.log(req.user.name);
  const musicFile = req.file;
  try {
    const music = new Music({
      title: title,
      artist: name,
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
