const express = require("express");
const { loginController, registerController } = require("../controllers/userCtrl");

//router object
const router = express.Router();

// routes

//LOGIN || POSt
router.post("/login", loginController)

//REGISTer || POST
router.post("/register", registerController)

module.exports= router
