const express = require("express");
const router = express.Router();
const authenticationMiddlewares = require("../middlewares/authentication.middleware");
const controllerControllers = require("../controllers/controller.controller");

router.get("/path/1", controllerControllers.action);
router.get("/path/2", authenticationMiddlewares.token, controllerControllers.action);

module.exports = router;
