const { Router } = require("express");
const controller = require("../controllers/Home.controller");

const route = Router();

route.get("/", controller.home);

module.exports = route;
