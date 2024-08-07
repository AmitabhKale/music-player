const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
  ARTIST: "ARTIST",
};

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide Name"],
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1722925290~exp=1722925890~hmac=07f08e506b7d31fcde1514b5e92366295270bb9caf0c878d23f53d84cd834445",
    },
    role: {
      type: String,
      enum: [ROLES.ADMIN, ROLES.USER, ROLES.ARTIST],
      default: ROLES.USER,
    },
    liked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Musics",
      },
    ],
    recentlyListened: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Musics",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET
  );

  return token;
};

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
