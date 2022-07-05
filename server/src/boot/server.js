const express = require("express");
const cors = require("cors");

const api = require("../routes/api");
const web = require("../routes/web");

const app = express();
app.use(cors());
app.use(express.json()) // Hab req.body peticiones get
app.use(express.urlencoded({extended:false})); //peticiones post

//app.use("/api/v1", api);
app.use("/", web);

module.exports = app;