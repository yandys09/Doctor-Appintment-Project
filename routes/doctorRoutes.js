const express = require("express");
const {
  getAllDoctorsController,
  updateProfileController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getAllDoctorsController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

module.exports = router;
