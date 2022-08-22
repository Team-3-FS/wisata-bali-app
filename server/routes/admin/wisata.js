const wisataRoutes = require("express").Router();
const { WisataController } = require("../../controllers");

wisataRoutes.get("/", WisataController.getWisata);
wisataRoutes.get("/:id", WisataController.getWisataId);
wisataRoutes.post("/add", WisataController.addWisata);
wisataRoutes.delete("/delete/:id", WisataController.deleteWisata);
wisataRoutes.put("/update/:id", WisataController.updateWisata);

module.exports = wisataRoutes;
