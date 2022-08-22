const userRoutes = require("express").Router();
const { UserController } = require("../../controllers");

userRoutes.get("/", UserController.getUser);
userRoutes.get("/:id", UserController.getUserId);
userRoutes.post("/add", UserController.addUser);
userRoutes.delete("/delete/:id", UserController.deleteUser);
userRoutes.put("/update/:id", UserController.updateUser);

module.exports = userRoutes;
