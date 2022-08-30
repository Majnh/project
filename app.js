const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/preview-saasto/sassto/index-2.html")
  );
});

app.listen(4001, () => {
  console.log("SWC is running on port 4000");
});
