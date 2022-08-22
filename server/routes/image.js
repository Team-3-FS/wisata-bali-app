const imageRoutes = require("express").Router();
const { ImageController } = require("../controllers");

imageRoutes.get("/", ImageController.getImage);
imageRoutes.get("/:id", ImageController.getImageId);
imageRoutes.post("/add", ImageController.addImage);
imageRoutes.delete("/delete/:id", ImageController.deleteImage);
imageRoutes.put("/update/:id", ImageController.updateImage);

module.exports = imageRoutes;
