const serieModel = require("../models/Series.model");

// return array of serries [{}, {}, ...]
const getSeries = async (req, res) => {
  const series = await serieModel.find();
  res.status(200).json(series);
};

// create a serie
const createSerie = async (req, res) => {
  const { name, description } = req.body;

  try {
    // saving serie info on db
    const newSerie = await serieModel.create({
      name,
      description,
      image: req.file.filename,
    });

    console.log("serie saved on db");
    res.json({ error: false, result: newSerie });
  } catch (e) {
    console.log(e);
  }
};

const reset = async (req, res) => {
  const responseReset = await serieModel.remove({});
  res.json(responseReset);
};

module.exports = { getSeries, createSerie, reset };
