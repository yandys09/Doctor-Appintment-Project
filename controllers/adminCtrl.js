const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "사용자 데이터 목록",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "사용자를 가져오는 중 오류 발생",
    });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "의사 데이터 목록",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "의사 데이터를 가져오는 중 오류 발생",
      error,
    });
  }
};

// doctor account status
const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
    const user = await userModel.findOne({ _id: doctor.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "doctor-account-request-updated",
      message: `의사 계정 요청에 ${status}가 있습니다.`,
      onClickPath:'/notification' 
    })
    user.isDoctor === '승인' ? true : false
    await user.save()
    res.status(201).send({
      success: true,
      message: "계정 상태 업데이트됨",
      data: doctor,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: "계정 상태 오류",
      error,
    });
  }
};

module.exports = {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
};
