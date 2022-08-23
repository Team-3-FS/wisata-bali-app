const imageRoutes = require("express").Router();
const { ImageController } = require("../../controllers");

imageRoutes.get("/", ImageController.getImage);
imageRoutes.get("/:id", ImageController.getImageId);
imageRoutes.post("/", ImageController.addImage);
imageRoutes.delete("/:id", ImageController.deleteImage);
imageRoutes.put("/:id", ImageController.updateImage);

module.exports = imageRoutes;
