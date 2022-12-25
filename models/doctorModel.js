const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "첫번째 이름은 필수 항목입니다."],
    },
    lastName: {
      type: String,
      required: [true, "두번째 이름은 필수 항목입니다."],
    },
    phone: {
      type: String,
      required: [true, "전화 번호는 필수 항목입니다."],
    },
    email: {
      type: String,
      required: [true, "이메일은 필수 항목입니다."],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "주소는 필수 항목입니다."],
    },
    specialization: {
      type: String,
      required: [true, "전문화란은 필수 항목입니다."],
    },
    experience: {
      type: String,
      required: [true, "경험란은 필수 항목입니다."],
    },
    feesPerCunsaltation: {
      type: Number,
      required: [true, "수수료는 필수 항목입니다."],
    },
    timings: {
      type: Object,
      required: [true, "일 하는 시간은 필수 항목입니다."],
    },
  },
  { timestamps: true }
);

const doctorModel = mongoose.model("users", doctorSchema);
module.exports = doctorModel;
