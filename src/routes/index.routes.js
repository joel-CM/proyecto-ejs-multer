const { Router } = require("express");
const homeRoute = require("./Home.routes");
const seriesRoute = require("./Series.routes");

const route = Router();

route.use("/", homeRoute);
route.use("/api/series", seriesRoute);

module.exports = route;
