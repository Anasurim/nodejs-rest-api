const express = require("express");

const { register, login } = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.registerSchema), login);

module.exports = router;
