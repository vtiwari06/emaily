const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ buy: "buddy" });
});

app.listen(PORT, () => {
  console.log("Server started at port " + PORT);
});
