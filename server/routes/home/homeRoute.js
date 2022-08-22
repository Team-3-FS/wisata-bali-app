const homeRoute = require("express").Router();
const { HomeController } = require("../../controllers");

homeRoute.get("/", HomeController.homePage);
homeRoute.post("/login", HomeController.login);
homeRoute.post("/register", HomeController.register);
homeRoute.get("/category/:id", HomeController.getCategoryById);

module.exports = homeRoute;
