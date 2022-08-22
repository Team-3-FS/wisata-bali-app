const adminRoute = require("express").Router();

adminRoute.get("/", (req, res) => {
  res.json({
    message: "Home Page dashboard admin",
  });
});

const wisataRoutes = require("./wisata");
const categoryRoutes = require("./category");
const imageRoutes = require("./image");
const komenRatingRoutes = require("./komenRating");
const userRoutes = require("./user");

adminRoute.use("/wisata", wisataRoutes);
adminRoute.use("/categories", categoryRoutes);
adminRoute.use("/images", imageRoutes);
adminRoute.use("/komenRating", komenRatingRoutes);
adminRoute.use("/users", userRoutes);

module.exports = adminRoute;
