const router = require("express").Router();
const path = require("path");
const mainvideos = require("../data/mainVideo.json");

router.get("/:videoId", (req, res) => {
  res
    .status(200)
    .json(mainvideos.find((video) => video.id === req.params.videoId));
});

module.exports = router;
//change url from axios call in front end
//
