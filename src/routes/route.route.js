const express = require("express");
const router = express.Router();
const authenticationMiddlewares = require("../middlewares/authentication.middleware");
const controllerControllers = require("../controllers/controller.controller");

router.get("/path", authenticationMiddlewares.token, controllerControllers.action);
module.exports = router;
