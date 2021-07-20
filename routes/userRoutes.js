const express = require("express");
const { registerValidations, register, loginValidations, login ,gallery,offer} = require("../controllers/userController");
const router = express.Router();

// router.post("/signup",registerValidations,register);
router.post("/login",loginValidations,login);
router.get("/gallery",gallery);
router.get("/offer",offer);

module.exports = router;