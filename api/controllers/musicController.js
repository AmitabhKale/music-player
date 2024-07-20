const getAllMusic = (req, res) => {
  res.send("All Music Will be Served from here");
};

const addNewMusic = (req, res) => {
  res.send("New Music Loading");
};

module.exports = {
  addNewMusic,
  getAllMusic,
};
