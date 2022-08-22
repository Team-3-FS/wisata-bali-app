const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page Wisata Bali Apps",
  });
});

const wisataRoutes = require("./wisata");
const categoryRoutes = require("./category");
const imageRoutes = require("./image");
const komenRatingRoutes = require("./komenRating");
const userRoutes = require("./user");

route.use("/wisata", wisataRoutes);
route.use("/category", categoryRoutes);
route.use("/image", imageRoutes);
route.use("/komenRating", komenRatingRoutes);
route.use("/user", userRoutes);

module.exports = route;
