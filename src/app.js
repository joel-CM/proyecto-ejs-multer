const express = require("express");
const path = require("path");
const morgan = require("morgan");
const db = require("./db");
const routes = require("./routes/index.routes");
require("dotenv").config();

const app = express();

// settings
app.set("port", process.env.PORT || 3001);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10000000" }));
app.use(morgan("dev"));

// routes
app.use("/", routes);

module.exports = app;
