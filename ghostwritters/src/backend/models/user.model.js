const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema(
  {
    // fullName: {
    //   type: String,
    //   required: true,
    // },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // gender: {
    //   type: String,
    //   required: true,
    //   enum: ["male", "female"],
    // },
    // profilePic: {
    //   type: String,
    //   default: "",
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User
