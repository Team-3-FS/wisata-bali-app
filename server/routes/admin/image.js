const imageRoutes = require("express").Router();
const { ImageController } = require("../../controllers");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

imageRoutes.get("/", ImageController.getImage);
imageRoutes.get("/:id", ImageController.getImageId);
imageRoutes.post("/", upload.single("images"), ImageController.addImage);
imageRoutes.delete("/:id", ImageController.deleteImage);

module.exports = imageRoutes;
