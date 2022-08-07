const express = require("express");
const router = express.Router();

//set default api respon
router.get("/", (req, res) => {
  res.json({
    status: "Api working",
    message: "Welcome to Mahasiswa Backend App",
  });
});

const mahasiswaController = require("./mahasiswaController");

router.route("/mahasiswa").get(mahasiswaController.index).post(mahasiswaController.new);

router.route("/mahasiswa/:mahasiswa_id").get(mahasiswaController.view).patch(mahasiswaController.update).put(mahasiswaController.update).delete(mahasiswaController.delete);

module.exports = router;
