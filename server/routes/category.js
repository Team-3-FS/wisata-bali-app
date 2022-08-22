const categoryRoutes = require("express").Router();
const { CategoryController } = require("../controllers");

categoryRoutes.get("/", CategoryController.getCategory);
categoryRoutes.get("/:id", CategoryController.getCategoryId);
categoryRoutes.post("/add", CategoryController.addCategory);
categoryRoutes.delete("/delete/:id", CategoryController.deleteCategory);
categoryRoutes.put("/update/:id", CategoryController.updateCategory);

module.exports = categoryRoutes;
