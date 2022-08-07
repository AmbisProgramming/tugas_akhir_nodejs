Mahasiswa = require("./mahasiswaModel");

exports.index = function (req, res) {
  Mahasiswa.get(function (err, mahasiswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Data mahasiswa Berhasil Didapatkan",
      data: mahasiswa,
    });
  });
};

exports.new = (req, res) => {
  let mahasiswa = new Mahasiswa();

  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;

  mahasiswa
    .save()
    .then((data) => {
      res.json({
        message: "Mahasiswa Baru Terdaftar !",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Internal Server Error",
      });
    });
};

exports.view = (req, res) => {
  Mahasiswa.findById(req.params.mahasiswa_id, (err, mahasiswa) => {
    if (err) {
      res.status(500).send({
        status: "error",
        message: err,
      });
    }
    res.json({
      message: "Mahasiswa details loading ...",
      data: mahasiswa,
    });
  });
};

exports.update = (req, res) => {
  Mahasiswa.findById(req.params.mahasiswa_id, (err, mahasiswa) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }

    mahasiswa.nama = req.body.nama;
    mahasiswa.nim = req.body.nim;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;

    mahasiswa
      .save()
      .then((data) => {
        res.json({
          message: "Mahasiswa Info Updated",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Internal Server Error",
        });
      });
  });
};

exports.delete = (req, res) => {
  Mahasiswa.remove(
    {
      _id: req.params.mahasiswa_id,
    },
    (err) => {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Mahasiwa deleted",
      });
    }
  );
};
