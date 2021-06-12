const Class = require("../model/classModel");
const fs = require("fs");

module.exports = {
  createData: (req, res) => {
    Class.create({
      image: req.file && req.file.path,
      imageName: req.body.imageName,
      title: req.body.title,
      subtitle: req.body.subtitle,
      sertifikat: req.body.sertifikat,
      harga: req.body.harga,
      kuota: req.body.kuota,
      namaMentor: req.body.namaMentor,
      link: req.body.link,
    })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  getData: (req, res) => {
    Class.findAll()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  getDataById: (req, res) => {
    Class.findOne({ where: { id: req.params.ClassId } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteDataById: (req, res) => {
    Class.findOne({ where: { id: req.params.ClassId } })
      .then((result) => {
        fs.unlinkSync(result.image);
        Class.destroy({ where: { id: req.params.ClassId } })
          .then((u) => {
            res.json(result);
          })
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },

  updateDataById: (req, res) => {
    if (req.file) {
      Class.findOne({ where: { id: req.params.ClassId } })
        .then((result) => {
          fs.unlinkSync(result.image);
        })
        .catch((err) => res.status(400).json(err));

      var dataRecord = {
        image: req.file.path,
        imageName: req.body.imageName,
        title: req.body.title,
        subtitle: req.body.subtitle,
        sertifikat: req.body.sertifikat,
        harga: req.body.harga,
        kuota: req.body.kuota,
        namaMentor: req.body.namaMentor,
        link: req.body.link,
      };
    } else {
      var dataRecord = {
        imageName: req.body.imageName,
        title: req.body.title,
        subtitle: req.body.subtitle,
        sertifikat: req.body.sertifikat,
        harga: req.body.harga,
        kuota: req.body.kuota,
        namaMentor: req.body.namaMentor,
        link: req.body.link,
      };
    }
    Class.update(dataRecord, { where: { id: req.params.ClassId } })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        fs.unlink(req.file.path, (err) => {
          if (!req.file.path && err) {
            next(err);
          }
        });
        return res.status(400).json("Failed update data!");
      });
  },
};
