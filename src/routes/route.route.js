const express = require("express");
const router = express.Router();
const controllerControllers = require("../controllers/controller.controller");

router.get("/path", controllerControllers.action);
module.exports = router;
