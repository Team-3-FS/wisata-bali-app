const route = require("express").Router();
const adminRoutes = require("./admin");
const homeRoutes = require("./home/homeRoute");
const userRoutes = require("./user/userRoute");
const { cekUser, cekAdmin } = require("../middlewares/cekUserStatus");

route.use("/home", cekAdmin, homeRoutes);
route.use("/admin", adminRoutes);
route.use("/user", cekUser, userRoutes);

module.exports = route;
