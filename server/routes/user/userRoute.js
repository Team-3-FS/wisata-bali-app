const userRoute = require("express").Router();
const { UsersController } = require("../../controllers");
const upload = require("../../middlewares/uploadImage");
const { cekUser, cekAdmin } = require("../../middlewares/cekUserStatus");

// userRoute.get("/", (req, res) => res.json({ message: `user` }));
userRoute.get("/", cekUser, UsersController.userPage);
userRoute.get("/wisata/:id", cekUser, UsersController.detail);
userRoute.post("/wisata/:id", cekUser, UsersController.addKomentar);
userRoute.put("/wisata/:id", cekUser, UsersController.updateKomentar);
userRoute.delete("/wisata/:id", cekUser, UsersController.deleteKomentar);
userRoute.get("/profile", cekUser, UsersController.getProfile);
userRoute.put("/profile", cekUser, upload.single("images"), UsersController.updProfile);

module.exports = userRoute;
