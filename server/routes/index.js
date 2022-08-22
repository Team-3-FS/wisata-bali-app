const route = require("express").Router();
const adminRoutes = require("./admin");

route.get("/", (req, res) => res.json({ message: `home page` }));
route.use("/admin", adminRoutes);

module.exports = route;
