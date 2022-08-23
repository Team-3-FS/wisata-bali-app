const route = require("express").Router();
const adminRoutes = require("./admin");
const homeRoutes = require("./home/homeRoute");
const userRoutes = require("./user/userRoute");

route.use("/", homeRoutes);
route.use("/admin", adminRoutes);
route.use("/user", userRoutes);

module.exports = route;
