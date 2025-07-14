const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    // check if the user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      res.send({
        success: false,
        message: "The user already exists!",
      });
    }
    // hashing and salting
    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashPassword;

    // if not create the user according to the user model
    const newUser = await User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "User Registerd successfully",
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      res.send({
        success: false,
        message: "The user not found",
      });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (!validPassword) {
      res.status(401).send({
        success: false,
        message: "Sorry, Incorrect password",
      });
    }

    const jwtToken = jwt.sign({ userId: userExists._id }, "scaler_movies", {
      expiresIn: "2d",
    });

    res.send({
      success: true,
      message: "Login Successfully",
      token: jwtToken,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-valid-user", authMiddleware, async (req, res) => {
  const validUser = await User.findById(req.body.userId).select("-password");
  res.send({
    success: true,
    message: "You are authorized to go to the protected route!",
    data: validUser,
  });
});

module.exports = router;
