const { Schema, model } = require("mongoose");
const appointmentSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    doctorId: {
      type: String,
      require: true,
    },
    doctorInfo: {
      type: String,
      require: true,
    },
    userInfo: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: "pending",
    },
    time: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const appointmentModel = model("appointment", appointmentSchema);
module.exports = appointmentModel;
