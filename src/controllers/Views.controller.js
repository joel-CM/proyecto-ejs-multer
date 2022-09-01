const serieModel = require("../models/Series.model");

const index = (req, res) => {
  res.render("index", {});
};

const createSerie = (req, res) => {
  res.render("createSeries", {});
};

const viewSeries = async (req, res) => {
  const series = await serieModel.find();
  res.render("viewSeries", { series });
};

const detailSerie = async (req, res) => {
  const { id: idSerie } = req.params;

  const serie = await serieModel.findById(idSerie);

  res.render("detailSerie", { serie });
};

module.exports = { index, createSerie, viewSeries, detailSerie };
