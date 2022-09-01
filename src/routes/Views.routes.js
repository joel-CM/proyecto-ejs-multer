const { Router } = require("express");
const controller = require("../controllers/Views.controller");

const route = Router();

route.get("/", controller.index);
route.get("/create-series", controller.createSerie);
route.get("/view-series", controller.viewSeries);
route.get("/serie/:id", controller.detailSerie);

module.exports = route;
