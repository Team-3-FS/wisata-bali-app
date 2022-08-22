const komenRatingRoutes = require("express").Router();
const { KomenRatingController } = require("../controllers");

komenRatingRoutes.get("/", KomenRatingController.getKomenRating);
komenRatingRoutes.get("/:id", KomenRatingController.getKomenRatingId);
komenRatingRoutes.post("/add", KomenRatingController.addKomenRating);
komenRatingRoutes.delete(
  "/delete/:id",
  KomenRatingController.deleteKomenRating
);
komenRatingRoutes.put("/update/:id", KomenRatingController.updateKomenRating);

module.exports = komenRatingRoutes;
