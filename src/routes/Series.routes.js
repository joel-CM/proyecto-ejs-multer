const { Router } = require("express");
const controller = require("../controllers/Series.controller");
// middleware
const uploadSerie = require("../middlewares/uploadSerie");
const resizeSerie = require("../middlewares/resizeSerie.middleware");

const route = Router();

const middlewaresCreate = [uploadSerie, resizeSerie];

route.get("/reset", controller.reset);
route.get("/", controller.getSeries);
route.post("/", middlewaresCreate, controller.createSerie);

module.exports = route;
