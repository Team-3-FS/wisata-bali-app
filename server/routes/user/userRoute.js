const userRoute = require("express").Router();
const { UsersController } = require("../../controllers");
const upload = require("../../middlewares/uploadImage");

// userRoute.get("/", (req, res) => res.json({ message: `user` }));
userRoute.get("/", UsersController.userPage);
userRoute.get("/:id", UsersController.detail);
userRoute.post("/:id", UsersController.addKomentar);
userRoute.put("/:id", UsersController.updateKomentar);
userRoute.delete("/:id", UsersController.deleteKomentar);
userRoute.get("/profile", UsersController.getProfile);
userRoute.put("/profile", upload.single("images"), UsersController.updProfile);

module.exports = userRoute;
