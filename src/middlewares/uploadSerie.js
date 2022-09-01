const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});

const uploadSerie = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const validExts = ["png", "jpg"];

    if (!validExts.includes(ext)) {
      req.uploadImage = {};
      req.uploadImage.error = true;
      req.uploadImage.result = "Error: archivo no soportado";
      return cb(null, false);
    }

    if (!req.body.name.trim() || !req.body.description) {
      req.uploadImage = {};
      req.uploadImage.error = true;
      req.uploadImage.result = "name and description are required!";
      return cb(null, false);
    }

    console.log("image uploaded");
    cb(null, true);
  },
}).single("image");

module.exports = uploadSerie;
