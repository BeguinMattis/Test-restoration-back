const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.controller");

router.get("/path", controller.action);
module.exports = router;
