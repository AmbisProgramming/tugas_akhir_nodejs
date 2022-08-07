const mongoose = require("mongoose");

//setup Schema

const MahasiswaSchema = mongoose.Schema({
  nim: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  jurusan: String,
  semester: String,
  create_date: {
    type: Date,
    default: Date.now(),
  },
});

const Mahasiswa = (module.exports = mongoose.model("mahasiswa", MahasiswaSchema));
module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
};
