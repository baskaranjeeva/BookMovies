const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

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
// router.post("/login", async (req, res) => {});

module.exports = router;
