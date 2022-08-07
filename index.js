const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("express");
const port = 8080;
const app = express();

const apiRouter = require("./api-routes");

app.get("/", (req, res) => {
  res.json({
    status: "sukses",
    message: "Api berhasil dijalankan",
  });
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/api", apiRouter);

mongoose.connect("mongodb://localhost/mahasiwa");
const db = mongoose.connection;

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
