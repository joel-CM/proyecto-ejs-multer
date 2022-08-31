const sharpHelper = require("../helpers/sharp");
const path = require("path");

const resizeSerie = async (req, res, next) => {
  if (req.uploadImage?.error) {
    console.log(req.uploadImage);
    return res.json(req.uploadImage);
  }

  // resizing file (img)
  const filePath = req.file.path;
  const fileSize = 200;
  const fileName = req.file.filename;
  const toFile = path.join(__dirname, `../public/resizes/${fileName}`);

  try {
    const { error, result } = await sharpHelper(filePath, fileSize, toFile);
    if (!error) {
      console.log("image resized:");
      console.log(result);
      return next();
    }
    res.json({ error, result });
  } catch (e) {
    console.log(e);
  }
};

module.exports = resizeSerie;
