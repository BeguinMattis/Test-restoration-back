const express = require("express");
const router = express.Router();
const authenticationControllers = require("../controllers/authentication.controller");

router.get("/google", authenticationControllers.google);
module.exports = router;
