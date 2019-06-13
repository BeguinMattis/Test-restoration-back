const express = require("express");
const router = express.Router();
const authenticationMiddlewares = require("../middlewares/authentication.middleware");
const opinionControllers = require("../controllers/opinion.controller");

router.get("/list", authenticationMiddlewares.token, opinionControllers.list);
router.post("/add", authenticationMiddlewares.token, opinionControllers.add);

module.exports = router;
