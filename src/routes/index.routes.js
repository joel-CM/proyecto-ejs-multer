const { Router } = require("express");
const viewsRoute = require("./Views.routes");
const seriesRoute = require("./Series.routes");

const route = Router();

route.use("/", viewsRoute);
route.use("/api/series", seriesRoute);

module.exports = route;
