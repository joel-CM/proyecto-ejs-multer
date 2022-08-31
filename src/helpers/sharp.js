const sharp = require("sharp");

const sharpHelper = async (path, size, destination) => {
  try {
    const responseResize = await sharp(path)
      .resize(size, size)
      .toFile(destination);
    return { error: false, result: responseResize };
  } catch (err) {
    console.log(err);
    return { error: true, result: err };
  }
};

module.exports = sharpHelper;
