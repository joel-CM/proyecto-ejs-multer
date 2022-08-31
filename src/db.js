const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => {
    console.log(`db connected on ${db.connection.host}/${db.connection.name}`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
