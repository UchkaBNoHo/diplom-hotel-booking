const userModel = require("../model/userModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;
  console.log(userName, email, password, confirmPassword);

  try {
    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: `User with this email already exist!`,
      });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password do not match!" });
    }

    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    const newUser = await userModel.create({
      userName,
      email,
      password: hashedPassword,
    });

    // console.log(newUser);

    // JWT Token

    let token = jwt.sign({ userId: user?._id }, "Uchka", { expiresIn: "10d" });
    res.cookie("token", token);
    console.log(newUser);
    return res.status(200).json({
      message: "Login success",
      token,
      userName,
      userId: newUser._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const user = await userModel.findOne({ email });

    if (!user) return res.status(400).json({ message: "user not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Password is incorrect" });

    // JWT Token

    let token = jwt.sign({ userId: user?._id }, "Uchka", { expiresIn: "10d" });
    res.cookie("token", token);
    return res.status(200).json({
      message: "Login success",
      token,
      userName: user.userName,
      userId: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login!" });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
