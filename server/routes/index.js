const route = require("express").Router();
const adminRoutes = require("./admin");
const homeRoutes = require("./home/homeRoute");

route.use("/", homeRoutes);
route.use("/admin", adminRoutes);

module.exports = route;
