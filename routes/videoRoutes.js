require("dotenv").config();
const router = require("express").Router();
const path = require("path");
const mainVideo = require("../data/mainVideo.json");
const utils = require("../utils/utils");
const moment = require("moment");
const PORT = process.env.PORT;

const image = `http://localhost:${PORT}/images/bike.jpg`;

router.get("/", (_req, res) => {
  res.status(200).json(mainVideo);
});

const imageUrl = `http://localhost:${PORT || 8080}/images/bike.jpg`;
router.get("/images/bike.jpg", (_req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "public/images/bike.jpg"));
});

router.post("/", (req, res) => {
  const newVideoObj = {
    id: utils.getNewId(),
    title: req.body.title,
    description: req.body.description,
    channel: "channel",
    image: imageUrl,
    views: "",
    likes: "",
    duration: "8",
    views: "9",
    likes: "9",
    duration: "duration",
    video: "dfbjd",
    timestamp: moment().valueOf(), // current unix time in ms
    comments: [],
  };
  // we create a newVideoObj and update our mainVideo.json file
  utils.writeToJsonFile("data/mainVideo.json", [...mainVideo, newVideoObj]);
  // and then we send back a 201 status code and the newVideoObj
  res
    .status(201)
    .json({ updatedVideos: [...mainVideo, newVideoObj], success: true });

  res.status(200).json(sideVideos);
});

module.exports = router;
