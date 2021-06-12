const express = require("express");
const router = express.Router();
const multer = require("multer");

const classController = require("../controller/classController");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, +Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/create", upload.single("image"), classController.createData);
router.get('/show', classController.getData)
router.get('/show/:ClassId', classController.getDataById);
router.delete('/delete/:ClassId',classController.deleteDataById)
router.put('/edit/:ClassId',upload.single("image"),classController.updateDataById)

module.exports = router;
