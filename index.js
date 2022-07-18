require("dotenv").config();
const express = require("express");
const app = express();
const videoRouter = require("./routes/videoRoutes");
const mainVideoRouter = require("./routes/mainVideoRoutes");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/videos", videoRouter);
app.use("/api/mainvideo", mainVideoRouter);
// //app.use("/api/videoupload", (req, res) => {
//   //   response.status(200).send("<h1>Hello there!</h1>");
// });
app.get("/", (_request, response) => {
  response.status(200).send("<h1>Hello there!</h1>");
});
app.use(express.static(path.join(__dirname, "public")));
//listening to client requests on port 5050
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
