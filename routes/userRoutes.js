const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

// routes

//LOGIN || POSt
router.post("/login", loginController);

//REGISTer || POST
router.post("/register", registerController);

// Auth || POST
router.post("/getUserData", authMiddleware, authController);

module.exports = router;
